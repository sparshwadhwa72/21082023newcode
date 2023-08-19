import React from 'react';
import MuiToggleButton from '@mui/material/ToggleButton';

import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Controller } from 'react-hook-form';

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

daysbutton: {

margin: '4px 0 8px 0.1px',
padding: '8px 24.9px 8px 24.9px',
textTransform: 'none',
fontWeight: 'normal',
fontFamily: 'Roboto',
fontSize: '16px',
},

ToggleButtonGroup: {
  color: '#216194'

},

})


                      

const ToggleButton = styled(MuiToggleButton)(({ selectedColor }) => ({



    '&.Mui-selected, &.Mui-selected:hover': {
      color: '#216194',
      
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
                     
                    </ToggleButtonGroup>
                    </ThemeProvider>
                )}
                {...props}
            />
        </div>
    )
}

export default DayPicker;