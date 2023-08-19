import React, { useState } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { useFormContext } from 'react-hook-form';
import ManagePbar3 from '@components/layout/add-drug/Manage-storage-progress-bar';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Switch, { switchClasses } from '@mui/joy/Switch';


const Managedrugseven = ({ formMethods }) => {
  const { watch } = useFormContext();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(false);
  
  };

  const [checked, setChecked] = React.useState(false);

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
        
                            
        <Button style={{
                    height: '80px',
                    width: '416px',
                    fontSize: '18px',
                    borderRadius: '16px',
                    margin: '37px 0px 0px 2px',
                    fontWeight: 'normal',
                    boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.1)',
                    padding: '20px 76px 16px 50px',
                    backgroundColor: '#fff',
                    textalign: 'center',
                    textTransform: 'none',
                    color: '#bab9b9',
                   
                    '@media(max-Width: 390px)' : {
                      width: '26%'
                    }

                }} 
                onClick={handleClickOpen}> +Add Canister </Button>
                <Dialog open={open} onClose={handleClose}

PaperProps={{
  style: {

    width: '640px',
    boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)" ,

    height: '618px',
  borderRadius: '16px',
  },
}}
>
        <DialogTitle
        style={{
          margin: '40px 0px 0px 180px',
          width: "237px",
          fontFamily: "'Roboto'",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "28px",
          textAlign: "center",
          color: "#216194",
          flex: "none",
          order: 0,
          flexGrow: 0,

        }}>Add Canister</DialogTitle>
        <DialogContent
        >
      <Typography
      style={{
  margin: '20px 30px 100px 70px',
  width: "95px",
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

      }}>Dispensible
      
      </Typography>
                <Grid
                style={{
                    margin: '-130px 100px 100px 410px',
                }}>
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.target.checked)}
      sx={(theme) => ({
        '--Switch-thumbShadow': '0 3px 7px 0 rgba(0 0 0 / 0.12)',
        '--Switch-thumbSize': '20px',
        '--Switch-trackWidth': '52px',
        '--Switch-trackHeight': '30px',
        '--Switch-trackBackground': theme.vars.palette.background.level3,
        [`& .${switchClasses.thumb}`]: {
          transition: 'width 0.2s, left 0.2s',
        },
        '&:hover': {
          '--Switch-trackBackground': theme.vars.palette.background.level3,
        },
        '&:active': {
          '--Switch-thumbWidth': '32px',
        },
        [`&.${switchClasses.checked}`]: {
          '--Switch-trackBackground': '#216194',
          '&:hover': {
            '--Switch-trackBackground': '#216194',
          },
        },
      })}
    />
    </Grid>

    
    <Typography
            style={{
              width: '316px',
              height: '16px',
              fontFamily: 'Roboto',
              fontSize: '14px',
              fontWeight: 'normal',
              fontStretch: 'normal',
              fontStyle: 'normal',
              color: '#bab9b9',
              margin: '-60px 0px 0px 105px'
            }}
            >Dispensible: whole pill (Tablet or Capsule) ONLY </Typography> 
            
            <Typography
            style={{
              width: '356px',
              height: '16px',
              fontFamily: 'Roboto',
              fontSize: '14px',
              fontWeight: 'normal',
              fontStretch: 'normal',
              fontStyle: 'normal',
              color: '#bab9b9',
              margin: '10px 0px 0px 105px'
            }}>NOT dispensible: packaged pill , half pill, soft gummy </Typography> 
  
        </DialogContent>
        <DialogActions
        style={{
            margin: '0px 85px 10px 0px'
        }}>
        <Button 
        style={{
          color: '#216194',
          borderColor: '#216194',
          borderRadius: '16px',
          borderWidth: '2px',
          margin: '0px 0px 7px 0px',
          backgroundColor: '#f1f6fd',
          textTransform: 'none',
        
        }}
        variant="outlined" 
        onClick={handleClose}>Cancel</Button>
        <Button
        style={{
          borderRadius: '16px',
          color: '#fff',
          
          margin: '10px 45px 20px 10px',
          textTransform: 'none',
backgroundColor: "#216194",
fontSize: '14px',

fontFamily: "'Roboto'",
fontStyle: "normal",
fontWeight: 400,
        }}
        variant='contained' onClick={handleClick}>Next</Button>
          
          <Button
          style={{
            borderRadius: '16px',
            color: '#fff',
            width: '80px',
            
  backgroundColor: "#fff",
          }}onClick={handleClick}></Button>
          
          
          
        </DialogActions>
      </Dialog>

      </Grid>
    </Grid>
  );
};

export default Managedrugseven;
