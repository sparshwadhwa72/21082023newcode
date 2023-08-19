/* eslint-disable no-case-declarations */
import client from './client';
import jwt_decode from 'jwt-decode';
/* This function is used to add a drug to the online server via Axios. Inputs required are details about the drug, details about the frequency and a quantity time array
that has to be created to save dispense details to the online server. */

export const PostDrug = async (frequencyType, drugDetails, frequencyDetails, quantityTime) => {
  /* The frequencyinput decides the frequency section for the URL. It is different for each frequency type. */
  let accessToken = await credentials.getAccessToken();
  const accessExpired = await credentials.checkExpired(accessToken);
  console.log('postdrugexp ' + accessExpired);
  if (accessExpired) {
    await RefreshAccessToken();
    accessToken = await credentials.getAccessToken();
  }
  console.log('postdrugacc ' + accessToken);
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  let frequencyInput = '';

  /* The data to be sent, the information below will always follow the same format for all the drugs. The changes come mainly for the dispense type. */

  let data = {
    drug_name: drugDetails.drugName,
    quantityInKindo: drugDetails.drugQuantity,
    strength: drugDetails.dosageStrength,
    unit: drugDetails.dosageUnit,
    isStorable: drugDetails.isStorable,
    isDispensable: drugDetails.isDispensable,
    typeOfDrug: null,
    drugLevel: 'high',
    canisterId: drugDetails.canisterID,
    expiryDate:
      drugDetails.expiryDate === Date(2048, 11, 24, 10, 33, 30, 0)
        ? null
        : moment(drugDetails.expiryDate).format('YYYY-MM-DD'),
  };
  console.log('topost: ' + JSON.stringify(data));

  /* The switch case is used to deal with preprocessing of the dispense data before it can be sent over to the Axios API. */

  switch (frequencyType) {
    case 'specific-days':
      frequencyInput = 'specificDays';
      console.log('days', frequencyDetails.days);

      const mySpecificDays = frequencyDetails.days.map(day => {
        return {
          day,
        };
      });

      data = { ...data, myDispenseDetail: quantityTime, mySpecificDays };

      break;

    case 'every-n-day':
      frequencyInput = 'everyNDay';
      data = {
        ...data,
        startDate: moment(frequencyDetails.startDate).format('YYYY-MM-DD'),
        myDispenseDetail: quantityTime,
        myEveryNDay: { n: frequencyDetails.everyN },
      };
      break;

    case 'everyday':
      frequencyInput = 'everyday';
      data = { ...data, myDispenseDetail: quantityTime };
      break;

    case 'as-needed':
      frequencyInput = '';
      data = { ...data, myDispenseDetail: quantityTime };
      break;

    /* The information for odd even days is sent in an array, [0] stores info for odd days and [1] stores even days info. The server requires a very different
    syntax for sending dispense information for this frequency type, whoich is why a lengthy pre-processing is required. */

    case 'odd-even-days':
      frequencyInput = 'oddEvenDay';

      const oddQuantity = quantityTime.quantities[0];

      const evenQuantity = quantityTime.quantities[1];

      const oddTime = quantityTime.times[0];

      const evenTime = quantityTime.times[1];

      const length = Math.max(oddQuantity.length, evenQuantity.length);

      let dispenseDetail = [];

      for (let i = 0; i < length; i++) {
        /* Each entry needs to follow the syntax that is fed to entry constant. Each entry object is pushed into the array and then appended to the data object */

        const entry = {
          timeOddDay: oddTime[i] || null,
          quantityOddDay: oddQuantity[i] || null,
          timeEvenDay: evenTime[i] || null,
          quantityEvenDay: evenQuantity[i] || null,
        };

        dispenseDetail.push(entry);
      }

      data = { ...data, myOddEvenDays: dispenseDetail };
      break;

    case 'odd-days':
      frequencyInput = 'everyOddDay';
      data = { ...data, myDispenseDetail: quantityTime };
      break;

    case 'even-days':
      frequencyInput = 'everyEvenDay';
      data = { ...data, myDispenseDetail: quantityTime };
      break;

    /* Same issue as odd even days, date durations can have multiple entries, each requiring a start and end date (different from odd even days in that regard),
    and can be more than two. */

    case 'date-durations':
      frequencyInput = 'dateDuration';

      let myDateDurations = [];

      for (let i = 0; i < quantityTime.quantities.length; i++) {
        /* Each entry has to be an object that follows the syntax shown below. The entry object is pushed into an array that is then appended to the data object. */

        const entry = {
          startDate: moment(frequencyDetails.durations[i].startDate).format('YYYY-MM-DD'),
          endDate: moment(frequencyDetails.durations[i].endDate).format('YYYY-MM-DD'),
          dispenseDetails: quantityTime.quantities[i].map((quantity, index) => {
            return {
              time: quantityTime.times[i][index],
              quantityToDispense: quantity,
            };
          }),
        };

        myDateDurations.push(entry);
      }

      data = { ...data, myDateDurations };
      break;
  }

  /* Now that everything has been done and the data has been prepared, we can send it to the online server. Currently we just print the response, but in the future we will change it so
  different things are done based on the error. This will mostly be a 5** error. */

  client
    .post(`/drugs/drug/${frequencyInput}/create/`, data, config)
    .then(function (response) {
      console.log('posted:', data);
      console.log('response', response);
    })
    .catch(function (error) {
      if (error.response) {
        console.log('error response', error.response);
      } else if (error.request) {
        console.log('error request', error.request);
      } else {
        console.log('error', error.message);
      }
    });

  return 0;
};

export const PosDemoDrug = async drugData => {};

export const RegisterIndividual = async ({ email, password, password2, fullName }) => {
  try {
    let response = await client.post(`myauth/registerIndividual/`, {
      email: email,
      password: password,
      password2: password2,
      full_name: fullName,
    });
    console.log(response);
  } catch (error) {
    if (error.response.status === 400) {
      if (error.response.data.email === 'email already existing.') {
        console.log('email already exists');
      }
    }
  }
};

export const SendEmailForVerification = async ({ email }) => {
  let response = await client.post(`myauth/sendEmailForVerification/`, {
    email: email,
  });
  console.log(response);
};

export const Login = async ({ email, password }) => {
  let refreshToken;
  let accessToken;
  let response;
  try {
    response = await client.post(`myauth/login/`, {
      email: email,
      password: password,
    });
    console.log(response.data);
    console.log(response.data.tokens);
    let tokens = JSON.parse(response.data.tokens.replace(/'/g, '"'));
    accessToken = tokens.access;
    refreshToken = tokens.refresh;
    window.localStorage.setItem('@access_token', accessToken);
    window.localStorage.setItem('@refresh_token', refreshToken);
    return true;
  } catch (error) {
    console.log(JSON.stringify(error));
  }
  return false;
};

export const RefreshAccessToken = async () => {
  let refreshToken = window.localStorage.getItem('@refresh_token');
  console.log('refer' + refreshToken);
  let accessToken;
  let response = await client.post(`myauth/token/refresh/`, {
    refresh: refreshToken,
  });
  accessToken = response.data.access;
  console.log('newaccess ' + response.data.access);
  window.localStorage.setItem('@access_token', accessToken);

  // .catch(error => {
  //   console.log(error.response.status);
  // });
};

export const GetDrugList = async () => {
  let accessToken = window.localStorage.getItem('@access_token');
  let drugList;
  const accessExpired = await checkExpired(accessToken);
  console.log('exp ' + accessExpired);
  if (accessExpired) {
    await RefreshAccessToken();
    accessToken = window.localStorage.getItem('@access_token');
  }
  console.log('gdlacc ' + accessToken);
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  let response = await client.get(`drugs/drugs/`, config);
  drugList = response.data;
  return drugList;
};

export const checkExpired = async token => {
  let decoded = jwt_decode(token);
  if (decoded.exp < Date.now() / 1000) {
    return true;
  } else {
    return false;
  }
};

export const SubmitKindoCode = async code => {
  let accessToken = window.localStorage.getItem('@access_token');
  const accessExpired = await checkExpired(accessToken);
  console.log('exp ' + accessExpired);
  if (accessExpired) {
    await RefreshAccessToken();
    accessToken = window.localStorage.getItem('@access_token');
  }
  console.log('gdlacc ' + accessToken);
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };
  try {
    let response = await client.post(
      'kindo/verifyConnectionCode/',
      { connection_code: code },
      config
    );
    console.log(response);
  } catch (error) {
    console.log('error');
  }
};
