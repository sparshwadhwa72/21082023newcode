import React, { useState } from 'react';

import { Grid , Button ,Typography} from '@material-ui/core';
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


const useStyles = makeStyles({
    
    })

const AddDrugeight = ({formMethods}) => {
    const classes = useStyles();



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
    


    //async call later
    const drugList = ['Panadol', 'Welbutrin', 'Lorazepam'];
    const sourceList = ['Caritas Medical Centre', 'David Trench Rehab Centre', "St Mary's Hospital"];


    const [checked, setChecked] = React.useState(false);
    const drugFormList = ['Capsule', 'Liquid', 'Tablet', 'N/A'];
    const drugUnits = ['mg', 'mcg', 'g', 'iu', 'N/A'];
    const drugTypeList = ['Prescribed drug', 'Supplement', 'Over the counter', 'Herbal', 'N/A'];

    return (
        <Grid container item direction='row'  style={{
            backgroundColor: '#f1f6fd',
            height: '400px'
            
        }}
        >
            <Grid container item direction='column'
            style={{
              margin: '0px 0px 0px 40px'
            }}>
              
          <br></br><br></br><br></br>
          
                <Grid container item direction='row' spacing={10}>
                    <Grid item 
                    
                    >
            
                    </Grid>
                    <Grid item direction='row'
               
                    >

                   
                    
               
                    </Grid>
                    <Grid
                    style={{
                        margin: '100px 0px 0px 300px'
                    }}>

                        <Typography
                        style={{
                            width: '558px',
                            height: '56px',
                            fontSize: '24px',
                            fontFamily: 'Roboto',
                            fontWeight: 'bold',
                            textAlign: 'left',
                            color: '#216194'

                        }}>(Drug name) is successfully added</Typography>

                        
                        <Typography
                        style={{
                            
                            width: '558px',
                            height: '56px',
                            fontSize: '16px',
                            fontFamily: 'Roboto',
                            margin: '0px 0px 0px -50px',
                          
                            textAlign: 'left',
                            color: '#bab9b9'
                        }}>Please ensure that the drug is loaded correctly into the canister(s),<br></br> then insert
                        the loaded canister(s) into kindo</Typography>
                    </Grid>

                </Grid>
                
                

            </Grid>

            <Button style={{
                    height: '50px',
                    width: '156px',
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
          margin: '90px 0px 0px 108px',
         fontSize: "18px", fontWeight: "bold"

        }}>Canister is in use</DialogTitle>
        <DialogContent
        >
      <Typography
      style={{
        fontFamily: "Roboto",
  margin: '10px 0px 0px 0px',
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
height: '30px',
  lineHeight: "normal",
  letterSpacing: "normal",
  textAlign: "center",
  color: "#bab9b9",
 fontSize: "18px"
      }}>
        We detected in our system that the <br></br> canister (ID 14763) is in 
      use. Please <br></br> check that the ID inputed matches the <br></br> ID of the canister. Click here<br></br>
      for more help.
      
      
      </Typography>
        </DialogContent>
        <DialogActions
        style={{
            margin: '0px 0px 0px 0px'
        }}>
          <Button 
          style={{
            color: '#fff',
            borderRadius: '16px',
          margin: '50px 40px 20px 0px',
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
    )


}

export default AddDrugeight;