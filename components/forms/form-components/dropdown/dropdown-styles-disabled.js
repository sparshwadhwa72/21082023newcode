import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto';

const useStyles = makeStyles({
    dropdown: {
        height: '80px',
        width: '416px',
        borderRadius: '16px',
        '@media(max-Width: 390px)' : {
            width: '25%',
          },
        
        boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.1)',
        padding: '16px 16px 16px 20px',
        backgroundColor: '#fff',
        
},
    dropdownLabel: {
        color: '#216194',
        fontFamily: 'Roboto',
        
        fontSize: '18px',
        fontWeight: 'bold',
        height: '21px',
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
    dropdownSelect: {
        marginTop: '8px',
        
        textAlign: 'center'
    },
    dropdownInput: {
        marginBotton: '16px',
        borderColor: '#216194',
        padding: '0 24px 0 0',
     textAlign: 'left',
        
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
    dropdownPlaceholderText: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        color: '#bab9b9',
        opacity: '1',
    },

    
    MdropdownPlaceholderText: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        color: '#216194',
        opacity: '1',
    },

    dropdownMenu: {
        borderRadius: '16px',
        width: '416px',
        boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
    },
    dropdownMenuList: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        color: '#216194',
        textAlign: 'center',
    },
    dropdownMenuItem: {
        textAlign: 'center',
        fontSize: '16px',
        justifyContent: 'center'
    },

    cssOutlinedInput: {
        height: '8000px',
        margin: '0px 0px 43px -20px',
        width: '590px',
        '&$cssFocused $notchedOutline': {
          borderColor: 'red',
          
        borderRadius: '16px',
        boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
        padding: '16px 76px 16px 20px',
        margin: '-13px 0px 43px 0',
        height: '82px',
        width: '592px',
         
        
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

});

export default useStyles;