import React, { useState } from 'react';
import { Grid, Typography , Button, TextField} from '@material-ui/core';
import { useFormContext } from 'react-hook-form';
import ManagePbar3 from '@components/layout/add-drug/Manage-storage-progress-bar';
import CancelIcon from '@material-ui/icons/Cancel';
import Avatar from "@material-ui/core/Avatar";

import Switch, { switchClasses } from '@mui/joy/Switch';
import Chip from "@mui/material/Chip";
import { InputAdornment } from "@material-ui/core";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import useStyles from './form-components/text-input/text-input.styles';

const Managedrugsevensc2 = ({ formMethods }) => {
  const { watch } = useFormContext();
  
  
  const [hashtag, setHashtag] = useState("")
  
  const [numberOfHashtags, setNumberOfHashtags] = useState(0)

  
  const handleDelete = (h) => () => {
    addHashtag((arrayOfHashtags) =>
      arrayOfHashtags.filter((hashtag) => hashtag !== h)
    );
  };
  const handleHashtagChange = (event) => setHashtag(event.target.value);

  const [arrayOfHashtags, addHashtag] = useState([])
  
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(false);
  
    if (numberOfHashtags < 300) {
      setNumberOfHashtags(numberOfHashtags + 1)
      addHashtag((arrayOfHashtags) => arrayOfHashtags.concat(hashtag))
    } else {
      console.log("Too much hashtags")
    }
  };


  const handleClickOpen = () => {
    setOpen(true);
  };
  const classes = useStyles();
  
  const handleClose = () => {
    setOpen(false);
  };
  
  const [checked, setChecked] = React.useState(false);

  const Hashtags = arrayOfHashtags.map((h) => (
    <Grid
    style={{
      
      backgroundColor: '#fff',
     
  boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
      width: '416px',
      height: '80px',
      borderRadius: '16px',
      marginTop: 20,
    }}>
    <Chip
    style={{
      color: '#216194',
      backgroundColor: '#fff',
     
      width: '416px',
      padding: '0px 100px 0px 0px',
      margin: '30px 0px 0px 2px'
    }}
      size="large"
    avatar={<Avatar
    style={{
      backgroundColor: '#fff',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#216194',
      width: '100px',
      margin: '-30px 320px 0px -120px',
    }}>Canister 1</Avatar>}
      label={h}
      sx={{
        "& .MuiChip-label": {
          color: "#216194",
          width: '516px',
          margin: '25px 280px 10px -440px',
          padding: '0px 0px 0px 27px',
          fontSize: '16px',
        },
        "& .MuiChip": {
          width: '100px',
        },
        '& .MuiChip-deleteIcon': {

          color: '#216194',
        margin: '-81px 178px 0px -800px',
      
          
        },

       
      }}
      deleteIcon={CancelIcon}
      onDelete={handleDelete(h)}
    />
  </Grid>
  ));
 
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
                  
   <Grid
   style={{
    margin: '-15px 0px 0px 336px'
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
          transition: 'width 0s, left 0s',
        },
        '&:hover': {
          '--Switch-trackBackground': theme.vars.palette.background.level3,
        },
        '&:active': {
          '--Switch-thumbWidth': '30px',
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
                    marginLeft: 32,
                   
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
          color: '#216194',
          
          margin: '40px 0px 0px 180px',
          
        }}>Add canister</DialogTitle>
        <DialogContent
        >
                <Typography
      style={{
        
  margin: '20px 30px 100px 50px',
  width: "155px",
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

      }}>Enter Canister ID
      
      </Typography>
      
          <TextField
            autoFocus
            margin="dense"
            
            id="name"
            placeholder='e.g. A12456'
           
            style={{
              backgroundColor: '#216194',
              color: '#fff',
              borderRadius: '10px',
              width: '227px',
              height: '40px',
              alignContent: 'center',
              
        margin: '-130px 0px 0px 250px'
            }}
          InputProps={{
            disableUnderline: true,
            
              startAdornment: <InputAdornment position="start"></InputAdornment>

           
          }}
          
          inputProps={{
            className: classes.textFieldInput2,
          }}
            
       
            value={hashtag}
            onChange={handleHashtagChange}

            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions
        style={{
          
          margin: '0px 115px 10px 0px'
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
          onClick={handleClose}>Back</Button>
          <Button
          style={{
            borderRadius: '16px',
            color: '#fff',
            
            margin: '10px 45px 20px 10px',

            backgroundColor: '#216194',
  textTransform: 'none',
          }}
          variant='contained' onClick={handleClick}>Next</Button>
          <Button
          style={{
            width: '0.1px',
            backgroundColor: '#fff'
          }} onClick={handleClick}></Button>
          
        </DialogActions>
      </Dialog>
<Grid
style={{
    marginLeft: 32,
}}>
      
      {numberOfHashtags > 0 ? Hashtags : ""}

      </Grid>
      </Grid>
    </Grid>
  );
};

export default Managedrugsevensc2;
