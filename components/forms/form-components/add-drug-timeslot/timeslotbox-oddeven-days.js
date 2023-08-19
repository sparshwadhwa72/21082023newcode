import React, {useState} from 'react';
import { Grid, Button, Input } from '@material-ui/core';
import Chip from '@mui/material/Chip';

import Avatar from "@material-ui/core/Avatar";



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

    return (
        <Grid container>
            <Grid item container direction='column'
            style={{
              
                '@media(max-Width: 390px)' : {
                  width: '94%'
                },
            }}>
              
                
                <Grid item
                style={{
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
                }}
                >
                    <div
                    >{time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                </Grid>
                <Grid item>
                    <div
                    style={{
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
                        textAlign: 'left',
                        color: '#bab9b9',
                    }}>{numDrugs} drugs added</div>
                </Grid>
                <Grid item>
                {quantity === 0 ? <Button  style={{
                    
                     width: '40px',
                     height: '40px',
                     padding: '16px 20px',
                     borderRadius: '16px',
                     backgroundColor: '#f3f8fe'
                    
                }}onClick={handleclick}>+</Button>
                 : <Input onBlur={handleBlur} 
                 style={{
                    
                    backgroundColor: '#f3f8fe',
                    width: '40px',
                    height: '40px',
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