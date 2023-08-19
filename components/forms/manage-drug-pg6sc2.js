import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useFormContext } from 'react-hook-form';
import ManagePbar3 from '@components/layout/add-drug/Manage-storage-progress-bar';

const Managedrugsixsc2 = ({ formMethods }) => {
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
        style={{
            backgroundColor: '#fff',
            width: '416px',
            height: '80px',
            borderRadius: '16px',
            
  boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
  margin: '50px 0px 0px 32px',
        }}
        >

            <Typography
            style={{
                width: "95px",
                height: "21px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: 700,
                margin: '16px 0px 0px 20px',
                fontSize: "18px",
                lineHeight: "21px",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                color: "#216194",
                flex: "none",
                order: 0,
                flexGrow: 0
            }}>
                Dispensible
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
            }}>No</Typography>
            

            <Typography
            style={{
                width: "362px",
                height: "56px",
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "28px",
             
                color: "#216194",
                margin: '50px 0px 0px 0px',
            }}> Current storage location</Typography>

            
            <Typography
              style={{
                width: "201px",
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
  flexGrow: 0
            }}> Inside Kindo</Typography>
            

            
        </Grid>
        <Grid item
        style={{
            backgroundColor: '#fff',
            width: '416px',
            height: '80px',
            borderRadius: '16px',
            
  boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
  margin: '150px 0px 0px 32px',
        }}
        >
<Typography
style={{
    width: "183px",
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
    
    margin: '16px 0px 0px 20px',
}}>
    Canister 1
</Typography>

<Typography
            style={{
                width: "56px",
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
            }}>A17455</Typography>

            
        </Grid>
        
        <Grid item
        style={{
            backgroundColor: '#fff',
            width: '416px',
            height: '80px',
            borderRadius: '16px',
            
  boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
  margin: '24px 0px 0px 32px',
        }}
        >
<Typography
style={{
    width: "183px",
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
    
    margin: '16px 0px 0px 20px',
}}>
    Canister 2
</Typography>

<Typography
            style={{
                width: "56px",
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
            }}>A16475</Typography>

            
        </Grid>

        
      </Grid>
    </Grid>
  );
};

export default Managedrugsixsc2;
