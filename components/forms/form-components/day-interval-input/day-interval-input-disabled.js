import React from 'react';
import { Grid, Typography, Input } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

Input: {
    width: '60px',
    height: '15px',  
    textAlign: 'center',

    fontSize: '16px',
    margin: '29px 0px 0px -135px',                              
     borderRadius: '16px',
     
    color: '#216194',
    '&::placeholder': {
        fontFamily: 'Roboto',
        fontSize: '16px',
        height: '30px',
     
        color: '#BAB9B9',
        backgroundColor: '#f3f8fe',
        opacity: '1',
    },
}
})


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
                        
                        margin: '30px 0px 0 -155px',    
                        color: '#216194',
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
                            disabled
                                onChange={field.onChange}
                                type='text'
                                inputProps={{
                                    className: classes.Input,
                                  }}
                                disableUnderline
                                value={field.value}
                                placeholder={placeholder}
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
                        
                        margin: '31.2px 0px 0 -95px',    
                        fontStyle: 'normal',
                        lineHeight: 'normal',
                        letterSpacing: 'normal',
                        textAlign: 'left',
                        color: '#216194',
                    }}>Day(s)</Typography>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default DayIntervalInput;