import React from 'react';
import { Controller } from 'react-hook-form';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { isWidthUp, InputLabel,TextField } from '@material-ui/core';
import useStyles from './autocomplete-dropdown.styles';
import clsx from 'clsx';
import Paper from "@material-ui/core/Paper";
import Typography from '@mui/material/Typography';
import { red, green, blue } from '@mui/material/colors';
import { withStyles, createStyles } from "@material-ui/core/styles";
import { styled } from '@mui/material/styles';


const styles = styled(TextField)({
  '&:hover fieldset': {
    borderColor: 'grey',
  },  

})

const MAX_LENGTH = 10;


const CustomPaper = (props) => {
  return <Paper elevation={8} style={{borderRadius: '16px',
  width: '644px',
  fontFamily: 'Roboto',
  marginTop: -10,
  fontSize: '16px',
  color: '#216194',
  textAlign: 'center',

  '@media(max-Width: 390px)' : {
    width: '27%',
  },}} {...props} />;
};


const AutocompleteDropdown = ({
  autocompleteOptions,
  label,
  control,
  name,
  rules,
  additionalStyles,
  placeholder,
  ...props
}) => {
  const classes = useStyles();
  const [text, setText] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  React.useEffect(() => {
    // Set errorMessage only if text is equal or bigger than MAX_LENGTH
    if (text.length >= MAX_LENGTH) {
      setErrorMessage(
        "character limit 30"
      );
    }
  }, [text]);

  React.useEffect(() => {
    // Set empty erroMessage only if text is less than MAX_LENGTH
    // and errorMessage is not empty.
    // avoids setting empty errorMessage if the errorMessage is already empty
    if (text.length < MAX_LENGTH && errorMessage) {
      setErrorMessage("");
    }
  }, [text, errorMessage]);
  return (
    
          
    <div>
      <root>
        <Controller
        control={control}
        name={name}      
        defaultValue=""
        
        rules={rules}
        render={({ field }) => (
          <Autocomplete
            freeSolo
            autoSelect       
            closeIcon=""    
             
            includeInputInList
            options={autocompleteOptions}
            defaultValue=""
            onChange={(e, data) => field.onChange(data)}
            onBlur={field.onBlur}
            value={field.value}
           

            PaperComponent={CustomPaper}
            style={{ color: '#216194' }}
            
            className={clsx(additionalStyles, classes.textField)}
            
                
            
          
              
            renderInput={params => (
              <TextField     
               
                {...params}
                
        className={classes.root}
             
                placeholder={placeholder}
                label={label }
                error={text.length >= MAX_LENGTH}
               
                helperText={errorMessage}
                
      onChange={(e) => setText(e.target.value)}
      FormHelperTextProps={{
        className: classes.helperText
      }}
                
                
                fullWidth
                variant='outlined'
                
                
                //helperText="char limit 30"
         InputProps={{...params.InputProps,
          
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
          notched: false,
          
          className: classes.dropdownInput,

          disableUnderline: true}}
                  
                InputLabelProps={{
                  shrink: true, 
                      
                  
            className: classes.dropdownlabel,      
                       
                }}
                //style={{width:553}}
          
              />
            )}
          />
        )}
      />
      </root>

    </div>
  );
  
};

export default AutocompleteDropdown;
