import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto';


const useStyles = makeStyles({
    textField: {
        height: '80px',
        minWidth: '306px',
        maxWidth: '306px',
        borderRadius: '16px',
        boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
        padding: '16px 76px 16px 20px',
        backgroundColor: '#fff',
        '@media (max-width: 600px)': {
          minWidth: '100%', // Set to 100% width for screens smaller than 600px
        },
    },
    
    textFieldLabel: {
        color: '#216194',
        fontFamily: 'Roboto',
        fontSize: '25px',
        fontWeight: 'bold',
        
        margin: '10px 5px 33px 0px',
        height: '21px',
        marginTop: 25,
        lineHeight: '0.11',
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing: 'normal',
        transform: 'none',
        transition: 'none',
        '&.Mui-focused': {
            color: '#216194',
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

    
    MtextFieldInput: {
      margin: '38px 0 16px 0',
      '&::placeholder': {
          fontFamily: 'Roboto',
          fontSize: '16px',
          color: '#216194',
          opacity: '1',
      },
      color: '#216194',
  },
    
    textFieldInput2: {
      margin: '8px 0 6px 0px',
      textAlign: 'center' ,
      '&::placeholder': {
        
          fontFamily: 'Roboto',
          fontSize: '16px',
          color: '#bab9b9',
          
          opacity: '1',
      },
      color: '#fff',
      

  },

  Addcanister: {
    
    backgroundColor: '#216194',
    color: '#fff',
    borderRadius: '16px',
    width: '227px',
    height: '40px',
    alignContent: 'center',
    margin: '10px 0px 0px 70px',
    '@media(max-Width: 590px)' : {
        margin: '10px 0px 0px 35px '
    },
  },

  Chip: {
    
    color: '#216194',
    backgroundColor: '#fff',
   
    width: '416px',
    padding: '0px 100px 0px 0px',
    margin: '30px 0px 0px 2px',
    '@media(max-Width: 590px)' : {
      
  },
  },

  Grid: {
    width: '416px',
    height: '80px',
    backgroundColor: '#fff',
    borderRadius: '16px',
    marginLeft: 22,
    
boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.1)',
'@media(max-Width: 590px)' : {
  width: '28%',
  
},
  },

  LoadText: {
    color: '#216194',
    fontWeight: 'bold',
    width: '277px',
    '@media(max-Width: 590px)' : {
      width: '200px',
      
    },
  },

  Switch: {
    '@media(max-Width: 590px)' : {
      margin: '-30px 10px 10px -20px'
      
    },
  },

  AddcanisterButton: {
    height: '80px',
    width: '416px',
    
fontFamily: "'Roboto'",
fontStyle: "normal",
fontWeight: 700,
    fontSize: '18px',
    borderRadius: '16px',
    margin: '37px 0px 0px 2px',
    fontWeight: 'normal',
    boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.1)',
    padding: '20px 76px 16px 50px',
    backgroundColor: '#fff',
    textalign: 'center',
    textTransform: 'none',
    color: '#bab9b9',
   margin: '0px 0px 0px 0px',
    '@media(max-Width: 590px)' : {
      width: '30%'
    }

  },


  
  textFieldInput3: {
    margin: '5px 0 0px -10px',
    textAlign: 'center' ,
    
  boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
    '&::placeholder': {
      
        fontFamily: 'Roboto',
        fontSize: '16px',
        color: '#fff',
        
        opacity: '1',
    },
    color: '#fff',
},
    
    dropdownInput: {
        marginBotton: '16px',
        padding: '0 24px 0 0',
        fontFamily: 'Roboto',
        fontSize: '16px',
    },

    cssOutlinedInput: {
        height: '73px',
        margin: '-9px 0px 43px -20px',
        width: '306px',
        '@media(max-Width: 390px)' : {
          width: '138%'
        },
        '&$cssFocused $notchedOutline': {
          borderColor: '#216194',
        borderWidth: '2px',
          
          borderRadius: '16px',
          boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
          padding: '16px 76px 16px 20px',
          marginTop: -7,
           
          
        },
        
      },

      
  cssFocused: {
    
  },

  notchedOutline: {
    borderWidth: '0px',
    borderColor: 'red'
  },

  Selectedday: {
    height: '28px',
    fontfamily: 'Roboto',
    fontSize: '16px',
    fontstretch: 'normal',
    fontstyle: 'normal',
    lineheight: '1.25',
    letterspacing: 'normal',
    textalign: 'left',
    color: '#216194',
},

});

export default useStyles;