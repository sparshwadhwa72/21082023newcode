import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto';

const useStyles = makeStyles({


    textField: {
        height: '80px',
        width: '292px',
        borderRadius: '16px',
        boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
        padding: '16px 76px 16px 20px',
        backgroundColor: '#fff',
        '@media(max-Width: 390px)' : {
          width: '94%'
        },
        
        
    },

    Inputbox: {
      height: '80px',
      width: '306px',
      borderRadius: '16px',
      borderColor: '#fff',
      boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
      padding: '16px 76px 16px 20px',
   
  
      '@media(max-Width: 390px)' : {
        width: '120%',
        margin: '-17px 0px 0px 0px',
      },
      backgroundColor: '#fff',
      "& input::placeholder": {
        fontFamily: 'Roboto',
        fontSize: '16px',
        color: '#bab9b9',
        opacity: '1',
  
    },
  },

  Inputbox3: {
    height: '80px',
    width: '640px',
    borderRadius: '16px',
    borderColor: '#fff',
    boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
    padding: '16px 76px 16px 20px',
 
marginTop: 32,
    '@media(max-Width: 390px)' : {
      width: '120%',
      margin: '-17px 0px 0px 0px',
    },
    backgroundColor: '#fff',
    "& input::placeholder": {
      fontFamily: 'Roboto',
      fontSize: '16px',
      color: '#bab9b9',
      opacity: '1',

  },
},

Inputbox2: {
  
  height: '80px',
  width: '416px',
  maxWidth: '900px',
  borderRadius: '16px',
  borderColor: '#fff',
 margin: '20px 0px 0px 0px',
 
  boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
  padding: '16px 76px 16px 20px',
  backgroundColor: '#fff',
  "& input::placeholder": {
    fontFamily: 'Roboto',
    fontSize: '16px',
    padding: '3px',
    color: '#bab9b9',
    opacity: '1',


},

'@media(max-Width: 768px)' : {
  width: '25%',       

},
},


  MInputbox: {
    height: '80px',
    width: '306px',
    borderRadius: '16px',
    borderColor: '#fff',
    boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
    padding: '16px 76px 16px 20px',

    '@media(max-Width: 390px)' : {
      width: '127%',
      margin: '-17px 0px 0px 0px',
    },
    backgroundColor: '#fff',
    "& input::placeholder": {
      fontFamily: 'Roboto',
      fontSize: '16px',
      color: '#216194',
      opacity: '1',

  },
},

inputPlaceholder: {
  fontFamily: 'Roboto',
  fontSize: '16px',
  color: '#BAB9B9',
  opacity: '1',
},

    customtodayday: {
      color: '#e67e22 !important',
      border: '1px solid #e67e22 !important',
    },

    dropdown: {
        height: '80px',
        width: '280px',
        borderRadius: '16px',
        boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
        padding: '16px 16px 16px 20px',
        backgroundColor: '#fff'
    },

    dropdownlabel: {
        color: '#216194',
        fontFamily: 'Roboto',
        
        margin: '0px 0px 0px -5px',
        
        fontSize: '18px',
        fontWeight: 'bold',
        height: '11px',
        lineHeight: '1.11',
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing: 'normal',
        transform: 'none',
        transition: 'none',
        position: 'relative',
        '&.Mui-focused': {
            color: '#216194',
        },
    },

    textFieldInput: {
        padding: '0 24px 0 0',
       width:'40px',
        fontFamily: 'Roboto',
        
        fontSize: '16px',
        color: '#969696',
        '&::placeholder': {
          fontFamily: 'Roboto',
          fontSize: '16px',
          color: 'red',
          opacity: '1',
      },
        
       
    },

    cssOutlinedInput: {
        height: '80px',
        margin: '0px 0px 43px -20px',
        width: '292px',
        '&$cssFocused $notchedOutline': {
          borderColor: '#216194',
        
        borderRadius: '16px',
        boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
        padding: '16px 76px 16px 20px',
        margin: '-27px 0px 43px 0',
        height: '85px',
        width: '292px',
         
        
        }
      },

      
  cssFocused: {
    
    borderWidth: '0px',
    borderColor: 'red'
  },

  notchedOutline: {
    borderWidth: '0px',
    borderColor: '#216194'
  },
  SignupDOB: {
    width: '640px',
    height: '80px',
  background: "#FFFFFF",
  boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
  borderRadius: "16px"
  },

});

export default useStyles;