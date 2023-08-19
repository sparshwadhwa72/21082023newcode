import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import { Grid , Typography} from '@material-ui/core';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import '@fontsource/roboto';
import { makeStyles } from '@material-ui/core';
import { lineHeight } from '@mui/system';

const useStyles = makeStyles({

  Username: {
  
    width: "76px",
  height: "33px",
  fontfamily: "Roboto",
  fontsize: "18px",
  fontWeight: 'bold',
  padding: '6px 7px 6px 10px',
  fontstretch: "normal",
  fontstyle: "normal",
  
  margin: '-28px 0px 0px 90px',
  backgroundColor: '#f1f6fd',
  letterspacing: "normal",
  textalign: "center",
  color: "#216194",

  '@media(max-Width: 390px)' : {
      
    margin: '7px 0px 0px -4px',
     
    },
  
  },

  Next: {
      
            margin: '-24px 0px 0px 1250px',
          
            width: '38px',
            height: '21px',
           
            fontfamily: 'Roboto',
            fontsize: '18px',
            fontWeight: 'bold',
            fontstretch: 'normal',
            fontstyle: 'normal',
           lineHeight: 'normal',
           letterspacing: 'normal',
            textalign: 'right',
            color: '#bab9b9',


      backgroundColor: '#fff',

          '@media(max-Width: 390px)' : {
      
            margin: '-60px 0px 0px 320px',
             
            },
  },

  Quit: {
     margin: '25px 0px 0 -20px',
    
     width: '34px',
     height: '21px',
     fontfamily: 'Roboto',
     fontsize: '18px',
     fontWeight: 'bold',
     fontstretch: 'normal',
     fontstyle: 'normal',
     lineHeight: 'normal',
     letterSpacing: 'normal',
     textAlign: 'right',
     color: '#bab9b9',

     backgroundColor: '#fff',

    '@media(max-Width: 390px)' : {
      
      margin: '10px 0px 0px 15px',
       
      },

  },
  
});


export default function AddDrugNavBar() {
  const classes = useStyles();
  return (
    <Box sx={{ 
      backgroundColor: '#fff',
     }}>
      <AppBar position="static" fullwidth elevation={0} 
       style={{ background: '#fff' ,
       
       width: '222px',
       height: '22px'}}>
       
          <Typography align='left'  className={classes.Quit}
         >
             Quit
          </Typography>
          <Grid item >
          <Typography className={classes.Username}
          > 
           Tommy
          </Typography>
          </Grid>
          <Typography   className={classes.Next} 
          >Next</Typography>
       
      </AppBar>
    </Box>
  );
}