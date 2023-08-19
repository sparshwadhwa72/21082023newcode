import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useFormContext } from 'react-hook-form';
import DropdownInput from './form-components/dropdown/dropdownpage2';

import AddDrugSpecificDay from './form-components/add-drug-components/add-drug-specific-day/add-drug-specific-day-page2';
import AddDrugEveryN from './form-components/add-drug-components/add-drug-every-n/add-drug-every-n-page2';
import AddDrugAsNeeded from './form-components/add-drug-components/add-drug-as-needed/add-drug-as-needed';
import AddDrugOddEven from './form-components/add-drug-components/add-drug-odd-even/add-drug-odd-even-page2';
import AddDrugDateDurations from './form-components/add-drug-components/add-drug-date-durations/add-drug-date-durations-page2';
import AddDrugEveryday from './form-components/add-drug-components/add-drug-everyday/add-drug-everyday';
import ManagePbar2 from '@components/layout/add-drug/Manage-schedule-probar';

const Managedrugfoursc2 = ({ formMethods }) => {
  const { watch } = useFormContext();

  const frequencyTypes = [
    'Everyday',
    'Specific day(s)',
    'Every N day(s)',
    'Duration(s)',
    'Odd/Even calendar day',
    'As needed',
  
    
   
  ];
  const selectedFrequencyType = watch('frequency');
  return (
    <Grid container item direction="column"
    style={{
        backgroundColor: '#f3f8fe',
  
      }}>
          <Grid>
            
            <ManagePbar2/>
            </Grid>
            <br></br>
            <br></br>
      <Grid item container direction="column">
        <Grid item
        >
          <DropdownInput
          
            placeholder={`Specific day(s)`}
            name={`frequency`}
            label={`Frequency*`}
            control={formMethods.control}
            selectOptions={frequencyTypes}
            rules={{ required: true }}
          />
             <Grid item
          style={{
              backgroundColor: '#fff',
              width: '416px',
              height: '80px',
              borderRadius: '16px',
              
    boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
    margin: '24px 0px 0px 0px',
          }}
          >
            <Typography
            style={{
                width: "259px",
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "21px",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                color: "#216194",
                flex: "none",
                order: 0,
                flexGrow: 0,
                
    padding: '26px 10px 10px 20px',
            }}>
                Day(s) of the week*
            </Typography>
            <Typography
            style={{
                
                width: "21px",
  height: "19px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  color: "#216194",
  flex: "none",
  order: 0,
  flexGrow: 0,
  margin: '8px 0px 0px 20px',
            }}>Thursday,Sunday</Typography>
          </Grid>
          <Typography
          style={{
            width: '350px',
            height: '28px',
            margin: '40px 0px 0px 5px',
            fontfamily: 'Roboto',
            fontSize: '24px',
            fontWeight: 'Bold',
            fontstretch: 'normal',
            fontstyle: 'normal',
            lineheight: '1.25',
            letterspacing: 'normal',
            textalign: 'left',
            color: '#216194',
        }}>
            Time and Quantity
          </Typography>
          
          <Typography align='center'
                style={{
                    width: '522px',
                    height: '68px',
                    margin: '0px 16px 16px -20px',
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontweight: 'normal',
                    fontstretch: 'normal',
                    fontstyle: 'normal',
                    lineheight: '1.11',
                    letterspacing: 'normal',
                    textalign: 'left',
                    color: '#216194',
                    marginTop: 16,
                    
                    }}
                    
                >Add the Selected drug to a existing time slots or create a new one.
                    </Typography>
           
                    <Typography
             style={{
                width: '522px',
                height: '68px',
                margin: '-57px 16px 16px 2px',
                fontFamily: 'Roboto',
                fontSize: '16px',
                fontweight: 'normal',
                fontstretch: 'normal',
                fontstyle: 'normal',
                lineheight: '1.11',
                letterspacing: 'normal',
                textalign: 'left',
                color: '#216194',
                
                }}>   Don't forget to assign a quantity to it! </Typography>
          <Typography
          style={{
            width: '42px',
            height: '24px',
            margin: '26px 66px 12px 25px',
            fontFamily: 'Roboto',
            fontSize: '18px',
            fontWeight: 'bold',
            fontstretch: 'normal',
            fontstyle: 'normal',
            lineheight: '1.11',
            letterspacing: 'normal',
            textalign: 'left',
            color: '#216194',
        }}> Time
            
          </Typography>
          <Typography
          style={{
            width: '42px',
            height: '24px',
            margin: '-37px 66px 12px 325px',
            fontFamily: 'Roboto',
            fontSize: '18px',
            fontWeight: 'bold',
            fontstretch: 'normal',
            fontstyle: 'normal',
            lineheight: '1.11',
            letterspacing: 'normal',
            textalign: 'left',
            color: '#216194',
        }}> Quantity
            
          </Typography>
        </Grid>

        <Grid
        style={{
          width: "416px",
          height: "80px",
          margin: "8px 16px 16px 0",
          padding: "14px 20px 16px",
          borderRadius: "16px",
          boxShadow: "0 15px 30px 0 rgba(33, 97, 148, 0.15)",
          backgroundColor: "#fff"
        }}>
<Typography
style={{
  width: "97px",
  height: "21px",
  fontFamily: "Roboto",
  fontSize: "18px",
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.11,
  letterSpacing: "normal",
  textAlign: "left",
  color: "#216194"
}}>
  10:00 AM
</Typography>
<Typography
style={{
  width: "288px",
  height: "19px",
  margin: "8px 20px 1px 0",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.25,
  letterSpacing: "normal",
  textAlign: "left",
  color: "#bab9b9"
}}>4 Drugs Added</Typography>
<Grid
style={{
  
    width: '55px',
    height: '40px',
  margin: "-40px 0 0 330px",
  padding: "9.9px 7px 11px 8px",
  borderRadius: "16px",
  backgroundColor: "#f3f8fe"
}}>
<Typography
style={{
  width: "72px",
  height: "24px",
  margin: "-22px 1px 0 -18px",
  fontFamily: "Roboto",
  fontSize: "58px",
  fontWeight: 90,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.11,
  letterSpacing: "normal",
  textAlign: "center",
  color: '#216194',
}}>+</Typography>
</Grid>



        </Grid>

        <Grid
        style={{
          width: "416px",
          height: "80px",
          margin: "8px 16px 16px 0",
          padding: "14px 20px 16px",
          borderRadius: "16px",
          boxShadow: "0 15px 30px 0 rgba(33, 97, 148, 0.15)",
          backgroundColor: "#fff"
        }}>
<Typography
style={{
  width: "97px",
  height: "21px",
  fontFamily: "Roboto",
  fontSize: "18px",
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.11,
  letterSpacing: "normal",
  textAlign: "left",
  color: "#216194"
}}>
  01:00 AM
</Typography>
<Typography
style={{
  width: "288px",
  height: "19px",
  margin: "8px 20px 1px 0",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.25,
  letterSpacing: "normal",
  textAlign: "left",
  color: "#bab9b9"
}}>4 Drugs Added</Typography>
<Grid
style={{
  
    width: '55px',
    height: '40px',
  margin: "-40px 0 0 330px",
  padding: "9.9px 7px 11px 8px",
  borderRadius: "16px",
  backgroundColor: "#f3f8fe"
}}>
<Typography
style={{
  width: "72px",
  height: "24px",
  margin: "0px 1px 0 -19px",
  fontFamily: "Roboto",
  fontSize: "18px",
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.11,
  letterSpacing: "normal",
  textAlign: "center",
  color: '#216194',
}}>4</Typography>
</Grid>
        </Grid>
        {selectedFrequencyType === 'Specific day(s)' && (
          <AddDrugSpecificDay formMethods={formMethods} />
        )}
        {selectedFrequencyType === 'Every N day(s)' && <AddDrugEveryN formMethods={formMethods} />}
        {selectedFrequencyType === 'As needed' && <AddDrugAsNeeded formMethods={formMethods} />}
        {selectedFrequencyType === 'Odd/Even calendar day' && (
          <AddDrugOddEven formMethods={formMethods} />
        )}
        {selectedFrequencyType === 'Duration(s)' && (
          <AddDrugDateDurations formMethods={formMethods} />
        )}
        {selectedFrequencyType === 'Everyday' && <AddDrugEveryday formMethods={formMethods} />}
      </Grid>
    </Grid>
  );
};

export default Managedrugfoursc2;
