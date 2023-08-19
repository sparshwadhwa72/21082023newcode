import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto';

const useStyles = makeStyles({
    TextField: {
        height: '240px',
        width: '644px',
        borderRadius: '16px',
        boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
        padding: '16px 76px 16px 20px',
        backgroundColor: '#fff',
        '@media(max-Width: 390px)' : {
          width: '100%',
          
        margin: '-17px 0px 0px 0px',
        },
    },
    textFieldLabel: {
        color: '#216194',
        fontFamily: 'Roboto',
        fontSize: '22px',
        fontWeight: 'bold',
        margin: '26px 0px 43px 0px',
        height: '31px',
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
        margin: '8px 0 16px -20px', 
        color: '#216194',       
        '&::placeholder': {
          fontFamily: 'Roboto',
          fontSize: '16px',
          color: '#bab9b9',
          opacity: '1',
      },
        
    },
    
    MtextFieldInput: {
      margin: '8px 0 16px -20px', 
      color: '#216194',       
      '&::placeholder': {
        fontFamily: 'Roboto',
        fontSize: '16px',
        color: '#216194',
        opacity: '1',
    },
      
  },

    helperText: {
        marginTop: 120,
        
        margin: '15px 0px 53px -8px',
        
      },
      
    cssOutlinedInput: {
       
         height: '240px',
        width: '644px',
        //margin: '15px 0px 53px -13px',
        '@media(max-Width: 390px)' : {
          width: '66%'
        },
        
        '&$cssFocused $notchedOutline': {
          borderColor: '#216194',
          
        borderRadius: '16px',
        '@media(max-Width: 390px)' : {
          width: '207%'
        },
        
        boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
        padding: '16px 76px 16px 20px',
         height: '247px',
         width: '644px',
         margin: '-20px 0px 13px -21px',
        lineHeight: '2.11',
      },

    },     
  cssFocused: {},

  notchedOutline: {
    borderWidth: '0px',
    borderColor: 'red'
  },

   Grid: {width: '416px',
                        
  boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
                  height: '80px',
                  backgroundColor: '#fff',
                  borderRadius: '16px',
                  '@media(max-Width: 490px)' : {
                    width: '25%',
                    margin: '0px 0px 0px 20px'
                    
                  },
                },

                  Storedrugtext: {
                      color: '#216194',
                      fontWeight: 'bold',
                      margin: '-30px 0px 0px -20px '                    
                    
                  },


                  Grid2: {width: '416px',
                        
  boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
                  height: '80px',
                  margin: '30px 0px 0px -42px',
                  backgroundColor: '#fff',
                  borderRadius: '16px',
                  '@media(max-Width: 490px)' : {
                    width: '130%',
                    
                  },},

                  Storedrugtext: {
                      color: '#216194',
                      fontWeight: 'bold',
                      margin: '-30px 0px 0px -20px '                    
                    
                  },
                  

                  Switch: {
                    '@media(max-Width: 490px)' : {
                      
                      margin: '0px 0px 0px -60px'
                      
                    },

                  },

                  Storedrugtext: {
                      color: '#216194',
                      fontWeight: 'bold',
                      margin: '-30px 0px 0px -20px '                    
                    
                  },

                  
                  Storedrugtext2: {
                    color: '#216194',
                    fontWeight: 'bold',
                    
                    margin: '10px 0px 10px 20px ',
                    padding: '10px 0px 0px 0px',               
                  
                },

                IconButton: {
                  margin: '20px -10px 0px -50px'
                },

                Icon:{
                  color: '#E58A83',
                },

                Text2: {
                    width: '476px',
                    height: '16px',
                    fontFamily: 'Roboto',
                    fontSize: '14px',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    margin: '-33px 0px 0px -10px',
                    color: '#bab9b9',
                    '@media(max-Width: 590px)' : {
                      width: '350px',
                      
                    },
                  
                },

                NewText: {
                  
              width: '356px',
              height: '16px',
              fontFamily: 'Roboto',
              fontSize: '14px',
              fontWeight: 'normal',
              fontStretch: 'normal',
              fontStyle: 'normal',
              color: '#bab9b9',
              margin: '10px 0px 0px -307px',
              '@media(max-Width: 590px)' : {
                width: '315px',
                
              },
                },
});

export default useStyles;