import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { makeStyles } from '@material-ui/core';

import {Helmet} from "react-helmet";

const useStyles = makeStyles({

  body: {        
      
    
    backgroundColor: '#f1f6fd',
  '@media(max-Width: 900px)' : {
      width: '100%',
      height: '100%',
      
    overflowX: "hidden",
    },
  
},
      

  
  });

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  const classes = useStyles();

  return (
    <React.Fragment>
      <div
       className={classes.body}>

      <Head>
        <title>My page</title> 
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

    <meta charset="utf-8" />
      </Head>
      <ThemeProvider theme={theme}>
        
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      
      </div>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
