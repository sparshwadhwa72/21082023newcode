import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto';

const useStyles = makeStyles({


 textField: {
        height: '80px',
        width: '306px',
        borderRadius: '16px',

        boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
        padding: '16px 76px 16px 20px',
        backgroundColor: '#fff',
        '@media(max-Width: 900px)' : {
          width: '110%',
          margin: '-15px 0px 0px 0px'
        },
        
        
    },
    dropdownMenu: {
      borderRadius: '16px',
      width: '124px',
      textAlign: 'center',
      justifyContent: 'center',
      height: '200px',
      backgroundColor: '#fff',
      boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
  },


    dropdownMenuItem: {
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: '16px',
    
  },

  dropdownMenuList: {
      fontFamily: 'Roboto',
      fontSize: '16px',
      textAlign: 'center',
      justifyContent: 'center',
      
      borderRadius: '16px',
      color: '#216194',
      
  },
    
    dropdownInput: {
        
        padding: '0 24px 0 0',
        
        margin: '15px 27px 0 8px',
       
        fontFamily: 'Roboto',
        fontSize: '16px',
        color: '#216194',
        '&::placeholder': {
          fontFamily: 'Roboto',
          fontSize: '16px',
          color: '#bab9b9',
          opacity: '1',
      },
    },
    AdropdownInput: {
        
      padding: '0 24px 0 0',
      
      margin: '15px 27px 0 4.2129px',
     
      fontFamily: 'Roboto',
      fontSize: '16px',
      color: '#216194',
      '&::placeholder': {
        fontFamily: 'Roboto',
        fontSize: '16px',
        color: '#bab9b9',
        opacity: '1',
    },
  },
    
    MdropdownInput: {
        
      padding: '0 24px 0 0',
      
      margin: '15px 27px 0 4.2129px',
     
      fontFamily: 'Roboto',
      fontSize: '16px',
      color: '#216194',
      '&::placeholder': {
        fontFamily: 'Roboto',
        fontSize: '16px',
        color: '#216194',
        opacity: '1',
    },
  },
    unittextField: {
        height: '70px',
        margin: '20px 9px 0 -100px',
        padding: '-10px',
        width: '87px',
        

        lineHeight: '0.5',
       // '@media(max-Width: 390px)' : {
         // width: '15%',
          
        //margin: '-55px 7px 0 392px',
        //},
        
        
    },

    unittextField2: {
      height: '90px',
      margin: '-95px 37px 0 -200px',
      width: '60px',

      lineHeight: '15.11',
    
      
  },
    dropdownLabel: {
        color: '#216194',
        fontFamily: 'Roboto',
        
        fontSize: '22px',
        fontWeight: 'bold',
        height: '11px',
        lineHeight: '1.11',
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing: 'normal',
        marginTop: 20,
        margin: '0px 35px 25px 0px',
        transform: 'none',
        transition: 'none',
        '&.Mui-focused': {
            color: '#216194',
        },
    },

    unit: {
        height: '40px',
        borderRadius: '360px',
        boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
        padding: '16px 86px 16px 20px',
        backgroundColor: '#fff'
    },

   

    dropdownTextPlaceholderText: {
        color: '#bab9b9',
        margin: '-10px 0px 0px 0px',
        lineHeight: '2.3',

    },
    
    MdropdownTextPlaceholderText: {
      color: '#216194',
      margin: '-10px 0px 0px 0px',
      lineHeight: '2.3',

  },

    dropdownSelect: {
        marginTop: '8px',
        
        textAlign: 'center'
    },

    cssOutlinedInput: {
        height: '306px',
        margin: '15px 0px 53px -13px',
        '@media(max-Width: 900px)' : {
          width: '137%'
        },
        '&$cssFocused $notchedOutline': {
          borderColor: '#216194',
          '@media(max-Width: 900px)' : {
            width: '100%'
          },
        borderRadius: '16px',
        boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
        padding: '16px 76px 16px 20px',
         height: '85px',
         width: '306px',
         margin: '-30px 0px 13px -7px',
        lineHeight: '2.11',
      },

    },     
  cssFocused: {},

  notchedOutline: {
    borderWidth: '0px',
    borderColor: 'red'
  },

});

export default useStyles;