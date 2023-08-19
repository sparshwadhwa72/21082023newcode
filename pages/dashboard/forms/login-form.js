import React, { useState ,useEffect} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Typography, TextField, Container, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto';
import TextInput from './form-components/text-input/text-input';
import { Login } from '@utils/axios';
import axios from 'axios';
import { useRouter } from 'next/router';
import useStyles from './Login/Signup-Styles';
import SignupForm from './signup-form';



const LoginForm = () => {
    const { handleSubmit, control, formState: { errors } } = useForm({
        mode: 'onTouched',
        reValidateMode: 'onChange',
        criteriaMode: 'all'
    });
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

    const [googleLoginUrl, setGoogleLoginUrl] = useState('');
const [facebookLoginUrl, setFacebookLoginUrl] = useState('');

useEffect(() => {
    // Fetch the Google login URL from the API
    fetch('http://52.66.13.189:8000/auth/o/google-oauth2/?redirect_uri=http://localhost:8000/kindo/users/google-callback/')
      .then(response => response.json())
      .then(data => {
        setGoogleLoginUrl(data.authorization_url);
      })
      .catch(error => {
        console.error('Failed to fetch Google login URL:', error);
      });
  
    // Fetch the Facebook signup URL from the API
    fetch(' http://52.66.13.189:8000/auth/o/facebook/?redirect_uri=http://52.66.13.189:8000/kindo/users/facebook-callback/')
      .then(response => response.json())
      .then(data => {
        setFacebookLoginUrl(data.authorization_url);
      })
      .catch(error => {
        console.error('Failed to fetch Facebook signup URL:', error);
      });
  }, []);
  
    
const onSubmit = (data) => {
    if (forgotPasswordClicked) {
      // Redirect to the password recovery page
      router.push('/signup-form');
    } else {
      // Handle regular login
      axios
        .post('http://52.66.13.189:8000/kindo/users/login/', {
          email: data.email,
          password: data.password
        })
        .then((response) => {
          // Handle successful login
          if (response.data.success) {
            router.push('/signup-form'); // Redirect to another page upon successful login
          } else {
            // Handle login failure
            // Display an error message or take any necessary action
          }
        })
        .catch((error) => {
          // Handle request error
          console.error('Login request error:', error);
          // Display an error message or take any necessary action
        });
    }
  };
      
    

    return (
        <Container maxWidth="sm" >
         
            <Grid align="center">
                <Grid>
                    <Typography variant='h3' className={classes.titleText}>
                        Login
                    </Typography>
                </Grid>
                <Grid >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container item direction='column'>
                            <Grid item xs={12}>
                                <TextField
                                    control={control}
                                    className={classes.Email}
                                    InputLabelProps={{
                                        shrink: true,                                        
                                        className: classes.textFieldLabel,
                                           }}
                                        InputProps={{
                                        disableUnderline: true,
                                        notched: false,}}            
                                        inputProps={{
                                        className: classes.Inputnew
                                        }}
                                    name='email'
                                    label='Your email'
                                    placeholder='example@domain.com'
                                    rules={{ 
                                        required: 'email address is incorrect/ is not exist',
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
                                <TextField
                                    control={control}
                                    className={classes.Email}
                                    InputLabelProps={{
                                        shrink: true,                                        
                                        className: classes.textFieldLabel,
                                           }}
                                        InputProps={{
                                        disableUnderline: true,
                                        notched: false,}}            
                                        inputProps={{
                                        className: classes.Inputnew
                                        }}
                                   
                                    name='password'
                                    rules={{ required: 'Enter a password' }}
                                    label='Password'
                                    
                                    placeholder='enter password'
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
                                <Button type='submit' variant='contained' className={classes.formButton}
                                >
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
                    <Button className={classes.externalLoginButton} onClick={() => window.location.href = googleLoginUrl}>
            Log in with Google
          </Button>

                    </Grid>
                    <Grid item container justifyContent='center'>
  <Button className={classes.externalLoginButton} onClick={() => window.location.href = facebookLoginUrl}>
    Log in with Facebook
  </Button>
</Grid>

                    
                    <Grid item container justifyContent='center'>
                    <Typography>Don't have an account?</Typography>
                    <Typography>Sign up</Typography>
                    </Grid>
                    <Grid item container justifyContent='center'>
                    <Typography onClick={() => setForgotPasswordClicked(true)}>Forgot password?</Typography>

                    
                    </Grid>

                </Grid>
            </Grid>
             
        </Container>
    )


}

export default LoginForm;