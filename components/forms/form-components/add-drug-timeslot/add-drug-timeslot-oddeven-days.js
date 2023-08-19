import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import TimeslotBox from './timeslotbox-oddeven-days';
import { Controller } from 'react-hook-form';
import Icon from '@material-ui/core/Icon';
import IconButton from '@mui/material/IconButton';
import { red } from "@material-ui/core/colors";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
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
    const [timePickerOpen, setTimePickerOpen] = useState(false);
    
const [hashtag, setHashtag] = useState("")

const [numberOfHashtags, setNumberOfHashtags] = useState(0)
const [arrayOfHashtags, addHashtag] = useState([])
   
    
    const handleDelete = (h) => () => {
        addHashtag((arrayOfHashtags) =>
          arrayOfHashtags.filter((hashtag) => hashtag !== h)
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

    const Hashtags = arrayOfHashtags.map((h) => (
        <Chip
        style={{
            width: '100px',
            height: '100px',
            marginBottom: -690,
            color: 'red',
        }}
       
          avatar={<Avatar
            style={{
                height: '80px',
                width: '416px',
                borderRadius: '16px',
                boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
                padding: '16px 76px 16px 20px',
                margin: '-70px 0px 0px 370px',
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
          label={h}
          onDelete={handleDelete(h)}
         
        />
      ))

    return (
        <Grid container item direction='column'>
             
            <Grid item>
                <Typography align='center'
                style={{
                    width: '205px',
                    height: '28px',
                    margin: '-50px 0px 0px 0px',
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
                
      {numberOfHashtags > 0 ? Hashtags : ""}

                <Typography align='center'
                style={{
                    width: '522px',
                    height: '68px',
                    margin: '20px 16px 16px -20px',
                    fontFamily: 'Roboto',
                    fontSize: '0px',
                    fontweight: 'normal',
                    fontstretch: 'normal',
                    fontstyle: 'normal',
                    lineheight: '1.11',
                    letterspacing: 'normal',
                    textalign: 'left',
                    color: '#fff',
                    
                    }}
                    
                >A
                    </Typography>
                    <Typography
             style={{
                width: '522px',
                height: '68px',
                margin: '-97px 16px 16px 0px',
                fontFamily: 'Roboto',
                fontSize: '16px',
                fontweight: 'normal',
                fontstretch: 'normal',
                fontstyle: 'normal',
                lineheight: '1.11',
                letterspacing: 'normal',
                textalign: 'left',
                color: '#fff',
                
                }}>   ! </Typography>
            </Grid>
            <Grid item>
                <Button style={{
                    height: '80px',
                    width: '416px',
                    fontSize: '18px',
                    borderRadius: '16px',
                    margin: '-37px 0px 0px 0px',
                    fontweight: 'normal',
                    boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.1)',
                    padding: '20px 76px 16px 50px',
                    backgroundColor: '#fff',
                    textalign: 'center',
                    textTransform: 'none',
                    color: '#bab9b9',
                   
                    '@media(max-Width: 390px)' : {
                      width: '26%'
                    }
                }} onClick={addTimeSlot}> +Add time slot</Button>
                
            </Grid>
            <Grid item container direction='row'
            style={{
                width: '400px'
            }}>
                <Grid item>
                    <div
                    style={{
                        width: '42px',
                        height: '24px',
                        margin: '26px 66px 12px 12px',
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
            <Button
              style={{
                width: '22px',
height: '22px',
margin: '30px 15px 12px 80px',
borderRadius: '16px',
padding: '4px',
            }}>  
            <div>
  <img src={require('./newjpg.jpg').default}  />
</div>
            </Button>
          </Tooltip>
                <Grid item>
                    <div
                    style={{
                        width: '54px',
                        height: '24px',
                        margin: '26px 15px 12px 0px',
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