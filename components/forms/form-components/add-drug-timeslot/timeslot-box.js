import React, {useState} from 'react';
import { Grid, Button, Input } from '@material-ui/core';
import Chip from '@mui/material/Chip';


import Box from '@mui/material/Box';

import Avatar from "@material-ui/core/Avatar";

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

    numDrugs: {
        width: '105px',
                        height: '19px',
                        flexGrow: '0',
                        fontFamily: 'Roboto',
                        fontSize: '16px',
                        
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        fontStyle: 'normal',
                        lineHeight: 'normal',
                        lineHeight: 'normal',
                        display: "flex",
                        
                       
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        color: '#bab9b9',

    },

    Time: {
        
        width: '79px',
        height: '21px',
        flexGrow: 0,
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textAlign: 'center',
        color: '#216194',
    },
    
Button: {
    width: '40px',
    height: '40px',
    
    color: '#216194',
    fontSize: '76px',
    fontWeight: 10,
    borderRadius: '16px',
    
    backgroundColor: '#f3f8fe',
    
    
  
},

Buttongrid: {
  },



  });
  
  

const TimeslotBox = ({time, numDrugs, onQuantityChange}) => {

  
    const [quantity, setQuantity] = useState(0);
   
    const handleclick = () => {
   
        setQuantity(1);
   
      
    }

    

    const handleChange = (e) => {
        setQuantity(parseInt(e.target.value));
        onQuantityChange(time, parseInt(e.target.value));
       
        
    }

    const handleBlur = (e) => {
        if (parseInt(e.target.value) === 0) {
            setQuantity(0)
        }
    }

    const classes = useStyles();

    return (
        <Grid container item
    >
            
            <Grid item container direction='row'
            >
              
                <Grid
                item container direction='column'
            >
                <Grid item
                
                >
                    <div
                    className={classes.Time}
                    >{time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                </Grid>
                <Grid item 
                container
                
                
                className={classes.numDrugs}>
                    <div
                    >{numDrugs} drugs added</div>
                </Grid>
                </Grid>
                <Grid item
                className={classes.Buttongrid}>
                {quantity === 0 ? <Button
                className={classes.Button} 
                onClick={handleclick}>+</Button>
                 : <Input onBlur={handleBlur} 
                 style={{
                    
                    backgroundColor: '#f3f8fe',
                    width: '40px',
                    height: '40px',
                    margin: '-70px 0px 20px 320px',
                    color: '#216194',
                    
                   
                 }} 
                 placeholder={'abcd'}
                 disableUnderline
                  onChange={handleChange}
                   type='text' 
                   value={quantity}/>}
            </Grid>
            </Grid>




        </Grid>
        


    )
}

export default TimeslotBox;