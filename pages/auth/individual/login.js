import React, { useState } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LoginForm  from '../../../components/forms/';
import Link from 'next/link';


const useStyles = makeStyles({
    mainDiv: {
        display: 'flex'
    },
    loginLeft: {
        background: '#fff',
        flex: 1,
        margin: '166px 0 197px 0'
    },
    loginRight: {
        flex: 1
    },
    noAccountText: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        lineHeight: '1.25',
        color: '#969696',
        marginTop: '48px',
    },
    forgotPasswordLinkText: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        marginTop: '8px',
        marginBottom: '48px',
        color: '#216194',
        fontWeight: '500'
    },
    switchAccountTypeText: {
        fontFamily: 'Roboto',
        fontSize: '14px',
        color: '#969696',
        textDecoration: 'underline'
    }


});
const LoginIndividual = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.mainDiv}>
            <Grid container direction='row'>
                <Grid item container direction='column' alignContent='center' md={6}>
                    <div className={classes.loginLeft}>
                        <LoginForm />
                        <Grid item container direction='column' alignItems='center'>
                            <Typography className={classes.noAccountText}>
                                Don't have an account? <Link href='#'>Sign up</Link>
                            </Typography>
                            <Typography className={classes.forgotPasswordLinkText}>
                                <Link href='#'>Forgot password?</Link>
                            </Typography>
                            <Typography className={classes.switchAccountTypeText}>
                                <Link href='#'>Switch to business account</Link>
                            </Typography>
                        </Grid>
                    </div>
                </Grid>
                <Grid item md={6}>
                    <div className={classes.loginRight}>
                    <h1>Insert image here</h1>

                    </div>
                </Grid>
            </Grid>
        </div>
        
    )
}

export default LoginIndividual;