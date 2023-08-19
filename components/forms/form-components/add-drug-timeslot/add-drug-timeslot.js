import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button, Input, TextField } from '@material-ui/core';
import { TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Controller } from 'react-hook-form';
import '@fontsource/roboto';


import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import Box from '@mui/material/Box';
import useStyles from '../text-input/text-input.styles';
import { InputAdornment } from "@material-ui/core";
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import Icon from '@material-ui/core/Icon';
import IconButton from '@mui/material/IconButton';
import { red } from "@material-ui/core/colors";
import Tooltip from '@mui/material/Tooltip';
import { color } from '@mui/system';
import { lime } from "@material-ui/core/colors";
import Chip from '@mui/material/Chip';


import Avatar from "@material-ui/core/Avatar";


const defaultTheme = createTheme({

   
    palette: {
        primary: {
            main: '#216194',
          },


    
        
        text: {
            primary: '#216194',
           
          },
    },
  });


  

const AddDrugTimeslot = ({
    value,
    onChange,
    label
    }) => {
    const [times, setTimes] = useState(value);
    
  const [timeSlots, setTimeSlots] = useState([]);

  
  const handleAddTimeSlot = (time) => {
    setTimeSlots((prevSlots) => [...prevSlots, time]);
    setSelectedTime(null);
  };

  
  const [selectedTime, setSelectedTime] = useState(null);
    const [timePickerOpen, setTimePickerOpen] = useState(false);
    
const [hashtag, setHashtag] = useState("")

const [numberOfHashtags, setNumberOfHashtags] = useState(0)
const [arrayOfHashtags, addHashtag] = useState([])
   
    
    const handleDelete = (time) => () => {
        addHashtag((arrayOfHashtags) =>
          arrayOfHashtags.filter((hashtag) => hashtag !== time)
        )
      }


    


    //Remove this
    const numDrugsPlaceholder = 4;

  

    useEffect(() => {
        onChange(times);

    }, [times]);

    const addTimeSlot = () => {
        setTimePickerOpen(true);

        if (numberOfHashtags < 300) {
            setNumberOfHashtags(numberOfHashtags + 1)
            addHashtag((arrayOfHashtags) => arrayOfHashtags.concat(hashtag))
          } else {
            console.log("Too much hashtags")
          }
    }

    const handleAcceptTime = (time) => {
        setTimes(times => [...times, {'time': time, 'quantity': 0}]);
        setTimePickerOpen(false);
    }

    const handleQuantityChange = (time, quantity) => {
        let newTimes = times;
        for (const timing of newTimes) {
            if (timing['time'] === time) {
                timing['quantity'] = quantity;
            }
        }
        setTimes(newTimes);
    }

    const Hashtags = arrayOfHashtags.map((time) => (
        <Chip
        style={{
            width: '100px',
            height: '100px',
            backgroundColor: '#fff',
            
        }}
       
          avatar={<Avatar
            style={{
                height: '80px',
                width: '416px',
                borderRadius: '16px',
                boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
                padding: '16px 76px 16px 20px',

                backgroundColor: '#fff',
                '@media(max-Width: 390px)' : {
                  width: '94%'
                },
            }}>  {times.map((time) => (
            <Grid key={time['time']} item
         >
                <TimeslotBox
                 time={time['time']}
                  numDrugs={numDrugsPlaceholder}
                   onQuantityChange={handleQuantityChange}/>
            </Grid>
        ))}
          </Avatar>}
          onDelete={handleDelete(time)}
         
        />
      ))

    return (
        <Grid container item direction='column'>
             
            <Grid item>
          
                <Typography align='center'
                style={{
                    width: '500px',
                    height: '28px',
                    margin: '30px 0px 0px -90px',
                    fontfamily: 'Roboto',
                    fontSize: '24px',
                    fontWeight: 'Bold',
                    fontstretch: 'normal',
                    fontstyle: 'normal',
                    lineheight: '1.25',
                    letterspacing: 'normal',
                    textalign: 'left',
                    color: '#216194',
                }}>{label}</Typography>
                
      <br></br>

                <Typography align='center'
                style={{
                    width: '522px',
                    height: '68px',
                    margin: '0px 16px 16px -20px',
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontweight: 'normal',
                    fontstretch: 'normal',
                    fontstyle: 'normal',
                    lineheight: '1.11',
                    letterspacing: 'normal',
                    textalign: 'left',
                    color: '#216194',
                    
                    }}
                    
                >Add the Selected drug to a existing time slots or create a new one.
                    </Typography>
           
                    <Typography
             style={{
                width: '522px',
                height: '68px',
                margin: '-57px 16px 16px 2px',
                fontFamily: 'Roboto',
                fontSize: '16px',
                fontweight: 'normal',
                fontstretch: 'normal',
                fontstyle: 'normal',
                lineheight: '1.11',
                letterspacing: 'normal',
                textalign: 'left',
                color: '#216194',
                
                }}>   Don't forget to assign a quantity to it! </Typography>
            </Grid>
            <Grid item container direction='row'>
                
            <Grid item><>
     
      <Box 
       sx={{ flexDirection: 'column',
       
       display: 'flex',
       alignItems: 'flex-end',
       p: 1,
       m: 1, }} 
       style={{
        margin: '0px 0px 0px 0px'
       }}
         justifyContent="center"
       
       mt={2}>
                    <ThemeProvider theme={defaultTheme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <TimePicker
            value={selectedTime}
            autoOk
            onChange={(time) => handleAddTimeSlot(time)}
            open={Boolean(selectedTime)}
            onClose={() => setSelectedTime(null)}
            TextFieldComponent={() => (
              
              <Button 
              style={{
                height: '80px',
                width: '416px',
                fontSize: '18px',
                borderRadius: '16px',
                fontWeight: 400,
                boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.1)',
                padding: '20px 76px 16px 50px',
                backgroundColor: '#fff',
                textalign: 'center',
                textTransform: 'none',
                color: '#bab9b9',
                margin: '-50px 0px 0px 0px',
               
                '@media(max-Width: 390px)' : {
                  width: '26%'
                }
            }} onClick={() => setSelectedTime(new Date())}>
               + Add time slot
              </Button>
            )}
          />
        </MuiPickersUtilsProvider>
        </ThemeProvider>
        <Grid item>
                    <div
                    style={{
                        width: '42px',
                        height: '24px',
                        margin: '36px 66px 12px -412px',
                        fontFamily: 'Roboto',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        fontstretch: 'normal',
                        fontstyle: 'normal',
                        lineheight: '1.11',
                        letterspacing: 'normal',
                        textalign: 'left',
                        color: '#216194',
                    }}>Time</div>
                </Grid>
                <Tooltip title="The number of pills" placement="top-start"
              >
             <IconButton 
            style={{ margin: '-40px -90px 0px 435px' }}
            >
            <HelpOutlineOutlinedIcon
            style={{
              color: '#fff',
              margin: '0px -90px 0px -515px',

  background: "#93BCD7",
  borderRadius: '30px',

            }} />
          </IconButton>
                     </Tooltip>
                <Grid item>
                    <div
                    style={{
                        width: '74px',
                        height: '24px',
                        margin: '-35px 15px 12px 0px',
                        fontfamily: 'Roboto',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        fontstretch: 'normal',
                        fontstyle: 'normal',
                        lineheight: '1.11',
                        letterspacing: 'normal',
                        textalign: 'left',
                        color: '#216194',
                    }}>Quantity</div>
                </Grid>
                
        {timeSlots.map((time, index) => (
        <TimeSlotBox key={index} time={time} onDelete={() => setTimeSlots((prevSlots) => prevSlots.filter((_, i) => i !== index))} />
      ))}
      </Box>
    </>
                
            </Grid>

            </Grid>
            
            <Grid item container direction='column'>
            <ThemeProvider theme={defaultTheme}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    {timePickerOpen && <TimePicker
                     autoOk
                      onChange={handleAcceptTime}
                       open={timePickerOpen}
                        ampm={true} 
                        variant='dialog'/>}
                </MuiPickersUtilsProvider>
                </ThemeProvider>
                
            </Grid>

        </Grid>
    )

}
function TimeSlotBox({ time, onDelete }) {
  const [selectedTime, setSelectedTime, onQuantityChange ] = useState(time);
  const [quantity, setQuantity] = useState(1);

  const handleDeleteClick = () => {
    setSelectedTime(null);
    onDelete();
  };

  const handleclick = () => {
    setQuantity(1);
  }

  const handleBlur = (e) => {
    if (parseInt(e.target.value) === 0) {
        setQuantity(4)
    }
  }
  const classes = useStyles();


  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
    
      style={{
        height: '80px',
        width: '416px',
        borderRadius: '16px',
        boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
        padding: '16px 76px 16px 20px',
        margin: '24px 0px 0px 0px',
        backgroundColor: '#fff',
        '@media(max-Width: 390px)' : {
          width: '94%'
        },
    
    }}>
        <>
          <IconButton 
            style={{ margin: '-40px -90px 0px -35px' }}
            onClick={handleDeleteClick}>
            <CancelOutlinedIcon
            style={{
              color: '#216194',
              backgroundColor: '#fff',
              borderRadius: '16px',
              
            }} />
          </IconButton>
          <Typography style={{ 
        width: '79px',
        height: '21px',
        flexGrow: 0,
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textAlign: 'center',
        color: '#216194',
        margin: '-25px 0px 0px 0px' }}>
            {time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
          </Typography>
          <Typography style={{   width: '125px',
                        height: '19px',
                        flexGrow: '0',
                        fontFamily: 'Roboto',
                        marginTop: 8,
                        fontSize: '16px',
                        
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        fontStyle: 'normal',
                        lineHeight: 'normal',
                        display: "flex",
                        
                       
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        color: '#bab9b9',
}}>4 Drugs Added</Typography>
          <Grid item>
         
             
              <Grid
              style={{
                margin: '-40px 0px 0px 310px',
                backgroundColor: '#216194',
                borderRadius: '16px',
                width: '60px',
                height: '40px',
             
            
              }}>
              <TextField
              InputProps={{
                disableUnderline: true,
                
              startAdornment: <InputAdornment position="start"></InputAdornment>
                
              } 
              }
              
          inputProps={{
            className: classes.textFieldInput3,
          }}
        value={value}
        placeholder='4'
        onChange={handleChange}
      />
              </Grid>
            
            
          </Grid>
        </>
          </Box>
  );
}



const TimeSlot = ({
    control,
    name,
    rules,
    label,
    //additionalStyles,
    ...props
    }) => {

    return (
        <Grid container>
            <Controller
                control={control}
                name={name}
                rules={rules}
                defaultValue={[]}
                render={({ field }) => (
                    <AddDrugTimeslot
                        value={field.value}
                        onChange={field.onChange}
                        label={label}
                    />
                )}
            {...props}
            />
        </Grid>
    )
}

export default TimeSlot;