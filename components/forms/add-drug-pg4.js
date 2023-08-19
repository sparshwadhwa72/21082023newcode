import React, { useState } from 'react';
import { Grid , IconButton, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import useStyles from './form-components/textarea-input/text-input.styles';
import Switch, { switchClasses } from '@mui/joy/Switch';
import ManagePbarSto from '@components/layout/add-drug/Add-drug-storage';


const AddDrugfour = ({formMethods}) => {
  const [checked, setChecked] = React.useState(false);
  
  const [checkedd, setCheckedd] = React.useState(false);

  const [secondaryChecked, setSecondaryChecked] = useState(false);
  
  const classes = useStyles();

  return (
    <Grid container item direction='row'
    style={{
      height: '200px'
    }}>
      <Grid style={{ margin: '30px 0px 0px 0px' }}>
        <ManagePbarSto />
      </Grid>
      <Grid container item direction='column' style={{ margin: '30px 0px 0px 20px' }}>
        <br></br><br></br><br></br>
        <Grid container item direction='row' spacing={10}>
          <Grid item className={classes.Grid}>
            <Typography className={classes.Storedrugtext}>Store drug in kindo</Typography>
            <Grid style={{ margin: '-7px 0px 0px 300px' }}>
              <Switch
                checked={checked}
                className={classes.Switch}
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
            <Grid item direction='row'>

<IconButton 
className={classes.IconButton}>
            <ClearIcon
            className={classes.Icon}
            />
          </IconButton>
<Typography
className={classes.Text2}>
 Kindo is NOT suitable for storing powders, liquid or injectables
</Typography>     
              
                    </Grid>

            
            {checked && (
  <Grid item className={classes.Grid2}>

    <Typography className={classes.Storedrugtext2}>
      Dispensable
    </Typography>
    <Grid
      style={{
        margin: '-15px 0px 0px 340px',
      }}
    >
      <Switch
        checked={checkedd}
        onChange={(event) => setCheckedd(event.target.checked)}
        
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
              margin: '30px 0px 0px -307px'
            }}
            >Dispensable: whole pill (Tablet or Capsule) ONLY </Typography> 
            
            <Typography
          className={classes.NewText}>NOT dispensable: packaged pill , half pill, soft gummy </Typography> 
    </Grid>
  </Grid>
)}


</Grid>

</Grid>

</Grid>


</Grid>

  )

}

export default AddDrugfour;