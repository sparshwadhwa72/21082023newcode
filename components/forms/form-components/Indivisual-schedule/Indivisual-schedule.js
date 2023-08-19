import React, { useState } from 'react';
import { Container, Grid, Paper, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

import { Calendar, utils } from '@hassanmojab/react-modern-calendar-datepicker';
import { Button } from '@material-ui/core';
import { Dialog, DialogTitle,  DialogContent,  DialogActions,  DialogContentText}  from '@material-ui/core';
import useStyles from './indivisual-schedule-styles';
import {  IconButton  } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box } from '@mui/material';


const DailyPlanner = ({}) => {  

  const classes = useStyles();  
  const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));
  const [selectedDay, setSelectedDay] = useState(null); 
  const [selectedDay1, setSelectedDay1] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);  
  const [toggleButtonColor, setToggleButtonColor] = useState('light');
  const [currentPage, setCurrentPage] = useState(1);
    const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };  
  const [selectedDate2, setSelectedDate2] = useState(null);
  const handleNextPage2 = () => {    
    setSelectedDate2(selectedDay1);
    setCurrentPage(currentPage + 1);
  };
  const handleToggleButtonChange = (event, newColor) => {
    setToggleButtonColor(newColor);
  };
  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleManageSessionDispense = () => {
    setOpenDialog(true);
  };
  const [showLines, setShowLines] = useState(false);

  const handleClick1 = () => {
    setShowLines(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const scheduleData = [
    {
      day: 'Yesterday',
      tasks: 

      [ <Grid container>
        <Grid item container className={classes.Grid1}><Typography className={classes.HKT}>HKT (GMT +08:00)</Typography>
       
          <Typography className={classes.Today}>Today</Typography>
        </Grid>
          <Grid className={classes.Grid2}>
           
                      
            <Typography className={classes.Day}>26 May 2023, Friday</Typography>            
         <Grid className={classes.Grid6}>
                <Grid className={classes.Grid7}>
                <Typography className={classes.TobeTaken}>To be taken</Typography>
                <Typography className={classes.Time}>08:00 PM</Typography>
                <Typography className={classes.Medicine}>Vitamin D (ID: A12345), paracetamol (ID: A33234) and umeclidinium bromide (I ...</Typography>
                </Grid>                
            </Grid>                
            <Grid className={classes.Grid6}>
                <Grid className={classes.Grid8}>
                <Typography className={classes.TobeTaken}>Manual dispense session</Typography>
                <Typography className={classes.Time}>03:00 PM</Typography>
                <Typography className={classes.Medicine}>Vitamin D (ID: A12345), paracetamol (ID: A33234) and umeclidinium bromide (I ...</Typography>
                </Grid>                
            </Grid> 
            <Grid className={classes.Grid6}>
                <Grid className={classes.Grid7}>
                <Typography className={classes.TobeTaken}>To be taken</Typography>
                <Typography className={classes.Time}>08:00 PM</Typography>
                <Typography className={classes.Medicine}>Vitamin D (ID: A12345), paracetamol (ID: A33234) and umeclidinium bromide (I ...</Typography>
                </Grid>                
            </Grid> 
            
                      
            <Typography className={classes.Day}>27 May 2023, Friday</Typography>            
         <Grid className={classes.Grid6}>
                <Grid className={classes.Grid7}>
                <Typography className={classes.TobeTaken}>To be taken</Typography>
                <Typography className={classes.Time}>08:00 PM</Typography>
                <Typography className={classes.Medicine}>Vitamin D (ID: A12345), paracetamol (ID: A33234) and umeclidinium bromide (I ...</Typography>
                </Grid>                
            </Grid>    
            <Grid className={classes.Grid6}>
                <Grid className={classes.Grid7}>
                <Typography className={classes.TobeTaken}>To be taken</Typography>
                <Typography className={classes.Time}>08:00 PM</Typography>
                <Typography className={classes.Medicine}>Vitamin D (ID: A12345), paracetamol (ID: A33234) and umeclidinium bromide (I ...</Typography>
                </Grid>                
            </Grid>                
            
             </Grid>
                  </Grid>],
    },
    {
      day: 'Today',
      tasks: [<div 
        //style={{ overflowY: 'auto', maxHeight: '800px' }}
        >
           <Grid container>
          <Grid item container className={classes.Grid1}><Typography className={classes.HKT}>HKT (GMT +08:00)</Typography>
         
            <Typography className={classes.Today}>Today</Typography>
          </Grid>
            <Grid className={classes.Grid2}>
              <Typography className={classes.Day} >25 May 2023, Thursday</Typography>         
    
           <Grid className={classes.Grid3}>
          <Grid  className={classes.Grid4}>
          <Typography className={classes.Frequency}>Frequency changed </Typography>
          <Typography className={classes.Time}>01:00 PM</Typography>
          <Typography className={classes.Medicine}>Frequency for paracetamol (ID: A34348) is change from Everyday to Every N da ...</Typography>
          </Grid>                
      </Grid>  
      <div>
        
        <Grid className={classes.Grid5}>
        <Button
        style={{ textTransform: 'none'}}
          onClick={handleClick1}
        >
                    <Grid className={classes.Dispensed}>
                    <Typography className={classes.Frequency}>Dispensed on time</Typography>
                    <Typography className={classes.Time}>03:00 PM</Typography>
                    <Typography className={classes.Medicine}>Vitamin D (ID: A12345), paracetamol (ID: A33234) and umeclidinium bromide (I ...</Typography>
                    </Grid>     
                          
        </Button>
             
        </Grid>   
        
       
      </div>
   
                          
           <Grid className={classes.Grid5}>
                  <Grid  className={classes.Missed}>
                  <Typography className={classes.Frequency}>Missed</Typography>
                  <Typography className={classes.Time2}>06:00 PM</Typography>
                  <Typography className={classes.Medicine}>Vitamin D (ID: A12345), paracetamol (ID: A33234) and umeclidinium bromide (I ...</Typography>
                  </Grid>                
              </Grid>
                        
              <Typography className={classes.Day}>26 May 2023, Friday</Typography>            
           <Grid className={classes.Grid6}>
                  <Grid className={classes.Grid7}>
                  <Typography className={classes.TobeTaken}>To be taken</Typography>
                  <Typography className={classes.Time}>08:00 PM</Typography>
                  <Typography className={classes.Medicine}>Vitamin D (ID: A12345), paracetamol (ID: A33234) and umeclidinium bromide (I ...</Typography>
                  </Grid>                
              </Grid>                
              <Grid className={classes.Grid6}>
                  <Grid className={classes.Grid8}>
                  <Typography className={classes.TobeTaken}>Manual dispense session</Typography>
                  <Typography className={classes.Time}>03:00 PM</Typography>
                  <Typography className={classes.Medicine}>Vitamin D (ID: A12345), paracetamol (ID: A33234) and umeclidinium bromide (I ...</Typography>
                  </Grid>                
              </Grid> 
              {/* <Grid className={classes.Grid6}>
                  <Grid className={classes.Grid7}>
                  <Typography className={classes.TobeTaken}>To be taken</Typography>
                  <Typography className={classes.Time}>08:00 PM</Typography>
                  <Typography className={classes.Medicine}>Vitamin D (ID: A12345), paracetamol (ID: A33234) and umeclidinium bromide (I ...</Typography>
                  </Grid>                
              </Grid>                
           */}
               </Grid>
                    </Grid> </div>
      ],
    },
    {
      day: 'Tomorrow',
      tasks: [<Grid container>
        <Grid item container className={classes.Grid1}><Typography className={classes.HKT}>HKT (GMT +08:00)</Typography>
       
          <Typography className={classes.Today}>Today</Typography>
        </Grid>
          <Grid className={classes.Grid2}>
           
                      
            <Typography className={classes.Day}>26 May 2023, Friday</Typography>            
         <Grid className={classes.Grid6}>
                <Grid className={classes.Grid7}>
                <Typography className={classes.TobeTaken}>To be taken</Typography>
                <Typography className={classes.Time}>08:00 PM</Typography>
                <Typography className={classes.Medicine}>Vitamin D (ID: A12345), paracetamol (ID: A33234) and umeclidinium bromide (I ...</Typography>
                </Grid>                
            </Grid>                
            <Grid className={classes.Grid6}>
                <Grid className={classes.Grid8}>
                <Typography className={classes.TobeTaken}>Manual dispense session</Typography>
                <Typography className={classes.Time}>03:00 PM</Typography>
                <Typography className={classes.Medicine}>Vitamin D (ID: A12345), paracetamol (ID: A33234) and umeclidinium bromide (I ...</Typography>
                </Grid>                
            </Grid> 
            <Grid className={classes.Grid6}>
                <Grid className={classes.Grid7}>
                <Typography className={classes.TobeTaken}>To be taken</Typography>
                <Typography className={classes.Time}>08:00 PM</Typography>
                <Typography className={classes.Medicine}>Vitamin D (ID: A12345), paracetamol (ID: A33234) and umeclidinium bromide (I ...</Typography>
                </Grid>                
            </Grid> 
            
                      
            <Typography className={classes.Day}>27 May 2023, Friday</Typography>            
         <Grid className={classes.Grid6}>
                <Grid className={classes.Grid7}>
                <Typography className={classes.TobeTaken}>To be taken</Typography>
                <Typography className={classes.Time}>08:00 PM</Typography>
                <Typography className={classes.Medicine}>Vitamin D (ID: A12345), paracetamol (ID: A33234) and umeclidinium bromide (I ...</Typography>
                </Grid>                
            </Grid>    
            <Grid className={classes.Grid6}>
                <Grid className={classes.Grid7}>
                <Typography className={classes.TobeTaken}>To be taken</Typography>
                <Typography className={classes.Time}>08:00 PM</Typography>
                <Typography className={classes.Medicine}>Vitamin D (ID: A12345), paracetamol (ID: A33234) and umeclidinium bromide (I ...</Typography>
                </Grid>                
            </Grid>                
            
             </Grid>
                  </Grid>],
    },
  ];
  
  const SchedulePage = ({ day }) => {
    const schedule = scheduleData.find(item => item.day === day);
  
    return (
      <div
     >
        <h1 className={classes.Today}>{day}</h1>
        
          {schedule.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        
      </div>
    );
  };
  const [currentPage1, setCurrentPage1] = useState(0);
  const totalPages = scheduleData.length;

  const handlePrevPage = () => {
    setCurrentPage1(currentPage => (currentPage === 0 ? currentPage : currentPage - 1));
  };

  const handleNextPage1 = () => {
    setCurrentPage1(currentPage1 => (currentPage1 === totalPages - 1 ? currentPage1 : currentPage1 + 1));
  };
  return ( 
    
<Container className={classes.Container}  >
  
<Box sx={{ display: 'flex', justifyContent: 'center' }}>
<IconButton onClick={handlePrevPage} disabled={currentPage1 === 0} style={{
  margin: '-580px -200px 0px 200px'
}}>
        <ArrowBack />
      </IconButton>
      <SchedulePage day={scheduleData[currentPage1].day} />
      <IconButton onClick={handleNextPage1} disabled={currentPage1 === totalPages - 1}
      style={{
        margin: '-580px 600px 10px -100px'
      }}>
        <ArrowForward />
      </IconButton>
    
    </Box>
      <Grid container>   
      </Grid> 
      <Grid className={classes.Calander}>
      <Calendar  
      value={selectedDay} onChange={setSelectedDay} colorPrimary="#216194" />
      <Button className={classes.ManageButton}  onClick={handleManageSessionDispense}>
        <Typography  className={classes.ManageSession} >Manage session dispense</Typography>
      </Button>      
      <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          PaperProps={{
            style: {
              width: '416px',
              height: '591px',
              borderRadius: '16px',
              boxShadow: '0px 15px 30px rgba(33, 97, 148, 0.1)',
            },
          }}>
          {currentPage === 1 && (
            <>
              <DialogTitle className={classes.DialogTitle}>Dispense by session</DialogTitle>
              <DialogContent>
                <Typography className={classes.DialogText1}>You have selected the following session <br></br> for manual dispense:</Typography>
               <Typography className={classes.DrugName}>Drug name</Typography>
               <Typography className={classes.Quantity}>Quantity</Typography>
              </DialogContent>
              <DialogActions  className={classes.DialogActions}>
                <Button className={classes.Quit} onClick={handleCloseDialog}>Quit</Button>
                
                <Button  className={classes.Next} onClick={handleNextPage}>Next</Button>
              </DialogActions>
            </>
          )}       
{currentPage === 2 && (
            <>
              <DialogTitle className={classes.DialogTitle}>Dispense by session </DialogTitle>
              <DialogContent>                
              <Typography className={classes.DialogText1}>How would you like to dispense
               <br></br>  the session? </Typography>               
                <DialogContentText>
                  <ToggleButtonGroup
                    value={toggleButtonColor}
                    exclusive
                    onChange={handleToggleButtonChange}
                    style={{ marginTop: '32px' }}>
                    <ToggleButton
                      value="light"
                      style={{
                        backgroundColor: toggleButtonColor === 'light' ? '#C6D9E7' : '#216194',
                        color: toggleButtonColor === 'light' ? '#216194' : '#fff',
                      }} className={classes.DispenseNow}> Dispense now</ToggleButton>
                    <ToggleButton
                      value="dark"
                      style={{
                        backgroundColor: toggleButtonColor === 'dark' ? '#216194' : '#F1F6FD',
                        color: toggleButtonColor === 'dark' ? '#ffffff' : '#216194',                        
  margin: '49px 0px 0px -294px'
                      }}className={classes.ScheduleDispense}                   >
                     Schedule a dispense
                    </ToggleButton>
                  </ToggleButtonGroup>
                </DialogContentText>
              </DialogContent>
              <DialogActions className={classes.DialogActions}>
                
              <Button className={classes.Quit} onClick={handlePreviousPage}>Back</Button>
                
                <Button className={classes.Next} onClick={handleNextPage}>Next</Button>
              </DialogActions>
            </>
          )}
           {currentPage === 3 && (
            <>
              <DialogTitle className={classes.DialogTitle}>Dispense by session</DialogTitle>
              <DialogContent>
                <DialogContentText>
                <Typography className={classes.DialogText1}>Please select the date for the <br></br>scheduled dispense.</Typography>
               <Grid style={{ margin: '0px 0px 0px 25px' }}>                
      <Calendar value={selectedDay1} onChange={setSelectedDay1} colorPrimary="#216194" />
      </Grid>
                </DialogContentText>
              </DialogContent>             
              <DialogActions className={classes.DialogActions}>
                
              <Button className={classes.Quit} onClick={handlePreviousPage}>Back</Button>                
                <Button className={classes.Next} onClick={handleNextPage2}>Next</Button>
              </DialogActions>
            </>
          )}
          {currentPage === 4 && (
            <>
              <DialogTitle className={classes.DialogTitle}>Dispense by session</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  
            <Typography className={classes.SelectTime}>Please select the time for the drug to </Typography>
            
            <Typography className={classes.Bedispsensedon}>be dispensed on</Typography>
            <Typography className={classes.SelectedDate}>
              {selectedDate2 ? (
                <>
                  {selectedDate2.day}/{selectedDate2.month}/{selectedDate2.year}
                </>
              ) : (
                'None'
              )}
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>              
          <StaticTimePicker           
          value={value}
          onChange={(newValue) => setValue(newValue)} />          
    </LocalizationProvider>
                </DialogContentText>
              </DialogContent>
              <DialogActions className={classes.DialogActions}>
                <Button className={classes.Quit} onClick={handlePreviousPage}>Back</Button>
                <Button className={classes.Next} onClick={handleCloseDialog}>Confirm</Button>
              </DialogActions>
            </>
          )}          
        </Dialog>
        {showLines && (
        <div >
       
       <Grid className={classes.Grid9}>
      <Typography className={classes.Dispensedontime}> Dispensed on time</Typography>
    </Grid>
    <Grid className={classes.Grid10}>
        <Typography className={classes.Time3}>08:00 Tuesday, 09/05/2023</Typography>
        <Grid item container direction="row">
        <Typography className={classes.Editor}>Editor:
        </Typography>
        <Typography className={classes.EditorName}> Chan Tai Man</Typography> </Grid>
        <Grid item container direction="row">
        <Typography className={classes.DateofEdit}>Date of edit: 
        </Typography>
        <Typography className={classes.DateofEdit2}> 1 January 2023</Typography> </Grid>
        <Grid item container direction="row">
        <Typography className={classes.DateofEdit}>Drug: </Typography>
        <Typography className={classes.DateofEdit2}>Vitamin D (ID: A12345)  x 1,<br></br>
        paracetamol (ID: A33234) x 2,<br></br> umeclidinium bromide (ID:<br></br>
        A34224) x 2 inhales</Typography> </Grid>
        <Grid item container direction="row">
        <Typography className={classes.DateofEdit}>Description: </Typography>
        <Typography  className={classes.DateofEdit2}> All drugs are dispensed on <br></br>time</Typography>  </Grid>
    </Grid>
    

        </div>
      )}
      </Grid>   
    
    </Container>
    
  );
};

export default DailyPlanner;
