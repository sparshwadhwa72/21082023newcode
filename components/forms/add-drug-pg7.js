import React, { useState, useRef } from 'react';
import { Grid , TextField, Typography, Button, colors} from '@material-ui/core';
import useStyles from './form-components/text-input/text-input.styles';

import Avatar from "@material-ui/core/Avatar";

import { Box } from "@mui/material";
import Chip from "@mui/material/Chip";
import AutocompleteDropdown from './form-components/autocomplete-dropdown/autocomplete-dropdown';
import DropdownInput from './form-components/dropdown/dropdown';
import DropdownInput1 from './form-components/dropdown/dropdown1';
import TextareaInput from './form-components/textarea-input/textarea-input';
import TextDropdown from './form-components/text-with-dropdown/text-with-dropdown';
import TextInput from './form-components/text-input/text-input';
import { makeStyles } from '@material-ui/core';
import DateInput from './form-components/date-picker/datepicker3';
import { fontWeight } from '@mui/system';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import Switch, { switchClasses } from '@mui/joy/Switch';




const Adddrugseven = ({formMethods}) => {
    const classes = useStyles();

    
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
  
    const drugFormList = ['Capsule', 'Liquid', 'Tablet', 'N/A'];
    const drugUnits = ['mg', 'mcg', 'g', 'iu', 'N/A'];
    const drugTypeList = ['Prescribed drug', 'Supplement', 'Over the counter', 'Herbal', 'N/A'];

    const Hashtags = arrayOfHashtags.map((h) => (
      <Chip
      style={{
        color: '#216194',
        backgroundColor: '#fff',
       
        width: '416px',
        height: '80px',
        padding: '0px 100px 0px 0px',
        margin: '30px 0px 0px 2px'
      }}
      sx={{
        "& .MuiChip-label": {
          color: "red",
          width: '516px',
          margin: '22px 0px 0px -103px',
        },
        "& .MuiChip": {
          width: '200px',
        },
        '& .MuiChip-deleteIcon': {
          color: 'red',
          
        },
      }}
     
      avatar={<Avatar
      style={{
        backgroundColor: '#fff',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#216194',
        width: '100px',
        margin: '-30px 0px 0px -0px',
      }}>Canister 1</Avatar>}
        label={h}
        onDelete={handleDelete(h)}
      />
    ));
    return (
        <Grid container item direction='row'  style={{
            backgroundColor: '#f1f6fd',
            width: '1500px'
            
        }}
        >
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
                    
                      }}>Load drug into the <br></br> canister(s) now</Typography>  
            
   <Grid
   style={{
    margin: '-40px 0px 0px 320px'
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
                    </Grid>
                    
                    <Grid container item direction='row'spacing={5}>
                        <Grid item spacing={2}
                        
                         xs={12} sm={10} md={3}
                        >

                            
            
      <br></br>
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
                onClick={handleClickOpen}> Popup 2 </Button>

<Dialog open={open} onClose={handleClose}

PaperProps={{
  style: {

    width: '416px',
    height: '399px',
  borderRadius: '16px',
  },
}}
>
        <DialogTitle
        style={{
          color: '#216194',
          margin: '90px 0px 0px 0px',
         fontSize: "18px", fontWeight: "bold",
       
         textAlign: 'center',
         justifyContent: 'center',

        }}>Kindo is full</DialogTitle>
        <DialogContent
        >
      <Typography
      style={{
        fontFamily: "Roboto",
  margin: '20px 0px 0px 0px',
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",

  lineHeight: "normal",
  letterSpacing: "normal",
  textAlign: "center",
  color: "#bab9b9",
 fontSize: "18px"
      }}>The Kindo is currently full. To store the <br></br> drug in the kindo,
     Please replace a <br></br> used canister
      
      
      </Typography>
        </DialogContent>
        <DialogActions
        style={{
          justifyContent: 'center',
          margin: '-10px 0px 32px 0px'
        }}>
          <Button 
          style={{
            color: '#fff',
            borderRadius: '16px',
            justifyContent: 'center',
            backgroundColor: '#216194',
            textTransform: 'none',
            width: '139px',
            height: '41px',
            fontFamily: "Roboto",
  fontSize: "16px",

  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  textAlign: "center"

          
          }}
          variant="outlined" 
          onClick={handleClose}>Understand</Button>
          
          
          
          
        </DialogActions>
      </Dialog>
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

export default Adddrugseven;