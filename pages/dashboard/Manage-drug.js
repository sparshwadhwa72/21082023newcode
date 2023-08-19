import React, { useState } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

import AddDrugOne from '@components/forms/manage-drug-pg1';
import AddDrugTwo from '@components/forms/add-drug-pg2';
import AddDrugNavBar from '../../components/layout/add-drug/Manage-drug-progress-bar';
import AddDrugProgressBar from '../../components/layout/add-drug/progress-bar';
import Box from "@mui/material/Box";
import PersistentDrawerLeft from '../../components/layout/add-drug/druglistbase';

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
import { isImportTypeAssertionContainer } from 'typescript';
import ManageDrugTwo from '@components/forms/Manage-drug-pg2';
import ManagedrugThree from '@components/forms/Manage-drug-pg3';
import Managedrugfour from '@components/forms/Manage-drug-pg4';
import Managedrugfive from '@components/forms/Manage-drug-pg5';
import Managedrugsix from '@components/forms/Manage-drug-pg6';
import Managedrugseven from '@components/forms/Manage-drug-pg7';
import ManagedrugOne from '@components/forms/manage-drug-pg1';
import Managedrugeight from '@components/forms/Manage-drug-pg8';
import App from '@components/forms/time-picker-example';
import SelectComponent from '@components/forms/time-picker-example';
import DropdownInput from '@components/forms/time-picker-example';
import Dropdown from '@components/forms/time-picker-example';
import Switch from '@components/forms/time-picker-example';
import Switchh from '@components/forms/time-picker-example';
import Managedrugsixsc2 from '@components/forms/manage-drug-pg6sc2';
import Managedrugsevensc2 from '@components/forms/manage-drug-pg7sc2';
import ManagedrugThreesc2 from '@components/forms/Manage-drug-pg3sc2';
import Managedrugfoursc2 from '@components/forms/Manage-drug-pg4sc2';


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

        '@media(max-Width: 390px)' : {
         
          margin: '25px 0px 0px -268px',
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
  padding: 2,
  margin: '-170px 200px 0px 0px'
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
            
         
          
          <Grid item>
            <PersistentDrawerLeft
            />
          </Grid>
          </Grid>
          <br></br>
          
          <Grid item>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Grid container item xs={12}
              style={{
               // backgroundColor: '#f1f6fd',
                width: "1344px",
                
            }}>
          
          

          

                
          

                

                

                

                


                
                
                {currentPage === 2 && <Managedrugsevensc2 formMethods={methods} />}
                

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
        Edit
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
