import React, { useState } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import AddDrugOne from '@components/forms/add-drug-pg1';
import AddDrugTwo from '@components/forms/add-drug-pg2';
import AddDrugNavBar from '../components/layout/add-drug/top-nav-bar';
import AddDrugProgressBar from '../components/layout/add-drug/progress-bar';
import { Container, Grid, Button } from '@material-ui/core';
import styles from './dashboard/Home.module.css';

const AddDrug = () => {
  const methods = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
  });
  const [currentPage, setCurrentPage] = useState(1);

  const onSubmit = data => console.log(data);
  const onNext = () => {
    methods.trigger().then(result => {
      if (result) setCurrentPage(prevPage => prevPage + 1);
    });
  };

  return (
    <Container 
    className={styles.Grid}>
      <FormProvider {...methods}>
        <Grid container direction="column">
          <Grid item>
            <AddDrugNavBar
              username={`test`}
              drugName={`drugtest`}
              dosage={`dosagetest`}x

              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Grid>
          <Grid item>
            <AddDrugProgressBar page={currentPage} />
          </Grid>
          <Grid item>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Grid container item>
                {currentPage === 1 && <AddDrugOne formMethods={methods} />}
                {currentPage === 2 && <AddDrugTwo formMethods={methods} />}
                {/* {currentPage === 1 && <AddDrugOne formMethods={methods} />} */}
              </Grid>
              {currentPage === 3 && (
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              )}
              {currentPage !== 3 && (
                <Button onClick={onNext} variant="contained">
                  Next
                </Button>
              )}
            </form>
          </Grid>
        </Grid>
      </FormProvider>
    </Container>
  );
};

export default AddDrug;
