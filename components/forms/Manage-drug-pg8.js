import React, { useState, useRef } from 'react';
import { Grid , TextField, Typography, Button, colors} from '@material-ui/core';
import useStyles from './form-components/text-input/text-input.styles';
import CancelIcon from '@material-ui/icons/Cancel';
import Avatar from "@material-ui/core/Avatar";

import ManagePbarSto from '@components/layout/add-drug/Add-drug-storage';
import { InputAdornment } from "@material-ui/core";
import { Box } from "@mui/material";
import Chip from "@mui/material/Chip";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import Switch, { switchClasses } from '@mui/joy/Switch';
import ManagePbar3 from '@components/layout/add-drug/Manage-storage-progress-bar';

import { makeStyles } from '@material-ui/core/styles';


const useStyles1 = makeStyles((theme) => ({
  root: {
    '& input::placeholder': {
      color: 'grey',
      backgroundColor: '#F3F8FE',
      padding: '12px 12px 12px 0px',
      borderRadius: '16px',
      fontFamily: 'Roboto',
      fontSize: '16px',
    
  width: '65px',
  height: '15px',
      color: '#BAB9B9',
      opacity: '1',
    },
    '& input': {
      backgroundColor: '#216194',
      
  width: '65px',
  height: '15px',  
  textAlign: 'center',
color: '#fff',
  fontSize: '16px',
  margin: '27px 0px 0px -107px',  
      borderRadius: '16px',
    },
  },
}));


const Managedrugeight = ({formMethods}) => {
    const classes = useStyles();

    const classes1 = useStyles1();

    
    const inputRef = useRef(null);


    const [hashtag, setHashtag] = useState("")
    
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const [numberOfHashtags, setNumberOfHashtags] = useState(0)
  

  
  const [updated, setUpdated] = useState('');
  const [arrayOfHashtags, addHashtag] = useState([])
  

  const handleClick = () => {
    setOpen(false);
  
    if (numberOfHashtags < 300) {
      setNumberOfHashtags(numberOfHashtags + 1)
      addHashtag((arrayOfHashtags) => arrayOfHashtags.concat(hashtag))
    } else {
      console.log("Too much hashtags")
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
    

  const [checked, setChecked] = React.useState(false);

    //async call later
    const drugList = ['Panadol', 'Welbutrin', 'Lorazepam'];
    const sourceList = ['Caritas Medical Centre', 'David Trench Rehab Centre', "St Mary's Hospital"];

    const handleDelete = (h) => () => {
      addHashtag((arrayOfHashtags) =>
        arrayOfHashtags.filter((hashtag) => hashtag !== h)
      );
    };
    const handleHashtagChange = (event) => setHashtag(event.target.value);
  
    const Hashtags = arrayOfHashtags.map((h) => (
      <Grid
      style={{
        
        backgroundColor: '#fff',
       
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
        <Grid container item direction='row'  style={{
            backgroundColor: '#f1f6fd',
            width: '1500px'
            
        }}
        >
          
      <Grid style={{ margin: '30px 0px 0px 0px' }}>
        <ManagePbar3 />
      </Grid>
            <Grid container item direction='column'>
              
          <br></br><br></br><br></br>
          
                <Grid container item direction='row' spacing={5}>
                    <Grid item 
                    style={{
                        width: '416px',
                        height: '80px',
                        backgroundColor: '#fff',
                        borderRadius: '16px',
                        marginLeft: 22,

                    }}
                    >
                      <Typography
                      style={{
                        color: '#216194',
                        fontWeight: 'bold',
                    
                      }}>Dispensable</Typography>  
            
   <Grid
   style={{
    margin: '-15px 0px 0px 320px'
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
            <Grid
            style={{
              margin: '30px 0px 0px -20px'
            }}>
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
                margin: '50px 0px 0px 0px'
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
                color: "#216194",
                margin: '-10px 0px 0px 0px'
            }}> Outside Kindo</Typography>

</Grid>
                    </Grid>
                    
                    <Grid container item direction='row'spacing={5}>
                        <Grid item spacing={2}
                        
                         xs={12} sm={10} md={3}
                         style={{
                          marginTop: 60,
                         }}
                        >

                            
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
      <br></br>
      
      <Grid
      spacing={5}>
      {numberOfHashtags > 0 ? Hashtags : ""}
      </Grid>
                        
<Grid>
                 
            </Grid> 
                        </Grid>
                        <Grid item
                        xs={12} sm={10} md={5}
                        >
                            
                            
                        </Grid>

                    </Grid>

                </Grid>
                <br></br><br></br><br></br> <br></br><br></br>
                <Grid container item direction='row' spacing={5} >
                    <Grid item 
                    xs={12} sm={12} md={6}
                    >
                   
                        
                    </Grid>
                    <Grid item
                     xs={12} sm={10} md={3}
                     >
                        
                    
                        
                    </Grid>
                    <Grid item>
                        
                                            </Grid>
                    
                </Grid>

            </Grid>
            
            <Grid container item direction='column'>
            <br></br><br></br>
                
                <Grid item container direction='row'>
                    
                    <Grid container item direction='coloumn'
                     xs={12} sm={10} md={6}
                    >               
                        
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )


}

export default Managedrugeight;