import React, { useState } from 'react';
import {
  Button,
  Grid,
  Typography,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';

import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box } from '@mui/material';

import { Calendar, utils } from '@hassanmojab/react-modern-calendar-datepicker';

const DialogPage1 = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <DialogContent>
        <Typography
        style={{
          marginTop: 32,
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "21px",
  textAlign: "center",
  color: "#BAB9B9"
        }}>The drug(s) listed below will be<br></br>suspended. Please inform the user<br></br>
       about this.</Typography>
       <Typography
        style={{
          marginTop: 32,
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: "21px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  color: "#969696",
  flex: "none",
  order: 0,
  flexGrow: 0,
  
  justifyContent: 'center'
        }}>Inside Kindo</Typography>
        <Grid item container
        direction='row' 
        style={{
          justifyContent: 'center',
          marginTop: 24,
          
        }}>
        <Typography
        style={{
          
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  color: "#BAB9B9",
  flex: "none",
  order: 0,
  flexGrow: 0,
  
  margin: '0px -10px 0px 0px',
        }}>Pandol(1000 mg)</Typography>
        
        <Typography
        style={{
          
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  margin: '0px 0px 0px 40px',
  lineHeight: "19px",
  color: "#BAB9B9",
  flex: "none",
  order: 0,
  flexGrow: 0,
        }}>Canister ID: A12B34</Typography>
        </Grid>
        
        <Grid item container
        direction='row'
        style={{
          justifyContent: 'center',
          marginTop: 24,
          
        }}
         >
        <Typography
        style={{
          
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  color: "#BAB9B9",
  flex: "none",
  order: 0,
  flexGrow: 0
        }}>Vitamin D(25 mcg)</Typography>
        
        <Typography
        style={{
          
          fontFamily: "'Roboto'",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "19px",
          color: "#BAB9B9",
          
  margin: '0px 0px 0px 40px',
          flex: "none",
          order: 0,
          flexGrow: 0
                }}>Canister ID: A17822</Typography>
        </Grid>
        <Typography
        style={{
          marginTop: 32,
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: "21px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  color: "#969696",
  flex: "none",
  order: 0,
  flexGrow: 0,
  
  justifyContent: 'center'
        }}>Outside Kindo</Typography>
        
        <Grid item container
        direction='row' 
        style={{
          justifyContent: 'center',
          marginTop: 24,
          
        }}>
        <Typography
        style={{
          fontFamily: "'Roboto'",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "19px",
          color: "#BAB9B9",
          
          flex: "none",
          order: 0,
          flexGrow: 0,
        }}>Umeclidinium bromide(100 mg)</Typography>
       
        
        </Grid>

        <Grid
       >
        <DialogActions
         style={{
          justifyContent: 'center',
          marginTop: 54,
          }}>
          <Button style={{
            
  background: "#F3F8FE",
  textTransform: 'none',
  border: "2px solid #216194",
  color: '#216194',
  borderRadius: "16px",
  
  width: '80px',
  height: '42px',
          }} onClick={handleCloseDialog}>Quit</Button>
          <Button onClick={handleCloseDialog} autoFocus
          style={{
            width: '80px',
            height: '42px',
  background: "#216194",
  borderRadius: "16px",
  textTransform: 'none',
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  textAlign: "center",
  color: "#FFFFFF"
          }}>
            Next
          </Button>
        </DialogActions>
        </Grid>
      
      {/* Add your content for page 1 */}
    </DialogContent>
  );
};


const DialogPage2 = ({ setSelectedDate }) => {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleNext = () => {
    setSelectedDate(selectedDay);
  };

  return (
    <DialogContent>
         <Typography
      style={{
        
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "21px",
  textAlign: "center",
  color: "#BAB9B9"
      }}>Please select the date until which the<br></br>drug(s) should be suspended.</Typography>
   <Grid
   style={{
    margin: '0px 0px 0px 20px'
   }}>
      <Calendar value={selectedDay} onChange={setSelectedDay} colorPrimary="#216194" />
      </Grid>
      <DialogActions>
        <Button onClick={handleNext}>Next</Button>
      </DialogActions>
    </DialogContent>
  );
};

const DialogPage3 = ({ selectedDate }) => {
  
  const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));
  return (
    <DialogContent>
      
      <Typography
      style={{
        
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "21px",
  textAlign: "center",
  color: "#BAB9B9"
      }}>The drug(s) will be suspended until </Typography>
      <Typography
      style={{
        
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "18px",
  lineHeight: "21px",
  textAlign: "center",
  color: "#BAB9B9"
      }}>{selectedDate ? selectedDate.toString() : 'None'}</Typography>
         <LocalizationProvider dateAdapter={AdapterDayjs}>              
          <StaticTimePicker           
          value={value}
          onChange={(newValue) => setValue(newValue)} />          
    </LocalizationProvider>
         
    </DialogContent>
  );
};

const MyDialog = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const renderDialogContent = () => {
    switch (currentPage) {
      case 1:
        return <DialogPage1 handleCloseDialog={handleCloseDialog} />;
      case 2:
        return <DialogPage2 setSelectedDate={setSelectedDate} />;
      case 3:
        return <DialogPage3 selectedDate={selectedDate ? ` ${selectedDate.day.toString().padStart(2, '0')}/${selectedDate.month.toString().padStart(2, '0')}/${selectedDate.year}` : ''} />;
      default:
        return null;
    }
  };

  return (
    <Grid container item direction="column">
      <Button onClick={handleOpenDialog}>Open Dialog</Button>

      <Dialog open={openDialog} onClose={handleCloseDialog}
       PaperProps={{
        style: {
      
          width: '416px',
          height: '591px',
        borderRadius: '16px',
        
    boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)" ,
        },
      }}>
        {/* Dialog content */}
        <DialogTitle
        style={{
          textAlign: 'center',
          marginTop: 31,
          
  textAlign: "center",
  color: "#216194",  
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "18px",
        }}>Suspend drug</DialogTitle>
        {renderDialogContent()}
        <DialogActions>
          {currentPage > 1 && <Button onClick={handlePreviousPage}>Back</Button>}
          {currentPage < 3 ? (
            <Button onClick={handleNextPage}>Next</Button>
          ) : (
            <Button onClick={handleCloseDialog}>Finish</Button>
          )}
        </DialogActions>
      </Dialog>

      {/* Display selected date outside the dialog */}
      <Typography> {selectedDate ? ` ${selectedDate.day.toString().padStart(2, '0')}/${selectedDate.month.toString().padStart(2, '0')}/${selectedDate.year}` : ''}</Typography>
    </Grid>
  );
};

export default MyDialog;
