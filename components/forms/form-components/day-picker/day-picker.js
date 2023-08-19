import React from 'react';
import MuiToggleButton from '@mui/material/ToggleButton';

import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Controller } from 'react-hook-form';

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

daysbutton: {

},

ToggleButtonGroup: {
  color: '#216194',
  
  

},

})


                      

const ToggleButton = styled(MuiToggleButton)(({ selectedColor }) => ({

'&:hover': {
  backgroundColor: '#C6D9E7'
},

width: '374px',
color: '#216194',                   
height: '33px',
backgroundColor: '#f1f6fd',
textTransform: 'none',
color: '#216194',
margin: '4px 0 8px 0.1px',
padding: '8px 24.9px 8px 24.9px',
textTransform: 'none',
borderColor: '#fff',
fontWeight: 'normal',
fontFamily: 'Roboto',
fontSize: '16px',
    '&.Mui-selected, &.Mui-selected:hover': {
      color: '#ffffff',
      
      backgroundColor: selectedColor,
    },
  }));

  

  const theme = createTheme({
    palette: {
      text: {
        primary: '#fff',
      },
    },
  });
  

const DayPicker = ({
    name,
    control,
    options,
    rules,
    ...props
    

    }) => {
      
const classes = useStyles();
    return (
      
        <div>
            <Controller
                control={control}
                name={name}
                defaultValue={[]}
                rules={rules}
                render={({ field }) => (
                    
    <ThemeProvider theme={theme}>
                    <ToggleButtonGroup 
                    
                    className={classes.ToggleButtonGroup}
                    
                        value={field.value} 
                        onChange={(e, data) => field.onChange(data)}
                        orientation='vertical'
                        exclusive={false}

                       
                    >
                        {options.map((option) => (
                            <ToggleButton key={option} value={option}  
                            
                    selectedColor="#216194" className={classes.daysbutton}

                            >
                                {option}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                    </ThemeProvider>
                )}
                {...props}
            />
        </div>
    )
}

export default DayPicker;