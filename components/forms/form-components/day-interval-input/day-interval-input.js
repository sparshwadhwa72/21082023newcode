import React from 'react';
import { Grid, Typography, Input } from '@material-ui/core';
import { Controller } from 'react-hook-form';

import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
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


const DayIntervalInput = ({name, control, rules, placeholder, ...props}) => {
    const classes = useStyles();

    return (
        <Grid container item direction='column'
        style={{
            width: '416px',
            height: '80px',
            margin: '20px 47px 9px 0px',
            padding: '16px 155px 13px 20px',
            borderRadius: '16px',
            boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.1)',
            backgroundColor: '#fff',}}
        >
            <Grid item           
           
            >
                <Typography
                style={{
                    width: '155px',
  height: '31px',
  flexgrow: '0',
  fontFamily: 'Roboto',
  fontSize: '18px',
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'center',
  color: '#216194',
                }}>Intervals in day(s)*</Typography>
            </Grid>
            <Grid item container direction='row'>
                <Grid item>
                    <Typography
                    style={{
                        width: '39px',
                        height: '19px',
                        flexgrow: '0',
                        fontFamily: 'Roboto',
                        fontSize: '17px',
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        fontStyle: 'normal',
                        lineHeight: 'normal',
                        letterSpacing: 'normal',
                        textAlign: 'left',
                        
                        margin: '30px 0px 0 -154px',    
                        color: '#bab9b9',
                    }} >Every</Typography>
                </Grid>
                <Grid item>
                    <Controller
                        control={control}
                        name={name}
                        defaultValue=''
                        
                        rules={rules}
                        render={({ field }) => (
                            <Input
                                onChange={field.onChange}
                                type='text'
                                className={classes.root}
                                disableUnderline
                                value={field.value}
                                placeholder={'e.g. 1'}
                            />
                        )}
                        {...props}
                    />
                </Grid>
                <Grid item>
                    <Typography 
                    style={{
                        width: '39px',
                        height: '19px',
                        flexgrow: '0',
                        fontFamily: 'Roboto',
                        fontSize: '16px',
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        
                        margin: '31px 0px 0 -35px',    
                        fontStyle: 'normal',
                        lineHeight: 'normal',
                        letterSpacing: 'normal',
                        textAlign: 'left',
                        color: '#bab9b9',
                    }}>day(s)</Typography>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default DayIntervalInput;