import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useFormContext } from 'react-hook-form';
import ManagePbar3 from '@components/layout/add-drug/Manage-storage-progress-bar';

const Managedrugsix = ({ formMethods }) => {
  const { watch } = useFormContext();

  return (
    <Grid container item direction="column"
    style={{
        backgroundColor: '#f3f8fe',
  
      }}>
           <Grid>
            
            <ManagePbar3/>
            </Grid>
      <Grid item container direction="column">
        <Grid item
        >
            

            <Typography
            style={{
                width: "362px",
                height: "56px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "28px",
             
                color: "#216194"
            }}> Current storage location</Typography>

            
            <Typography
              style={{
                width: "124px",
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "18px",
            
                lineHeight: "21px",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                color: "#216194"
            }}> Outside Kindo</Typography>
        </Grid>
        
      </Grid>
    </Grid>
  );
};

export default Managedrugsix;
