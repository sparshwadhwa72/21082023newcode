import React, { useState } from 'react';

import { Grid , IconButton, Typography} from '@material-ui/core';
import AutocompleteDropdown from './form-components/autocomplete-dropdown/autocomplete-dropdown';
import DropdownInput from './form-components/dropdown/dropdown';
import DropdownInput1 from './form-components/dropdown/dropdown1';
import TextareaInput from './form-components/textarea-input/textarea-input';
import TextDropdown from './form-components/text-with-dropdown/text-with-dropdown';
import TextInput from './form-components/text-input/text-input';
import { makeStyles } from '@material-ui/core';
import DateInput from './form-components/date-picker/datepicker3';
import { fontWeight } from '@mui/system';

import ClearIcon from '@material-ui/icons/Clear';

import Switch, { switchClasses } from '@mui/joy/Switch';
import ManagePbarSto from '@components/layout/add-drug/Add-drug-storage';


const useStyles = makeStyles({
    
    })

const AddDrugfour = ({formMethods}) => {
    const classes = useStyles();
    


    //async call later
    const drugList = ['Panadol', 'Welbutrin', 'Lorazepam'];
    const sourceList = ['Caritas Medical Centre', 'David Trench Rehab Centre', "St Mary's Hospital"];


    const [checked, setChecked] = React.useState(false);
    
    const [checked1, setChecked1] = React.useState(false);
    const drugFormList = ['Capsule', 'Liquid', 'Tablet', 'N/A'];
    const drugUnits = ['mg', 'mcg', 'g', 'iu', 'N/A'];
    const drugTypeList = ['Prescribed drug', 'Supplement', 'Over the counter', 'Herbal', 'N/A'];

    return (
        <Grid container item direction='row'  
        >
           <Grid
            
            style={{
              margin: '30px 0px 0px 0px'
            }}>
            
            <ManagePbarSto/>
            </Grid>
            <Grid container item direction='column'
            style={{
              margin: '0px 0px 0px 40px'
            }}>
              
          <br></br><br></br><br></br>
          
                <Grid container item direction='row' spacing={10}>
                    <Grid item 
                    style={{
                        width: '416px',
                        height: '80px',
                        
        boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
                        backgroundColor: '#fff',
                        borderRadius: '16px',

                    }}
                    >
                      <Typography
                      style={{
                        color: '#216194',
                        fontWeight: 'bold',
                        margin: '-30px 0px 0px -25px '
                    
                      }}>Store the drug in kindo</Typography>  
            
   <Grid
   style={{
    margin: '-5px 0px 0px 300px'
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
                    <Grid item direction='row'
               
                    >


<IconButton 
            style={{ margin: '40px -90px 0px -467px' }}
          >
            <ClearIcon
            style={{
              color: '#E58A83',
            }} />
          </IconButton>
<Typography
style={{
  width: '476px',
  height: '16px',
  fontFamily: 'Roboto',
  fontSize: '14px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  margin: '-33px 0px 0px -430px',
  color: '#bab9b9',
}}>
  
 Kindo is NOT suitable for storing powders, liquid or injectables
</Typography>
                   
                    
                </Grid>
                    <Grid container item direction='column'spacing={5}
                    >
                        <Grid item spacing={5}
                         style={{
                            width: '416px',
                            
        boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
                            height: '80px',
                            backgroundColor: '#fff',
                            borderRadius: '16px',
                            margin: '-25px 0px 0px -19px'
    
                        }}
                        >
                              <Typography
                      style={{
                        color: '#216194',
                        fontWeight: 'bold',
                        
                        margin: '-8px 0px 0px 0px'
                    
                      }}>Dispensable</Typography>  

<Grid
   style={{
    margin: '-5px 0px 0px 320px'
   }}>
              
              <Switch
      checked={checked1}
      onChange={(event) => setChecked1(event.target.checked)}
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
                        <Grid item
                        >
                            
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
              margin: '-10px 0px 0px -7px'
            }}
            >Dispensable: whole pill (Tablet or Capsule) ONLY </Typography> 
            
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
              margin: '10px 0px 0px -8px'
            }}>NOT dispensable: packaged pill , half pill, soft gummy </Typography> 
                            
                        </Grid>

                    </Grid>

                </Grid>
                

            </Grid>
            
        </Grid>
    )


}

export default AddDrugfour;