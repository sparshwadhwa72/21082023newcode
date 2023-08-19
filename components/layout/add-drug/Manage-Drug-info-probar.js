import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  auxText: {
    
  flexgrow: '0',
  fontfamily: 'Roboto',
  fontSize: '22px',
 
  fontweight: 'bold',
  fontstretch: 'normal',
  fontstyle: 'normal',
  letterspacing: 'normal',
  textalign: 'center',
  color: '#bab9b9',

    
  },
  currentText: {
    color: '#216194',
    fontFamily: 'Roboto',
    fontSize: '22px',
    

    margin: '25px 0px 0px -300px',
        fontWeight: 'bold',

        '@media(max-Width: 768px)' : {
         
          margin: '25px 0px 0px -268px',
        },

  },
  currentProgbar: {
    width: '476px',
    height: '8px',
    backgroundColor: '#216194',
    '@media(max-Width: 390px)' : {
      width: '37%'
    },
  },
  auxProgbar: {
    width: '476px',
    height: '8px',
    backgroundColor: '#bab9b9',
    '@media(max-Width: 390px)' : {
      width: '37%',
      margin: '0px 0px 0px -295px',
    },
  },
  stepContainer: {
    width: '400px',
  },
  progbarRight: {
    '@media(max-Width: 390px)' : {
      width: '37%',
      margin: '0px 0px 0px -622px',
    },
  },
  
});

const ManagePbar1 = ({ page }) => {
  const classes = useStyles();

  return (
    <Grid container direction="row">
      <Grid item container direction="column" className={classes.stepContainer}>
        
        <Grid item style={{
    margin: '0px 0px 0px -81px',}} >
          <div
            className={
              page === 1
                ? `${classes.currentProgbar} ${classes.progbarLeft}`
                : `${classes.currentProgbar} ${classes.progbarLeft}` 
                
            }
          ></div>
        </Grid>
      </Grid>
      <Grid item>
          <Typography style={{
    
    }} className={page === 1 ? classes.currentText : classes.currentText}>
            Drug Info
          </Typography>
        </Grid>
      <Grid item container direction="column" className={classes.stepContainer}>
        
        <Grid item style={{
    margin: '0px 0px 0px 1px',}}  >
          <div className={page === 1 ? classes.auxProgbar : classes.auxProgbar}></div>
        </Grid>
      </Grid>
      <Grid item>
          <Typography style={{
    margin: '29px 0px 0px -200px',
   
      fontsize: '90px'
    
    }}className={page === 2 ? classes.auxText : classes.auxText}>
            Schedule
          </Typography>

        
        </Grid>
      <Grid item container direction="column" className={classes.stepContainer}>
        
        <Grid item style={{
    margin: '0px 0px 0px 83px',
    
    }}>
          <div 
            className={
              page === 3
                ? `${classes.auxProgbar} ${classes.progbarRight}`
                : `${classes.auxProgbar} ${classes.progbarRight}`
            }
          ></div>
        </Grid>
        <Grid item>
          <Typography style={{
    margin: '22px 0px 0px 290px',
    }} className={page === 3 ? classes.auxText : classes.auxText}>
            Storage
          </Typography>
     
        </Grid>
      </Grid>
      
    </Grid>
  );
};

export default ManagePbar1;
