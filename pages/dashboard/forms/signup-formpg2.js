import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Typography, TextField, Container, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto';
import TextInput from './form-components/text-input/text-input';
import { Login } from '@utils/axios';
import { useRouter } from 'next/router';
import useStyles from './Login/Signup-Styles';
import DateInput from '@components/forms/form-components/date-picker/Signup-dob';
import AutocompleteDropdown from '@components/forms/form-components/autocomplete-dropdown/Country-autocomplete-dropdown';

const SignupForm = () => {
    const { handleSubmit, control, formState: { errors } } = useForm({
        mode: 'onTouched',
        reValidateMode: 'onChange',
        criteriaMode: 'all'
    });
    
    const drugList = ['Hong Kong', 'China', 'India'];
    
    const [forgotPasswordClicked, setForgotPasswordClicked] = useState(false);

    const [ showPassword, setShowPassword ] = useState(false);
    const [ keepLoggedIn, setKeepLoggedIn ] = useState(false);
    const classes = useStyles();
    const router = useRouter()
    const handleChangeKeepLoggedIn = () => {
        setKeepLoggedIn(!keepLoggedIn);
    };

    const handleChangeShowPassword = () => {
        setShowPassword(!showPassword);
    };


    const onSubmit = (data) => {
        if (forgotPasswordClicked) {
          // Redirect to the password recovery page
          router.push('/signup-form');
        } else {
          // Handle regular login
          Login({ email: data.email, password: data.password }).then((response) => {
            if (response) {
              router.push('/signup-form');
            }
          });
        }
      };
      
    

    return (
        <Container>
            {forgotPasswordClicked ? (
      <SignupForm />
    ) : (
            <Grid container direction='column' alignItems='center' justifyContent='space-evenly' spacing={2}>
                <Grid>
                    <Typography  className={classes.titleText}>
                    Contact Info
                    </Typography>
                </Grid>
                <Grid >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container item direction='column'>
                            <Grid item>
                                <TextInput
                                    control={control}
                                    name='Address line 1*'
                                    label='Address line 1*'
                                  
                                    placeholder='street, p.o. box, company name, c/o'
                                    additionalStyles={classes.textFieldsignup}
                                    // rules={{ 
                                    //     required: 'email address is incorrect/ is not exist',
                                    //     pattern: {
                                    //         value: /\S+@\S+\.\S+/,
                                    //         message: 'Enter a valid email address'
                                    //     },
                                    //     maxLength: {
                                    //         value: 50,
                                    //         message: 'Character limit: 50 characters'
                                    //     }
                                    // }}
                                    style={{ color: 'red' }}
                                />
                            </Grid>
                            <Grid item>
                                <div className={classes.errorText}>{errors.email?.message}</div>
                            </Grid>
                            <Grid item>
                            <TextInput
                                    control={control}
                                    name='Address line 1*'
                                    label='Address line 2*'
                                  
                                    placeholder='apartment, suite, unit, building, floor, etc.'
                                    additionalStyles={classes.textFieldsignup}
                                    // rules={{ 
                                    //     required: 'email address is incorrect/ is not exist',
                                    //     pattern: {
                                    //         value: /\S+@\S+\.\S+/,
                                    //         message: 'Enter a valid email address'
                                    //     },
                                    //     maxLength: {
                                    //         value: 50,
                                    //         message: 'Character limit: 50 characters'
                                    //     }
                                    // }}
                                    style={{ color: 'red' }}
                                />
                            </Grid>
                            
            <Grid item>
                                <TextInput
                                    control={control}
                                    name='City'
                                    label='City'
                                    placeholder='(e.g. Hong Kong)'
                                    additionalStyles={classes.Firstname}
                                    rules={{ 
                                        required: 'required field',
                                        // pattern: {
                                        //     value: /\S+@\S+\.\S+/,
                                        //     message: 'Enter a valid email address'
                                        // },
                                        maxLength: {
                                            value: 50,
                                            message: 'Character limit: 50 characters'
                                        }
                                    }}
                                />
                                <TextInput
                                    control={control}
                                    name='ZIP/ Postal code'
                                    label='ZIP/ Postal code'
                                    placeholder='000000'
                                    additionalStyles={classes.Lastname}
                                    rules={{ 
                                        required: 'required field',
                                        // pattern: {
                                        //     value: /\S+@\S+\.\S+/,
                                        //     message: 'Enter a valid email address'
                                        // },
                                        maxLength: {
                                            value: 50,
                                            message: 'Character limit: 50 characters'
                                        }
                                    }}
                                />
            </Grid>
                            <Grid  container item direction='row'
                            >
                              <AutocompleteDropdown
                            autocompleteOptions={drugList}
                            label={`Country*`}
                            control={control}
                            name='Country*'
                            rules={{required: true}}
                            placeholder={`e.g. China`}
                        />
                                <TextInput
                                    control={control}
                                    name='Phone number*'
                                    label='Phone number*'
                                    placeholder='000000'
                                    additionalStyles={classes.Lastname}
                                    rules={{ 
                                        required: 'required field',
                                        // pattern: {
                                        //     value: /\S+@\S+\.\S+/,
                                        //     message: 'Enter a valid email address'
                                        // },
                                        maxLength: {
                                            value: 50,
                                            message: 'Character limit: 50 characters'
                                        }
                                    }}
                                />      
                            </Grid>
                            <Grid item>
                                <div className={classes.errorText}>{errors.password?.message}</div>
                            </Grid>
                          
                          
                           
                            <Grid item container direction='row' justifyContent='flex-start'>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            disableRipple={true}
                                            checked={showPassword}
                                            onChange={handleChangeShowPassword}
                                            name='show-password-checkbox'
                                            style={{
                                                color: '#216194'
                                            }}
                                        />
                                    }
                                    label='Show password'
                                    classes={{label: classes.checkBoxLabel}}
                                    className={classes.checkBoxControl}
                                />
                            </Grid>
                         
                        </Grid>
                    </form>
                </Grid>
               
               
            </Grid>
             )}
        </Container>
    )


}

export default SignupForm;