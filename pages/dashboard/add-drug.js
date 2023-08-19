import React, { useState } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import AddDrugOne from '@components/forms/add-drug-pg1';
import AddDrugTwo from '@components/forms/add-drug-pg2';
import AddDrugNavBar from '../../components/layout/add-drug/top-nav-bar';
import AddDrugProgressBar from '../../components/layout/add-drug/progress-bar';
import Box from "@mui/material/Box";

import { Container, Grid} from '@material-ui/core';
import Button from "@mui/material/Button";
import { ArrowLeft } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import AddDrugThree from '@components/forms/add-drug-pg3';
import Adddrugsix from '@components/forms/add-drug-pg6';
import AddDrugseven from '@components/forms/add-drug-pg7';
import AddDrugeight from '@components/forms/Add-drug-pg8';

import AddDrugfour from '@components/forms/add-drug-pg4';

import Adddrugfive from '@components/forms/add-drug-pg5';
import Adddrugseven from '@components/forms/add-drug-pg7';

const useStyles = makeStyles({

Next: {
  width: "83px",
  height: "41px",
  backgroundColor: "#bab9b9",
  borderRadius: '16px',
      fontFamily: 'roboto',
      color: "#fff",
        textAlign: 'right',
        textTransform: 'none',
        fontSize: "16px",

        '@media(max-Width: 590px)' : {
         
          
        margin: '10px 1000px -170px 0px',
        },
},


Back: {
  width: "83px",
  height: "41px",
  backgroundColor: "#bab9b9",
  borderRadius: '16px',
      fontFamily: 'roboto',
      color: "#fff",
        textAlign: 'right',
        fontSize: "16px",

        '@media(max-Width: 390px)' : {
         
          margin: '25px 0px 0px -268px',
        },
},

});



const boxDefault = {
  height: 100,
  //display: "flex",
  padding: 2
};

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
  const onBack = () => {
    methods.trigger().then(result => {
      if (result) setCurrentPage(prevPage => prevPage - 1);
    });
  };
  const classes = useStyles();
  


  return (
    <Container >
      <FormProvider {...methods}>
        <Grid container  direction="column"
        >
          <Grid item>
            <AddDrugNavBar
              username={`Username`}
              drugName={``}
              dosage={``}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Grid>
          <br></br>
          
          <Grid item>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Grid container item xs={12}
              style={{
               // backgroundColor: '#f1f6fd',
                width: "1344px",
                
            }}>
          

          
                
                

                
                

                

          {currentPage === 1 && <AddDrugOne formMethods={methods} />}
                
                {currentPage === 2 && <AddDrugTwo formMethods={methods} />}

                
                {currentPage === 3 && <AddDrugThree formMethods={methods} />}

                
                {currentPage === 4 && <AddDrugfour formMethods={methods} />}

                

                
                {/* {currentPage === 1 && <AddDrugOne formMethods={methods} />} */}
              </Grid>
            
              <br></br><br></br>


              {currentPage !== 17 && (
                
      <Box
      m={2}
      display="flex"
      justifyContent="flex-end"
      alignItems="flex-end"

      sx={boxDefault}
    >
      <Button variant="contained"  onClick={onNext} className={classes.Next}
        >
        Next
      </Button>
    </Box>
              )}
              
              {currentPage == 3 && (
                
                <Box
                m={2}
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"      
                sx={boxDefault}
              >
                <Button variant="contained"  onClick={onBack} className={classes.Back}
                  >
                  Back
                </Button>
              </Box>
                        )}
            </form>
          </Grid>
        </Grid>
      </FormProvider>
    </Container>
  );
};

export default AddDrug;
