import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextInput from './form-components/text-input/text-input';
import { Container, Grid, Typography, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    errorText: {
        fontSize: '11px'
    },
    textField: {

    },

});
const SignupForm = () => {
    const { handleSubmit, control, formState: { errors } } = useForm({
        mode: 'onTouched',
        reValidateMode: 'onChange',
        criteriaMode: 'all'
    });
    const [ showPassword, setShowPassword ] = useState(false);
    const classes = useStyles();
    const onSubmit = (data) => console.log(data);

    const handleChangeShowPassword = () => {
        setShowPassword(!showPassword);
    };


    return (
        <Container>
            <Grid container direction='column' spacing={4} justifyContent='space-evenly'>
                <Grid item container direction='row' justifyContent='flex-start'>
                    <Typography>Begin your trip right now!</Typography>
                </Grid>
                <Grid item>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container direction='column' spacing={4}>
                            <Grid item>
                                <Controller
                                    control={control}
                                    name='email'
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
                                    defaultValue=''
                                    render={({ field }) => (
                                        <TextInput
                                            field={field}
                                            label='Your e-mail'
                                            placeholder='example@domain.com'
                                            additionalStyles={classes.textField}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item>
                                <div className={classes.errorText}>{errors.email?.message}</div>
                            </Grid>
                            <Grid item>
                                <Controller
                                    control={control}
                                    name='fullName'
                                    rules={{
                                        required: 'Enter your name',
                                        maxLength: {
                                            value: 60,
                                            message: 'Character limit: 60 characters'
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z]*$/,
                                            message: 'Only alphabet characters are allowed'
                                        }
                                    }}
                                    defaultValue=''
                                    render={({ field }) => (
                                        <TextInput
                                            field={field}
                                            label='Full name'
                                            placeholder='Chan Tai Man'
                                            additionalStyles={classes.textField}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item>
                                <div className={classes.errorText}>{errors.email?.message}</div>
                            </Grid>
                            <Grid item>
                                <Controller
                                    control={control}
                                    name='password'
                                    rules={{
                                        required: 'Enter a password',
                                        maxLength: {
                                            value: 100,
                                            message: 'Character limit: 100 characters'
                                        },
                                        minLength: {
                                            value: 8,
                                            message: 'Be at least 8 characters long'
                                        }
                                    }}
                                    defaultValue=''
                                    render={({ field }) => (
                                        <TextInput
                                            field={field}
                                            label='New password'
                                            placeholder='at least 8 characters'
                                            additionalStyles={classes.textField}
                                            type={showPassword ? 'text' : 'password'}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item>
                                {/*Error stuff */}
                            </Grid>
                            <Grid item>
                                <Controller
                                        control={control}
                                        name='confirmPassword'
                                        rules={{
                                            required: 'Enter a password',
                                            maxLength: {
                                                value: 100,
                                                message: 'Character limit: 100 characters'
                                            },
                                            
                                        }}
                                        defaultValue=''
                                        render={({ field }) => (
                                            <TextInput
                                                field={field}
                                                label='Confirm password'
                                                placeholder='at least 8 characters'
                                                additionalStyles={classes.textField}
                                                type={showPassword ? 'text' : 'password'}
                                            />
                                        )}
                                    />
                            </Grid>
                            <Grid item>
                                {/* Error stuff */}
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
                            <Grid item container direction='row' justifyContent='flex-end'>
                                <Button type='submit' variant='contained' className={classes.formButton}>
                                    Submit
                                </Button>
                            </Grid>


                        </Grid>

                    </form>
                    
                </Grid>
            </Grid>
        </Container>

    )


}

export default SignupForm;