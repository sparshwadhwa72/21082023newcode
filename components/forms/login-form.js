import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Typography, TextField, Container, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto';
import TextInput from './form-components/text-input/text-input';
import { Login } from '@utils/axios';
import { useRouter } from 'next/router'


const useStyles = makeStyles({
    titleText: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: '24px',
        color: '#264a73',
    },
    textField: {
        width: '436px',
        margin: '32px 0 0 0',
    },

    formButton: {
       backgroundColor: '#216194',
       borderRadius: '16px',
       width: '240px',
       height: '48px',
       boxShadow: '0 0 0 0',
       fontFamily: 'Roboto',
       color: '#fff',
       fontSize: '16px',
       textTransform: 'capitalize',
       marginTop: '48px',
    },

    externalLoginButton: {
        backgroundColor: '#f3f8fe',
        borderRadius: '16px',
        width: '240px',
        height: '48px',
        textTransform: 'none',
        color: '#216194',
        marginBottom: '16px'

    },

    checkBoxControl: {
        margin: '24px 0 0 0',
    },

    checkBoxLabel: {
        color: '#969696',
        fontSize: '16px',
        '.MuiFormControlLabel-label': {
            fontSize: '16px'
        },
    },
    tinyText: {
        fontSize: '11px',
        color: '#969696'
    },
    errorText: {
        fontSize: '11px'
    }

});
const LoginForm = () => {
    const { handleSubmit, control, formState: { errors } } = useForm({
        mode: 'onTouched',
        reValidateMode: 'onChange',
        criteriaMode: 'all'
    });
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


    const onSubmit = (data) => {Login({email:data.email, password: data.password}).then(response=>{
        if (response){
            router.push('/dashboard')
        }
    })}

    return (
        <Container>
            <Grid container direction='column' alignItems='center' justifyContent='space-evenly' spacing={2}>
                <Grid item container direction='row'>
                    <Typography variant='h3' className={classes.titleText}>
                        Login
                    </Typography>
                </Grid>
                <Grid item container direction='column'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container item direction='column'>
                            <Grid item>
                                <TextInput
                                    control={control}
                                    name='email'
                                    label='Your e-mail'
                                    placeholder='example@domain.com'
                                    additionalStyles={classes.textField}
                                    rules={{ 
                                        required: 'Enter an e-mail ID',
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: 'Enter a valid email address'
                                        },
                                        maxLength: {
                                            value: 50,
                                            message: 'Character limit: 50 characters'
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <div className={classes.errorText}>{errors.email?.message}</div>
                            </Grid>
                            <Grid item>
                                <TextInput
                                    control={control}
                                    name='password'
                                    rules={{ required: 'Enter a password' }}
                                    label='Password'
                                    placeholder='enter password'
                                    additionalStyles={classes.textField}
                                    type={showPassword ? 'text' : 'password'}
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
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            disableRipple={true}
                                            checked={keepLoggedIn}
                                            onChange={handleChangeKeepLoggedIn}
                                            name='keep-logged-in-checkbox'
                                            style={{
                                                color: '#216194'
                                            }}
                                        />
                                    }
                                    label='Keep me logged in'
                                    classes={{label: classes.checkBoxLabel}}
                                    className={classes.checkBoxControl}

                                />
                            </Grid>
                            <Grid item container direction='row' justifyContent='center'>
                                <Button type='submit' variant='contained' className={classes.formButton}>
                                    Log in
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                <Grid item>
                    <Typography className={classes.tinyText}>
                        OR
                    </Typography>
                </Grid>
                <Grid item container direction='column'>
                    <Grid item container justifyContent='center'>
                        <Button className={classes.externalLoginButton}>
                            Log in with Google
                        </Button>
                    </Grid>
                    <Grid item container justifyContent='center'>
                        <Button className={classes.externalLoginButton}>
                            Log in with Facebook
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )


}

export default LoginForm;