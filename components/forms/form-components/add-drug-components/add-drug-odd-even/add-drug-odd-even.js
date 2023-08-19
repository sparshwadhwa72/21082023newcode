import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import DayPicker from '../../day-picker/day-picker2';
import TimeSlot from '../../add-drug-timeslot/add-drug-timeslot-oddeven-days';

import DropdownInput from '../../dropdown/dropdownpage2-disabled';


const AddDrugOddEven = ({ formMethods }) => {
  const options = ['Odd calendar day', 'Even calendar day'];
  const oddEven = formMethods.watch('oddEvenDays');

  return (

    
    <Grid item container direction="row"
    style={{
      width: '416px',
      height: '80px',
      margin: '15px 0px 0px 0px ',
      padding: '14px 20px ',
      boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.1)',
      backgroundColor: '#fff',
      borderRadius: '16px',
    }}>
      <Typography
      style={{
        width: '213px',
        height: '21px',
        flexGrow: '0',
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 'bold',

        fontStretch: 'normal',
       fontStyle: 'normal',
        lineHeight: 'normal',
       letterSpacing: 'normal',
        textAlign:'center',
        color: '#216194',
      }}
      >Odd/Even calender days?*</Typography>
    
      <Grid item
      >
        <DayPicker
          name={`oddEvenDays`}
          control={formMethods.control}
          options={options}
          rules={{ required: true }}
          shouldUnregister={true}
        />
      </Grid>

      {oddEven && oddEven.includes('Odd calendar day') && (
          <Grid item
          
         
        
        
         >
          <Typography
                          style={{
                            width: '205px',
                            height: '28px',
                            fontfamily: 'Roboto',
                            fontSize: '16px',
                            fontstretch: 'normal',
                            fontstyle: 'normal',
                            marginTop: 10,
                            lineheight: '1.25',
                            letterspacing: 'normal',
                            textalign: 'left',
                            color: '#216194',
                        }}>Odd calendar Days</Typography>
                        
          </Grid>
        )}
   
   {oddEven && oddEven.includes('Even calendar day') && (
          <Grid item
         
        
        
         >
          <Typography
                          style={{
                            width: '205px',
                            height: '28px',
                            fontfamily: 'Roboto',
                            fontSize: '16px',
                            fontstretch: 'normal',
                            fontstyle: 'normal',
                            lineheight: '1.25',
                            letterspacing: 'normal',
                            textalign: 'left',
                            color: '#216194',
                            margin: '11px 0px 0px -70px'
                        }}> , Even calendar Days</Typography>
                        
          </Grid>
        )}
   

      <Grid  container 
      direction="column"
     
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",

       

      }}
    
 
     >
      
      <br></br>
      
      <br></br>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <br></br>
      <br></br>
        {oddEven && oddEven.includes('Odd calendar day') && (
          <Grid item
         style={{
          
          margin: '-100px 0px 0px 280px',
         }}
        
        
         >
          <Typography
                          style={{
                            width: '205px',
                            height: '28px',
                            fontfamily: 'Roboto',
                            fontSize: '24px',
                            fontWeight: 'Bold',
                            fontstretch: 'normal',
                            margin: '0px 0px 0px -290px',
                            fontstyle: 'normal',
                            lineheight: '1.25',
                            letterspacing: 'normal',
                            textalign: 'left',
                            color: '#216194',
                        }}>Time and Quantity</Typography>
                        
                <Typography align='center'
                style={{
                    width: '522px',
                    height: '68px',
                    margin: '20px 16px 16px -310px',
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
                margin: '-57px 16px 16px -290px',
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
                        <br></br>
                        <Grid
                        container
                        xs
                        md={12}
                        item
                        
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          margin: '10px 0px 0px -300px'
                        }}
                        >
            <TimeSlot
            
              control={formMethods.control}
              name={`oddTimeslots`}
              rules={{}}
              shouldUnregister={true}
              label={`Odd calendar day`}
            />
            </Grid>
          </Grid>
        )}
        
        {oddEven && oddEven.includes('Even calendar day') && (
          <Grid item
          alignContent='flex-end'
          style={{
            
          margin: '-175px 0px 0px 460px'
          }}
         
          >
            <TimeSlot
              control={formMethods.control}
              name={`evenTimeslots`}
              rules={{}}
              shouldUnregister={true}
              label={`Even calendar day `}
            />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default AddDrugOddEven;
