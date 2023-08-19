import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto';


const width = '100%'


const useStyles = makeStyles({

    titleText: {
        
        fontFamily: "'Roboto'",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "24px",
        textAlign: "center",
        color: "#216194",
              marginTop: 200,
          },
          textField: {
              width: '416px',
              height: '80px',
              margin: '32px 0 0 0',
          },
          textFieldsignup: {
            minWidth: '640px',
            height: '80px',
            margin: '32px 0px 0px  0px',
            background: "#FFFFFF",
    boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
    borderRadius: "16px",
    marginTop: 32,            
    // Responsive width
    '@media (max-width: 600px)': {
      minWidth: '100%', // Set to 100% width for screens smaller than 600px
    },
            
        },
    Inputnew:{
        fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  
  color: '#216194',
  padding: '31px 0px 0px 20px',
  '&::placeholder': {
    opacity: 1,
  color: "#BAB9B9",
},
    },
    
    Inputnew1:{
      fontFamily: "'Roboto'",
fontStyle: "normal",
fontWeight: 400,
fontSize: "16px",

color: '#216194',
padding: '18px 0px 0px 0px',
'&::placeholder': {
  opacity: 1,
color: "#BAB9B9",
},
  },
          
    textFieldInput: {
      margin: '38px 0 16px 0',
      '&::placeholder': {
          fontFamily: 'Roboto',
          fontSize: '16px',
          color: '#bab9b9',
          opacity: '1',
      },
      color: '#216194',
  },
          
    textFieldLabel: {
      margin: '16px 0px 0px 20px',      
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "18px",
  color: "#216194",
  
  transform: 'none',
  transition: 'none',
  '&.Mui-focused': {
      color: '#216194',
  },
  },
  
  Firstname: {
    minWidth: '304px',
    height: '80px',
    background: "#FFFFFF",
    boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
    borderRadius: "16px",
    marginTop: 32,            
    // Responsive width
    '@media (max-width: 600px)': {
      minWidth: '100%', // Set to 100% width for screens smaller than 600px
    },
  },

          
        Lastname:{
            minWidth: '304px',
            height: '80px',
  background: "#FFFFFF",
  boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
  borderRadius: "16px",
  margin: '32px 0px 0px 52px',
  '@media (max-width: 600px)': {
              minWidth: '100%',
              margin: '0px 0px 0px 0px' // Set to 100% width for screens smaller than 600px
            },
        },
        
  Inputbox3: {
    height: '80px',
    minWidth: '640px',
    borderRadius: '16px',
    borderColor: '#fff',
    boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
    padding: '16px 76px 16px 20px',
 
marginTop: 32,
'@media (max-width: 600px)': {
  minWidth: '100%',// Set to 100% width for screens smaller than 600px
},
    backgroundColor: '#fff',
    "& input::placeholder": {
      fontFamily: 'Roboto',
      fontSize: '16px',
      color: '#bab9b9',
      opacity: '1',

  },
},
      
          formButton: {
              background: "#216194",
              borderRadius: "16px",
              fontFamily: "'Roboto'",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              width: '128px',
              height: '42px',
              textAlign: "center",
              color: "#FFFFFF",
             marginTop: '32px',
             textTransform: 'none'
          },
      
          externalLoginButton: {
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',              
  boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
              width: '640px',
              height: '80x',
              textTransform: 'none',
              color: '#216194',              
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "18px",
      
          },
      
          checkBoxControl: {
              margin: '24px 0 0 0',
          },
      
          checkBoxLabel: {
              
        fontFamily: "'Roboto'",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "16px",
        color: "#BAB9B9",
              '.MuiFormControlLabel-label': {
                  fontSize: '16px'
              },
          },
          tinyText: {
              fontSize: '11px',
              color: '#969696'
          },
          errorText: {
              
        fontFamily: "'Roboto'",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "14px",
        alignItems: "center",
        color: "#E58A83",
        marginTop: 8,
          },

          Email:{
            
  background: "#FFFFFF",
  marginTop: '64px',
  boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
  borderRadius: "16px",
  minWidth: '416px',
  height: '80px',
  '@media (max-width: 600px)': {
    minWidth: '100%', // Set to 100% width for screens smaller than 600px
  },
          },

});

export default useStyles;