import React, { useState, useRef } from 'react';
import { Grid , TextField, Typography, Button, colors} from '@material-ui/core';
import useStyles from './form-components/text-input/text-input.styles';

import Avatar from "@material-ui/core/Avatar";

import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import ManagePbarSto from '@components/layout/add-drug/Add-drug-storage';
import { InputAdornment } from "@material-ui/core";
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

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import Switch, { switchClasses } from '@mui/joy/Switch';




const Adddrugsix = ({formMethods}) => {
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
  
    const Hashtags = arrayOfHashtags.map((h) => (
      <Grid
      style={{
        
        backgroundColor: '#fff',
       
        width: '416px',
        height: '80px',
        
        boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.1)',
        borderRadius: '16px',
        marginTop: 70,
      }}>
      <Chip
   className={classes.Chip}
        size="large"
      avatar={<Avatar
      style={{
        backgroundColor: '#fff',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#216194',
        width: '100px',
        margin: '-40px 320px 0px -120px',
      }}>Canister 1</Avatar>}
        label={h}
        sx={{
          "& .MuiChip-label": {
            color: "#216194",
            width: '516px',
            margin: '25px 280px 10px -439px',
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
        deleteIcon={CancelOutlinedIcon}
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
        <ManagePbarSto />
      </Grid>
            <Grid container item direction='column'>
              
          <br></br><br></br><br></br>
          
                <Grid container item direction='row' spacing={5}>
                    <Grid item 
                   className={classes.Grid} >
                      <Typography
                      className={classes.LoadText}
                      >Load drug into the  canister(s) now</Typography>  
            
   <Grid
   style={{
    margin: '-15px 0px 0px 320px'
   }}>
      
            
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.target.checked)}
      className={classes.Switch}
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
                        <Grid item spacing={0}
                        
                         xs={12} sm={10} md={3}
                        >

                            
                <Button className={classes.AddcanisterButton}
                onClick={handleClickOpen}> +Add canister </Button>

<Dialog open={open} onClose={handleClose}

PaperProps={{
  style: {

    width: '416px',
    height: '231px',
  borderRadius: '16px',
  },
}}
>
        <DialogTitle
        style={{
          color: '#216194',
          margin: '14px 0px 0px 0px',
          
          textAlign: 'center'
          
        }}>Enter Canister ID</DialogTitle>
        <DialogContent
        >
      
          <TextField
            autoFocus
            margin="dense"
            
            id="name"
            placeholder='e.g. A12456'
           className={classes.Addcanister
          }
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
            justifyContent: 'center',
            margin: '0px 0px 22px 0px'
            
        }}>
          <Button 
          style={{
            color: '#216194',
            borderColor: '#216194',
            borderRadius: '16px',
            borderWidth: '2px',
            backgroundColor: '#f1f6fd',
            textTransform: 'none',
            width: '80px',
            height: '42px',
          
          }}
          variant="outlined" 
          onClick={handleClose}>Cancel</Button>
          <Button
          style={{
            borderRadius: '16px',
            color: '#fff',
            
  backgroundColor: "#bab9b9",
  width: '80px',
            height: '42px',
            textTransform: 'none',
            
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
          }}
          variant='contained' onClick={handleClick}>OK</Button>
       
          
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

export default Adddrugsix;