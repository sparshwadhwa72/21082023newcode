/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import SignupForm from '../../../components/forms/signup-form';
import SignupForm from '@components/forms/signup-form';

import Link from 'next/link';

const useStyles = makeStyles({
    mainDiv: {
        display: 'flex'
    },
    signupLeft: {

    },
    signupRight: {

    },

});

const SignupIndividual = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainDiv}>
            <Grid container direction='row'>
                <Grid item container direction='column' alignItems='center' md={6}>
                    <div className={classes.signupLeft}>
                        <SignupForm />
                    </div>

                </Grid>
                <Grid item md={6}>
                    <div className={classes.signupRight}>
                        Insert image here

                    </div>
                </Grid>
            </Grid>


        </div>
    )
}
export default SignupIndividual;