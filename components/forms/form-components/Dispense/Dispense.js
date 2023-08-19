import React, { useState } from 'react';
import {  Button,  Grid,FormControlLabel, Checkbox,  Typography,  TextField,Dialog, DialogTitle,  DialogContent,  DialogActions,} from '@material-ui/core';
import { useFormContext } from 'react-hook-form';
import { Calendar, utils } from '@hassanmojab/react-modern-calendar-datepicker';
// import useStyles from './form-components/text-input/text-input.styles';
import { InputAdornment } from '@material-ui/core';
import Switch, { switchClasses } from '@mui/joy/Switch';
import useStyles from './Dispense-settings';
import Box from '@mui/material/Box';
import DateInput from '../date-picker/datepicker3';
import { Tabs, Tab , makeStyles} from '@material-ui/core';

// // const Dispense = ({  }) => {
// //   const { watch } = useFormContext();

// //   const [selectedDay, setSelectedDay] = useState(null);
  
// //   const classes = useStyles();

// //   const [openDialog, setOpenDialog] = useState(false); // State to control the dialog visibility
// //   const [currentPage, setCurrentPage] = useState(1); // State to track the current page of the dialog

// //   const handleDispenseClick = () => {
// //     setOpenDialog(true);
// //   };

// //   const handleDialogClose = () => {
// //     setOpenDialog(false);
// //     setCurrentPage(1);
// //   };
  

// //   const handleNextPage = () => {
// //     setCurrentPage((prevPage) => prevPage + 1);
// //   };


  
// //   const handleNext = () => {
// //     setSelectedDate(selectedDay);
    
// //     setCurrentPage((prevPage) => prevPage + 1);
// //   };

// //   const handlePreviousPage = () => {
// //     setCurrentPage((prevPage) => prevPage - 1);
// //   };
  
// //   const [selectedDate, setSelectedDate] = useState(null);

// //   return (
// //     <Grid container item direction="column">
// //       <br />
// //       <br />
// //       <br />
// //       <Grid item container direction="column">
// //         <Button
// //           style={{
// //             width: '416px',
// //             height: '80px',
// //             borderRadius: '16px',
// //             background: '#FFFFFF',
// //             boxShadow: '0px 15px 30px rgba(33, 97, 148, 0.1)',
// //             textAlign: 'center',
// //             fontFamily: 'Roboto',
// //             textTransform: 'none',
// //             fontStyle: 'normal',
// //             fontWeight: 700,
// //             fontSize: '24px',
// //             lineHeight: '28px',
// //             color: '#216194',
// //           }}
// //           onClick={handleDispenseClick}
// //         >
// //           Dispense now
// //         </Button>
// //         <Button
// //           style={{
// //             width: '416px',
// //             marginTop: 19,
// //             height: '80px',
// //             borderRadius: '16px',
// //             background: '#FFFFFF',
// //             boxShadow: '0px 15px 30px rgba(33, 97, 148, 0.1)',
// //             textAlign: 'center',
// //             fontFamily: 'Roboto',
// //             textTransform: 'none',
// //             fontStyle: 'normal',
// //             fontWeight: 700,
// //             fontSize: '24px',
// //             lineHeight: '28px',
// //             color: '#216194',
// //           }}
// //           onClick={handleDispenseClick}
// //         >
// //           Schedule a dispense
// //         </Button>
// //       </Grid>

// //       {/* Dialog */}
// //       <Dialog
// //         open={openDialog}
// //         onClose={handleDialogClose}
// //         PaperProps={{
// //           style: {
// //             width: '416px',
// //             height: '700px',
// //             borderRadius: '16px',
// //             boxShadow: '0px 15px 30px rgba(33, 97, 148, 0.1)',
// //           },
// //         }}
// //       >
// //         {currentPage === 1 && (
// //           <>
// //             <DialogTitle style={{ color: '#216194', textAlign: 'center',
// //           marginTop: 25, }}>
// //             Schedule dispense
// //             </DialogTitle>
// //             <DialogContent>
// //               <Typography
// //               style={{
                
// //   fontFamily: "'Roboto'",
// //   fontStyle: "normal",
// //   fontWeight: 400,
// //   fontSize: "18px",
// //   lineHeight: "21px",
// //   textAlign: "center",
// //   color: "#BAB9B9"
// //               }}>Please select the date for the<br></br> scheduled remote dispense.</Typography>
// //               <Grid
// //               style={{
// //                 margin: '0px 0px 0px 25px'
// //               }}>
                
// //       <Calendar value={selectedDay} onChange={setSelectedDay} colorPrimary="#216194" />
// //       </Grid>

// //             </DialogContent>
// //             <DialogActions style={{ justifyContent: 'center', marginBottom: 32 }}>
// //               <Button
// //                 style={{
// //                   color: '#216194',
// //                   borderColor: '#216194',
// //                   borderRadius: '16px',
// //                   borderWidth: '2px',
// //                   backgroundColor: '#f1f6fd',
// //                   textTransform: 'none',
// //                   width: '80px',
// //                   height: '42px',
// //                 }}
// //                 variant="outlined"
// //                 onClick={handleDialogClose}
// //               >
// //                 Quit
// //               </Button>
// //               <Button
// //                 style={{
// //                   borderRadius: '16px',
// //                   color: '#fff',
// //                   backgroundColor: '#216194',
// //                   textTransform: 'none',
// //                   width: '80px',
// //                   height: '42px',
// //                 }}
// //                 variant="contained"
// //                 onClick={handleNext}
// //               >
// //                 Next
// //               </Button>
// //             </DialogActions>
// //           </>
// //         )}

// // {currentPage === 2 && (
// //         <>
// //           <DialogTitle style={{ color: '#216194', textAlign: 'center' ,
// //          marginTop: 31}}>
// //            Schedule dispense
// //           </DialogTitle>
// //           <DialogContent>
// //             <Typography
// //             style={{
              
// //   fontFamily: "'Roboto'",
// //   fontStyle: "normal",
// //   fontWeight: 400,
// //   fontSize: "18px",
// //   lineHeight: "21px",
// //   textAlign: "center",
  
// //   color: '#BAB9B9',
// //             }}>Please select the time for the drug to </Typography>
            
// //             <Typography
// //             style={{
              
// //   fontFamily: "'Roboto'",
// //   fontStyle: "normal",
// //   fontWeight: 400,
// //   fontSize: "18px",
// //   lineHeight: "21px",
// //   textAlign: "left",
  
// //   color: '#BAB9B9',
// //   marginLeft: 70,
// //             }}>be dispensed on</Typography>
// //             <Typography
// //               style={{
// //                 fontFamily: "'Roboto'",
// //                 fontStyle: 'normal',
// //                 fontWeight: 'bold',
// //                 fontSize: '18px',
// //                 lineHeight: '21px',
// //                 textAlign: 'center',
// //                 color: '#BAB9B9',
// //                 margin: '-20px 0px 0px 130px'
// //               }}
// //             >
// //               {selectedDate ? (
// //                 <>
// //                   {selectedDate.day}/{selectedDate.month}/{selectedDate.year}
// //                 </>
// //               ) : (
// //                 'None'
// //               )}
// //             </Typography>
// //             </DialogContent>
// //             <DialogActions style={{ justifyContent: 'center', marginBottom: 32 }}>
// //               <Button
// //                 style={{
// //                   color: '#216194',
// //                   borderColor: '#216194',
// //                   borderRadius: '16px',
// //                   borderWidth: '2px',
// //                   backgroundColor: '#f1f6fd',
// //                   textTransform: 'none',
// //                   width: '80px',
// //                   height: '42px',
// //                 }}
// //                 variant="outlined"
// //                 onClick={handlePreviousPage}
// //               >
// //                 Back
// //               </Button>
// //               <Button
// //                 style={{
// //                   borderRadius: '16px',
// //                   color: '#fff',
// //                   backgroundColor: '#216194',
// //                   textTransform: 'none',
// //                   width: '80px',
// //                   height: '42px',
// //                 }}
// //                 variant="contained"
// //                 onClick={handleNextPage}
// //               >
// //                 Next
// //               </Button>
// //             </DialogActions>
// //           </>
// //         )}

// //         {currentPage === 3 && (
// //           <>
// //             <DialogTitle style={{ color: '#216194', textAlign: 'center' ,
// //           marginTop: 31}}>
// //               Schedule dispense
// //             </DialogTitle>
// //             <DialogContent>
// //               <Typography
// //               style={{
                
// //   fontFamily: "'Roboto'",
// //   fontStyle: "normal",
// //   fontWeight: 400,
// //   fontSize: "18px",
// //   lineHeight: "21px",
// //   textAlign: "center",
// //   color: "#BAB9B9"
// //               }}>Please enter the quantity of drug to be dispensed on </Typography>
// //               <Typography
// //               style={{
// //                 fontFamily: "'Roboto'",
// //                 fontStyle: 'normal',
// //                 fontWeight: 'bold',
// //                 fontSize: '18px',
// //                 lineHeight: '21px',
// //                 textAlign: 'center',
// //                 color: '#BAB9B9',
// //                 margin: '-20px 0px 0px 130px'
// //               }}
// //             >
// //               {selectedDate ? (
// //                 <>
// //                   {selectedDate.day}/{selectedDate.month}/{selectedDate.year}
// //                 </>
// //               ) : (
// //                 'None'
// //               )}
// //             </Typography>
// //             <TextField
// //             autoFocus
// //             margin="dense"
            
// //             id="name"
// //             placeholder='1'
           
// //             style={{
// //               backgroundColor: '#216194',
// //               color: '#fff',
// //               borderRadius: '16px',
// //               width: '60px',
// //               height: '40px',
// //               alignContent: 'center',
// //               margin: '10px 0px 0px 130px',
              
// //             }}
// //           InputProps={{
// //             disableUnderline: true,
            

           
// //           }}
          
// //           inputProps={{
// //             className: classes.textFieldInput2,
// //           }}
            
       

// //             fullWidth
// //             variant="standard"
// //           />
// //           <Grid
// //           style={{
            
// //   margin: '-25px 0px 0px 200px'
// //           }}>
// //           <Typography
// //           style={{
            
// //   fontFamily: "'Roboto'",
// //   fontStyle: "normal",
// //   fontWeight: 400,
// //   fontSize: "16px",
// //   lineHeight: "19px",
// //   color: "#216194",
// //           }}>Unit</Typography>
// //           </Grid>


// //             </DialogContent>
// //             <DialogActions style={{ justifyContent: 'center', marginBottom: 32 }}>
// //               <Button
// //                 style={{
// //                   color: '#216194',
// //                   borderColor: '#216194',
// //                   borderRadius: '16px',
// //                   borderWidth: '2px',
// //                   backgroundColor: '#f1f6fd',
// //                   textTransform: 'none',
// //                   width: '128px',
// //                   height: '42px',
// //                 }}
// //                 variant="outlined"
// //                 onClick={handlePreviousPage}
// //               >
// //                 Back
// //               </Button>
// //               <Button
// //                 style={{
// //                   borderRadius: '16px',
// //                   color: '#fff',
// //                   backgroundColor: '#216194',
// //                   textTransform: 'none',
// //                   width: '128px',
// //                   height: '42px',
// //                 }}
// //                 variant="contained"
// //                 onClick={handleDialogClose}
// //               >
// //                 Confirm
// //               </Button>
// //             </DialogActions>
// //           </>
// //         )}
// //       </Dialog>
// //       <Grid
// //       style={{
        
// //   background: "#FFFFFF",
// //   boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
// //   borderRadius: "16px",
// //   width: '416px',
// //   height: '80px',
// //   marginTop: 150
// //       }}>
// //               <Typography
// //               style={{
// //                 fontFamily: "'Roboto'",
// //                 fontStyle: "normal",
// //                 fontWeight: 400,
// //                 fontSize: "16px",
// //                 lineHeight: "19px",
// //                 color: "#BAB9B9",
// //                 margin: '45px 0px 0px 20px'
// //               }}
// //             >
// //               {selectedDate ? (
// //                 <>
// //                   {selectedDate.day}/{selectedDate.month}/{selectedDate.year}
// //                 </>
// //               ) : (
// //                 'None'
// //               )}
// //             </Typography>
// //             </Grid>
// //     </Grid>
// //   );
// // };

// // export default Dispense;


const Settings = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const [checked, setChecked] = React.useState(false);
  
  const [checkedd, setCheckedd] = React.useState(false);

  const [secondaryChecked, setSecondaryChecked] = useState(false);

  
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  
  const [dropdownValue, setDropdownValue] = useState('');

  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  };
  const handleButtonClick = (newContent) => {
    setContent(newContent);
  };
  
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };




  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  
  const [password, setPassword] = useState('');
  
  const classes = useStyles();

  
  
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordChange = (event) => {
    setShowPassword(event.target.checked);
  };

  return (
    <div>
      <Tabs

      
style={{ borderBottom: 'none' }}

       value={selectedTab} onChange={handleTabChange} indicatorColor="red" textColor="primary" >
        <Tab 
      className={classes.Tab}
        label="Profile" />
        <Tab  className={classes.Tab} style={{ marginLeft: 16}} label="Security & Login" />
        <Tab  className={classes.Tab} style={{ marginLeft: 16}} label="Notification" />
        <Tab  className={classes.Tab} style={{ marginLeft: 16}} label="Subscription" />
        <Tab  className={classes.Tab} style={{ marginLeft: 16}} label="Billing History" />
        
        <Tab  className={classes.Tab} style={{ marginLeft: 16}} label="Payment Method" />
      </Tabs>

      <TabPanel value={selectedTab} index={0}>
      <Grid
            direction='row'>                
                <Typography className={classes.ReminderSong}>Set your own reminder song</Typography>
                <Typography className={classes.ReminderSong2}>To complete your reminder song setting, select the favourite one</Typography>
                <Grid className={classes.ReminderSongGrid}>
                  <Typography className={classes.Upload}>Upload</Typography></Grid>     
           <Grid className={classes.Button1Grid1}>
       <Typography className={classes.RecordSound} >Record Sound</Typography></Grid>
    <Grid className={classes.Button1Grid2}>
                    <Typography className={classes.DefaultSound}  >Default Sound</Typography>                 
                    <Grid  className={classes.Button1Grid3}>                    
    <Grid className={classes.Button1Grid4}>
        <Typography className={classes.Mute}>Mute</Typography> </Grid>    
    <Grid className={classes.Button1Grid4}>
        <Typography className={classes.Mute2}>Dew Drops</Typography> </Grid >
        <Grid className={classes.Button1Grid4}>
        <Typography className={classes.Mute2} >Ding-Dong</Typography></Grid>
    <Grid className={classes.Button1Grid4}>
        <Typography className={classes.Mute2}>Hangouts Message</Typography></Grid>    
    <Grid className={classes.Button1Grid4}>
        <Typography className={classes.Mute2}>Good News</Typography> </Grid>
        <Typography className={classes.DefaultSound}>Custom Sound (Max 3)</Typography>
        
    <Grid className={classes.Button1Grid4} >
        <Typography className={classes.Mute}>Available</Typography>
        </Grid>
        
    <Grid className={classes.Button1Grid4}>
        <Typography className={classes.Mute2}>Available</Typography>
        </Grid>        
    <Grid className={classes.Button1Grid4}>
        <Typography className={classes.Mute2}>Available</Typography></Grid>
        <Typography className={classes.DefaultSound}>Record Sound (Max 3)</Typography>
        
    <Grid className={classes.Button1Grid4}>
        <Typography className={classes.Mute}>Available</Typography>
        </Grid>
        
    <Grid className={classes.Button1Grid4}>
        <Typography className={classes.Mute2}>Available</Typography>  </Grid>        
    <Grid className={classes.Button1Grid4}>
        <Typography className={classes.Mute2}>Available</Typography> </Grid>
    </Grid>   
   </Grid>                
 </Grid>
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
      <Grid
            style={{
                marginTop: 31
            }}>
                <Typography className={classes.KindoPasscode}>
                Login setting and make protection to your account
                </Typography>
                <Typography className={classes.Kindoconnection2}>
                Set requirement to strengthen the security and detail login information</Typography>
                <Grid className={classes.Grid1new}
            >
                <Typography className={classes.ConnectionStatus}
              >Where you're logged in</Typography>
                <Typography  className={classes.KindoID}
                >The devices you logged in</Typography>
                <Grid>
                <Grid
                style={{
                  marginTop: '-10px'
                }}>
                <Button onClick={toggleExpansion} style={{ margin: '-40px 0px 0px 560px',
              
  background: "#F3F8FE",
  borderRadius: "16px"}}>
          {isExpanded ? '▲' : '▼'}
        </Button>
        {isExpanded && (
          <Grid className={classes.ExpandableGrid}>
          <Typography className={classes.ExpandedContent}>
          Mac | China, Hong Kong
          </Typography>          
          <Typography className={classes.ExpandedContent2}>
          Safari | Active
          </Typography>          
          <Typography className={classes.ExpandedContent3}>
          IPhone 6 | China, Hong Kong
          </Typography>          
          <Typography className={classes.ExpandedContent2}>
          Messenger | 4 hours ago
          </Typography>          
          <Typography className={classes.ExpandedContent3}>
          Samsung S10 | China, Hong Kong
          </Typography>          
          <Typography className={classes.ExpandedContent2}>
          Messenger | 4 hours ago
          </Typography>          
          </Grid>
        )}
      </Grid>
                </Grid>
            </Grid>    
            </Grid>
      </TabPanel>
      <TabPanel value={selectedTab} index={2}>
      <Grid>
      <Typography className={classes.Control}>Controls of Privilege</Typography>
      <Typography className={classes.ReminderSong2}>To manage the operation of authorized kin friend, you may control through the privilege</Typography>
  <Grid className={classes.CheckboxGrid}  >
    <Checkbox style={{ 
color: "#216194",}} className={classes.Checkbox1}/> <Typography className={classes.CheckboxText1}>Add drug</Typography> 
<Typography className={classes.CheckboxText2}>If the add drug function is suspend, the user won’t be allow to add any drug.</Typography>
 <Checkbox style={{ 
color: "#216194", }} className={classes.Checkbox2}/>  
 <Typography className={classes.CheckboxText1}>Edit drug info</Typography>
 <Typography className={classes.CheckboxText2}>If the edit drug info function is suspend, the user won’t be able to manage the drug information.</Typography>
   <Checkbox style={{ 
color: "#216194",}} className={classes.Checkbox2}/> 
   <Typography className={classes.CheckboxText1}>Suspend drug</Typography>
   
   <Typography className={classes.CheckboxText2}>If the suspend drug function is suspend, the user won’t be able to suspend any drug.</Typography>
      <Checkbox style={{ 
color: "#216194",}} className={classes.Checkbox2}/>  
      <Typography className={classes.CheckboxText1}>Delete drug</Typography>
   
   <Typography className={classes.CheckboxText2}>If the delete drug function is suspend, the user won’t be able to delete any drug.</Typography>
  
         </Grid>
      </Grid>
      </TabPanel>
      <TabPanel value={selectedTab} index={3}>
      <Grid container item direction='row'
          style={{
            height: '200px'
          }}>
            <Grid container item direction='column' style={{ margin: '30px 0px 0px 20px' }}>
              <br></br><br></br><br></br>
              <Grid container item direction='column' spacing={10}>
                <Typography className={classes.Suspend}>Suspend Kindo</Typography>
                
                <Typography className={classes.Suspend2}>To suspend the operation of Kindo system, you can turn it on or off.
                </Typography>
                <Grid  className={classes.Grid} style={{ marginTop: 32,}}>
                  <Typography 
                  style={{
                    margin: '16px 0px 0px 20px'
                  }} className={classes.Storedrugtext}>Kindo in operation</Typography>
                  <Grid style={{ margin: '-10px 0px 0px 263px' }}>
                    <Switch
                      checked={checked}
                      className={classes.Switch}
                      onChange={(event) => setChecked(event.target.checked)}
                      sx={(theme) => ({
                        '--Switch-thumbShadow': '0 3px 7px 0 rgba(0 0 0 / 0.12)',
                        '--Switch-thumbSize': '20px',
                        '--Switch-trackWidth': '52px',
                        '--Switch-trackHeight': '30px',
                        '--Switch-trackBackground': theme.vars.palette.background.level3,
                        [`& .${switchClasses.thumb}`]: {
                          transition: 'width 0s, left 0s',
                        },
                        '&:hover': {
                          '--Switch-trackBackground': theme.vars.palette.background.level3,
                        },
                        '&:active': {
                          '--Switch-thumbWidth': '32px',
                        },
                        [`&.${switchClasses.checked}`]: {
                          '--Switch-trackBackground': '#216194',
                          '&:hover': {
                            '--Switch-trackBackground': '#216194',
                          },
                        },
                      })}
                    />
      
                  </Grid>            
                  {checked && (
        <Grid  className={classes.Grid2}>
      <Typography className={classes.DatepickerLabel}>Suspend until (optional)</Typography>
      <DateInput></DateInput>
         
          
        </Grid>
      )}
      
      
      </Grid>
      
      </Grid>
      
      </Grid>
      
      
      </Grid>
      </TabPanel>
      <TabPanel value={selectedTab} index={4}>
        
      <Grid>
            <Typography  className={classes.KindoConnection}
            
            >Review the Kindo connection</Typography>
            
            <Typography
            className={classes.Kindoconnection2}
          >You can check the Kindo connection status and record here.</Typography>
            <Grid className={classes.Grid1}
            >
                <Typography className={classes.ConnectionStatus}
              >Kindo connection status</Typography>
                <Typography  className={classes.KindoID}
                >Kindo ID: A12B34</Typography>
                <Grid
                className={classes.KindoConnected}>
                <Typography className={classes.KindoConnectedText}> Kindo Connected</Typography>
                </Grid>
            </Grid>
            <Grid className={classes.Grid1}
            >
                <Typography className={classes.ConnectionStatus}
              >Kindo connection record</Typography>
                <Typography  className={classes.KindoID}
                >Kindo is connecting | Active now</Typography>
                <Grid>
                <Grid
                style={{
                  marginTop: '-10px'
                }}>
                <Button onClick={toggleExpansion} style={{ margin: '-40px 0px 0px 330px',
              
  background: "#F3F8FE",
  borderRadius: "16px"}}>
          {isExpanded ? '▲' : '▼'}
        </Button>
        {isExpanded && (
          <Grid className={classes.ExpandableGrid}>
          <Typography className={classes.ExpandedContent}>
          About an hour ago | Kindo connected
          </Typography>          
          <Typography className={classes.ExpandedContent2}>
          22 hours ago | 22 hours ago
          </Typography>          
          <Typography className={classes.ExpandedContent2}>
          7 October at 15:02 | Kindo connected
          </Typography>          
          <Typography className={classes.ExpandedContent2}>
          8 September at 15:02 | Kindo connected
          </Typography>          
          <Typography className={classes.ExpandedContent2}>
          2 September at 15:02 | Kindo connected
          </Typography>          
          <Typography className={classes.ExpandedContent2}>
          29 August at 15:02 | Kindo connected
          </Typography>          
          <Typography className={classes.ExpandedContent2}>
          11 August at 15:02 | Kindo connected
          </Typography>          
          <Typography className={classes.ExpandedContent2}>
          18 July at 15:02 | Kindo connected
          </Typography>          
          <Typography className={classes.ExpandedContent2}>
           8 July at 15:02 | Kindo connected
          </Typography>
          <Typography className={classes.ExpandedContent2}>
          1 July at 15:02 | Kindo connected
          </Typography>
          </Grid>
        )}
      </Grid>
                </Grid>
            </Grid>
        </Grid>
       
      </TabPanel>
      
      <TabPanel value={selectedTab} index={5}>
      <Grid>
      <Typography className={classes.Button4Text1}>Reset Kindo back to the original status</Typography>
      <Typography className={classes.Button4Text2}>The reset shall turn the Kindo in to a free Kindo that can be registered and linked to a new user.<br></br>
<br></br>
Once reset, the drugin the Kindo needs to be removed before the reset procedure is completed.<br></br>
Resetting will not result in delete the drug information and all the drug info will remain with the<br></br>
account of the previously connected user.</Typography>
<Button
className={classes.RestButton}
onClick={handleOpenDialog}>Reset</Button>
 <Dialog open={open} onClose={handleCloseDialog}
 PaperProps={{
  style: {

    background: "#FFFFFF",
    boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
    borderRadius: "16px",
    width: '416px',
    height: '308px',
  }
 }}>
      <DialogTitle className={classes.RestDialogTitle}>Clean the Kindo</DialogTitle>
      {currentPage === 1 && (
        <DialogContent>

        <Typography className={classes.DialogText1}
        >The one you use login webpage online. Please press enter to confirm.</Typography>  
        <Grid
         style={{ marginTop: 20}}>     
        <TextField
                      InputProps={{
                        
          disableUnderline: true,
          
                      }}
                      className={classes.PasswordTextfield}
                      
        placeholder="Enter Password"
       
        // Add any additional TextField props or event handlers you need
      />
      </Grid>    
        </DialogContent>
      )}
      {currentPage === 2 && (
        <DialogContent>
           <Typography className={classes.RestDialogText}>Please follow the instruction of Kindo<br></br>
           to finish the deletion. (The information<br></br>
            of the drug will be deleted and the <br></br>
            canister needed to be cleaned.)</Typography>
           
        
        </DialogContent>
      )}
      <DialogActions
      style={{
        justifyContent: 'center'
      }}>
        {currentPage === 1 && (
          <>
          <Button className={classes.Quit}
           onClick={handleCloseDialog}>Quit</Button>
          <Button onClick={handleNextPage}
          className={classes.RestDialogOKButton}>Confirm</Button>
          </>
        )}
        {currentPage === 2 && (
          <>
          
          <Button onClick={handleCloseDialog}
          className={classes.RestDialogOKButton}>OK</Button> {/* Add your reset logic here */}
          </>
        )}
      </DialogActions>
    </Dialog>
  
    </Grid>

      </TabPanel>
    </div>
  );
};

const TabPanel = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

export default Settings;

// import React, { useState, useEffect } from 'react';
// import { Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Typography, TextField, InputBase } from '@material-ui/core';
// import { useForm, Controller } from 'react-hook-form';
// import { makeStyles } from '@material-ui/core/styles';
// import AutocompleteDropdown from '../autocomplete-dropdown/autocomplete-dropdown';
// // import AutoCompleteMultiple from '../form-components/autocomplete-multiple/autocomplete-multiple'
// // import SelectMultiple from '../form-components/multiple-select/select-multiple';
// import DateInput from '../date-picker/datepicker3';
// // import TimeInput from '../form-components/time-picker/time-picker';
// import { format, getDate, getHours, getMinutes, getMonth, getYear } from 'date-fns';
// // import DeletableItem from '@components/layout/deletable-item/deletable-item';

// import HelpIcon from '@material-ui/icons/Help';
// import HighlightOffIcon from '@material-ui/icons/HighlightOff';
// import IconButton from '@material-ui/core/IconButton';

// const useStyles = makeStyles({
//     titleText: {
//         fontFamily: 'Roboto',
//         fontWeight: 'bold',
//         fontSize: '24px',
//         color: '#216194',
//     },
//     formButton: {
//         backgroundColor: '#216194',
//         borderRadius: '16px',
//         minWidth: '80px',
//         maxWidth: '200px',
//         height: '48px',
//         boxShadow: '0 0 0 0',
//         fontFamily: 'Roboto',
//         color: '#fff',
//         fontSize: '16px',
//         textTransform: 'capitalize',
//     },

//     outlineButton: {
//         borderRadius: '16px',
//         minWidth: '80px',
//         maxWidth: '128px',
//         height: '48px',
//         boxShadow: '0 0 0 0',
//         color: '#216194',
//         textTransform: 'capitalize',
//         border: 'solid 2px #216194'
//     },
//     bigButton: {
//         height: 80,
//         backgroundColor: '#fff',
//         padding: 32,
//         borderRadius: 16,
//         boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
//         color: '#216194',
//         fontWeight: 'bold',
//         fontFamily: 'Roboto',
//         fontSize: '24px',
//         textTransform: 'capitalize'
//     },
//     smallTextInput: {
//         textAlign: 'center',
//         width: 60,
//         borderRadius: 16,
//         height: 40,
//         boxShadow: 'none',
//         padding: 10,
//         backgroundColor: '#f1f6fd',
//         "& .MuiInputBase-input ": {
//             textAlign: 'center',
//             color: '#bab9b9'
//         }
//     },
//     errorText: {
//         fontSize: '11px'
//     },

//     dialogTitle: {
//         color: '#216194',
//         textAlign: 'center',
//         fontWeight: 'bold',
//     },

//     dialogText: {
//         color: '#969696',
//         textAlign: 'center',
//         fontSize: '18px',
//     },

//     dialogActionsLayout: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },

//     dialogLayout: {
//         borderRadius: '16px',
//         padding: '32px 50px',
//         width: 416,
//         textAlign: 'center'
//     },
//     titlePaper: {
//         padding: '26px 20px',
//         borderRadius: '16px',
//     },
//     paper: {
//         padding: '16px',
//         minHeight: '315px',
//         maxWidth: '640px',
//         borderRadius: '16px'
//     },

//     itemPaper: {
//         borderRadius: 16,
//         backgroundColor: '#fff',
//         padding: 16,
//         width: '100%',
//         height: 80
//     },

//     itemChip: {
//         borderRadius: 16,
//         backgroundColor: '#f3f8fe',
//         padding: 10,
//         textAlign: 'center',
//         width: '100%'
//     }

// });

// const DispenseDrug = () => {
//     const { handleSubmit: handleSubmit, control: control, formState: { errors } } = useForm({
//         mode: 'onTouched',
//         reValidateMode: 'onChange',
//         criteriaMode: 'all'
//     });

//     const { handleSubmit: handleSubmitDispense, control: controlDispense, formState: { errorsDispense }, setValue } = useForm({
//         mode: 'onTouched',
//         reValidateMode: 'onChange',
//         criteriaMode: 'all'
//     });

//     const classes = useStyles();

//     const userList = ['jpowlowski@gmail.com',
//         'runolfsson.lane@gmail.com',
//         'alayna.mante@gmail.com',
//         'cydney01@gmail.com',
//         'garett.fritsch@gmail.com'];
//     const groupList = ['Group 1', 'Group 2', 'Group 3',
//         'Group 4', 'Group 5', 'Group 6', 'Group 7',
//         'Group 7', 'Group 8', 'Group 9', 'Group 10',];
//     const DRUG = 'Panadol'

//     const [open, setOpen] = React.useState(false);
//     const [openDispenseNow, setOpenDispenseNow] = useState(false);
//     const [openDispenseSchedule, setOpenDispenseSchedule] = useState(false)
//     const [submittedData, setSubmittedData] = useState({});
//     const [scheduleSubmited, setScheduleSubmited] = useState(false);
//     const [modalPage, setModalPage] = useState(1)
//     const [page, setPage] = useState(1)

//     //states to simulate data submit to backend
//     const [dataIndex, setDataIndex] = useState(0)
//     const [dataSubmitted, setDataSubmitted] = useState([])

//     useEffect(() => {
//         if (dataSubmitted.length === 0) {
//             setScheduleSubmited(false)
//         }
//     }, [dataSubmitted])

//     //functions for page 1
//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     const onSubmit = (data) => {
//         setPage((prevPage) => prevPage + 1)
//         setSubmittedData(data)
//     }


//     // functions for page 2
//     const getDispenseTimeText = () => {
//         return <><b>{format(submittedData.dispenseDate, 'dd/MM/yyyy')}</b> at <b>{format(submittedData.dispenseDate, 'hh:mm a')}</b></>
//     }

//     const handleCloseDispenseNow = () => {
//         setOpenDispenseNow(false)
//         setModalPage(1)
//     }

//     const handleCloseDispenseSchedule = () => {
//         setOpenDispenseSchedule(false)
//         setModalPage(1)
//     }

//     const onSubmitDispense = (data) => {
//         if (data.dispenseTime) {
//             delete data.dispenseTime
//         }
//         setSubmittedData({ ...submittedData, ...data })
//         setModalPage((prevPage) => prevPage + 1)
//     }

//     const onSubmitDispenseTime = (data) => {
//         const timeAdjustedDate = new Date(getYear(submittedData.dispenseDate), getMonth(submittedData.dispenseDate), getDate(submittedData.dispenseDate), getHours(data.dispenseTime), getMinutes(data.dispenseTime))
//         //setavlue used to change the form data from the previous input
//         setValue('dispenseDate', timeAdjustedDate)
//         setSubmittedData({
//             ...submittedData,
//             dispenseDate: timeAdjustedDate
//         })
//         setModalPage((prevPage) => prevPage + 1)
//     }

//     const onSubmitDispenseNow = () => {
//         console.log('push to next page')
//         setOpenDispenseNow(false)
//     }

//     const onSubmitDispenseSchedule = () => {
//         console.log('simulate data submit')
//         setOpenDispenseSchedule(false)
//         setModalPage(1)

//         //this part of the code is only for simulation use
//         setDataSubmitted([...dataSubmitted, { ...submittedData, index: dataIndex }])
//         setDataIndex((prevState) => prevState + 1)
//         setSubmittedData({ ...submittedData, dispenseDate: null, dispenseTime: null })

//         setScheduleSubmited(true)
//     }

//     const handleItemDelete = (index) => {
//         const updatedItems = dataSubmitted.filter(item => item.index !== index);
//         setDataSubmitted(updatedItems)
//     }

//     return (
//         <>
//             <Grid container direction='column' spacing={4} style={{ marginBottom: 16 }}>
//                 <Grid item>
//                     <Paper className={classes.titlePaper} elevation={2}>
//                         <Typography className={classes.titleText}>
//                             Dispense Drug - {DRUG}
//                         </Typography>
//                         {controlDispense.register ? controlDispense.register : ''}
//                     </Paper>
//                 </Grid>
//             </Grid>
//             {page == 1 && <form style={{ width: '100vw' }} onSubmit={handleSubmit(onSubmit)}>
//                 <Grid container direction='column' spacing={4}>
//                     <Grid item>
//                         <Paper className={classes.paper} elevation={2}>
//                             <Grid container direction='column'>
//                                 <Grid item>
//                                     <Typography className={classes.titleText} style={{ fontSize: '18px', marginBottom: '32px' }}>
//                                         Individual Customer
//                                     </Typography>
//                                 </Grid>
//                                 <Grid item>
//                                     <AutocompleteDropdown
//                                         autocompleteOptions={userList}
//                                         label={'Add Customer*'}
//                                         control={control}
//                                         name='customer'
//                                         rules={{ required: true }}
//                                         placeholder={`(i.e username)`}
//                                     ></AutocompleteDropdown>
//                                 </Grid>
//                             </Grid>
//                         </Paper>
//                     </Grid>
//                     <Grid item>
//                         <Paper className={classes.paper} elevation={2}>
//                             <Typography className={classes.titleText} style={{ fontSize: '18px', marginBottom: '32px' }}>
//                                 Group
//                             </Typography>
                           
//                         </Paper>
//                     </Grid>
//                 </Grid>
//                 <Grid container justifyContent='flex-end' style={{ marginTop: 96 }}>
//                     <Grid item>
//                         <Button variant='outlined' className={classes.outlineButton} onClick={handleClickOpen} style={{ marginRight: '16px' }}>
//                             Quit
//                         </Button>
//                         <Dialog
//                             open={open}
//                             onClose={handleClose}
//                             aria-labelledby="alert-dialog-title"
//                             aria-describedby="alert-dialog-description"
//                             classes={{
//                                 paper: classes.dialogLayout
//                             }}
//                         >
//                             <DialogTitle id="alert-dialog-title" className={classes.dialogTitle}>{"Are you sure you want to quit?"}</DialogTitle>
//                             <DialogContent>
//                                 <DialogContentText className={classes.dialogText} id="alert-dialog-description">
//                                     The information will not be safed if you quit now.
//                                 </DialogContentText>
//                             </DialogContent>
//                             <DialogActions className={classes.dialogActionsLayout}>
//                                 <Button onClick={handleClose} variant='outlined' className={classes.outlineButton}>
//                                     Quit
//                                 </Button>
//                                 <Button onClick={handleClose} variant='contained' className={classes.formButton}>
//                                     Stay
//                                 </Button>
//                             </DialogActions>
//                         </Dialog>
//                         <Button type='submit' variant='contained' className={classes.formButton}>
//                             Next
//                         </Button>
//                     </Grid>
//                 </Grid>
//             </form>}

//             {page == 2 && <React.Fragment style={{ width: '100vw' }}>
//                 <Grid container direction='column' spacing={4}>
//                     {/* DISPENSE NOW */}
//                     <Grid item lg={4} md={6}>
//                         <Button className={classes.bigButton} fullWidth onClick={() => setOpenDispenseNow(true)}>
//                             Dispense Now
//                         </Button>

//                         <Dialog
//                             open={openDispenseNow}
//                             onClose={handleCloseDispenseNow}
//                             classes={{
//                                 paper: classes.dialogLayout
//                             }}
//                         >
//                             {modalPage == 1 && <>
//                                 <DialogTitle className={classes.dialogTitle}>{'Enter the quantity to be dispensed'}</DialogTitle>
//                                 <form onSubmit={handleSubmitDispense(onSubmitDispense)}>
//                                     <DialogContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 32 }}>
//                                         <Controller
//                                             render={({ field }) =>
//                                                 <InputBase
//                                                     {...field}
//                                                     className={classes.smallTextInput}
//                                                 />}
//                                             name="quantity"
//                                             control={controlDispense}
//                                             defaultValue="1"
//                                         />

//                                         <Typography style={{ marginLeft: 8, color: '#216194' }}>
//                                             Unit
//                                         </Typography>
//                                     </DialogContent>
//                                     <DialogActions className={classes.dialogActionsLayout}>
//                                         <Button onClick={handleCloseDispenseNow} variant='outlined' className={classes.outlineButton}>
//                                             Quit
//                                         </Button>
//                                         <Button type='submit' variant='contained' className={classes.formButton}>
//                                             Dispense
//                                         </Button>
//                                     </DialogActions>
//                                 </form>
//                             </>}
//                             {modalPage == 2 && <>
//                                 <DialogTitle className={classes.dialogTitle}>{'Dispense Drug'}</DialogTitle>
//                                 <form onSubmit={handleSubmitDispense(onSubmitDispenseNow)}>
//                                     <DialogContent style={{ display: 'flex', flexDirection: 'column', padding: 32 }}>
//                                         <DialogContentText>
//                                             The drug(s) listed below will be dispensed. Please inform the user(s) about this.
//                                         </DialogContentText>
//                                         <DialogContentText style={{ fontWeight: 'bold' }}>
//                                             Confirm Drug
//                                         </DialogContentText>
//                                         <DialogContentText>
//                                             {DRUG} (1000 mg) &nbsp; &nbsp; Unit: {submittedData.quantity}
//                                         </DialogContentText>
//                                         <DialogContentText style={{ fontWeight: 'bold' }}>
//                                             User / Group
//                                         </DialogContentText>
//                                         {submittedData.customer.map((customer) => <DialogContentText key={customer}>{customer}</DialogContentText>)}
//                                         {submittedData.group.map((group) => <DialogContentText key={group}>{group}</DialogContentText>)}
//                                     </DialogContent>
//                                     <DialogActions className={classes.dialogActionsLayout}>
//                                         <Button onClick={handleCloseDispenseNow} variant='outlined' className={classes.outlineButton}>
//                                             Quit
//                                         </Button>
//                                         <Button type='submit' variant='contained' className={classes.formButton}>
//                                             Confirm
//                                         </Button>
//                                     </DialogActions>
//                                 </form>
//                             </>}
//                         </Dialog>

//                     </Grid>

//                     {/* SCHEDULE DISPENSE */}
//                     <Grid item lg={4} md={6}>
//                         <Button fullWidth onClick={() => setOpenDispenseSchedule(true)} className={classes.bigButton}>
//                             Schedule Dispense
//                         </Button>

//                         <Dialog
//                             open={openDispenseSchedule}
//                             onClose={handleCloseDispenseSchedule}
//                             classes={{
//                                 paper: classes.dialogLayout
//                             }}
//                             PaperProps={{
//                                 style: {
//                                     paddding: '32px 0'
//                                 }
//                             }}
//                         >
//                             {modalPage == 1 && <>
//                                 <DialogTitle className={classes.dialogTitle}>{'Schedule Dispense'}</DialogTitle>
//                                 <form onSubmit={handleSubmitDispense(onSubmitDispense)}>
//                                     <DialogContent style={{ padding: '32px 0' }}>
//                                         <DialogContentText>
//                                             Please select the date for the scheduled remote dispense.
//                                         </DialogContentText>
//                                         <DateInput
//                                             control={controlDispense}
//                                             name='dispenseDate'
//                                             variant={'static'}
//                                             disablePast
//                                             rules={{}}
//                                         />
//                                     </DialogContent>
//                                     <DialogActions className={classes.dialogActionsLayout}>
//                                         <Button onClick={handleCloseDispenseSchedule} variant='outlined' className={classes.outlineButton}>
//                                             Quit
//                                         </Button>
//                                         <Button type='submit' variant='contained' className={classes.formButton}>
//                                             Next
//                                         </Button>
//                                     </DialogActions>
//                                 </form>
//                             </>}
//                             {modalPage == 2 && <>
//                                 <DialogTitle className={classes.dialogTitle}>{'Schedule Dispense'}</DialogTitle>
//                                 <form onSubmit={handleSubmitDispense(onSubmitDispenseTime)}>
//                                     <DialogContent style={{ padding: '32px 0' }}>
//                                         <DialogContentText>
//                                             Please select the time for the scheduled remote dispense.
//                                         </DialogContentText>
//                                         <TimeInput
//                                             control={controlDispense}
//                                             name='dispenseTime'
//                                             type='time'
//                                             rules={{}}
//                                         />
//                                     </DialogContent>
//                                     <DialogActions className={classes.dialogActionsLayout}>
//                                         <Button onClick={() => setModalPage((currentPage) => currentPage - 1)} variant='outlined' className={classes.outlineButton}>
//                                             Back
//                                         </Button>
//                                         <Button type='submit' variant='contained' className={classes.formButton}>
//                                             Next
//                                         </Button>
//                                     </DialogActions>
//                                 </form>
//                             </>}
//                             {modalPage == 3 && <>
//                                 <DialogTitle className={classes.dialogTitle}>Schedule Dispense</DialogTitle>
//                                 <form onSubmit={handleSubmitDispense(onSubmitDispense)}>
//                                     <DialogContent style={{ padding: 32 }}>
//                                         <DialogContentText>
//                                             Please enter the quantity of the drug to be dispensed on &nbsp;
//                                             {getDispenseTimeText()}
//                                         </DialogContentText>
//                                         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 32 }}>
//                                             <Controller
//                                                 render={({ field }) =>
//                                                     <InputBase
//                                                         {...field}
//                                                         className={classes.smallTextInput}
//                                                     />}
//                                                 name="quantity"
//                                                 control={controlDispense}
//                                                 defaultValue="1"
//                                             />

//                                             <Typography style={{ marginLeft: 8, color: '#216194' }}>
//                                                 Unit
//                                             </Typography>
//                                         </div>
//                                     </DialogContent>
//                                     <DialogActions className={classes.dialogActionsLayout}>
//                                         <Button onClick={() => setModalPage((currentPage) => currentPage - 1)} variant='outlined' className={classes.outlineButton}>
//                                             Back
//                                         </Button>
//                                         <Button type='submit' variant='contained' className={classes.formButton}>
//                                             Dispense
//                                         </Button>
//                                     </DialogActions>
//                                 </form>
//                             </>}
//                             {modalPage == 4 && <>
//                                 <DialogTitle className={classes.dialogTitle}>{'Dispense Drug'}</DialogTitle>
//                                 <form onSubmit={handleSubmitDispense(onSubmitDispenseSchedule)}>
//                                     <DialogContent style={{ display: 'flex', flexDirection: 'column', padding: 32 }}>
//                                         <DialogContentText>
//                                             The drug(s) listed below will be dispensed on {getDispenseTimeText()}. Please inform the user(s) about this.
//                                         </DialogContentText>
//                                         <DialogContentText style={{ fontWeight: 'bold' }}>
//                                             Confirm Drug
//                                         </DialogContentText>
//                                         <DialogContentText>
//                                             {DRUG} (1000 mg) &nbsp; &nbsp; Unit: {submittedData.quantity}
//                                         </DialogContentText>
//                                         <DialogContentText style={{ fontWeight: 'bold' }}>
//                                             User / Group
//                                         </DialogContentText>
//                                         {submittedData.customer.map((customer) => <DialogContentText key={customer}>{customer}</DialogContentText>)}
//                                         {submittedData.group.map((group) => <DialogContentText key={group}>{group}</DialogContentText>)}
//                                     </DialogContent>
//                                     <DialogActions className={classes.dialogActionsLayout}>
//                                         <Button onClick={handleCloseDispenseSchedule} variant='outlined' className={classes.outlineButton}>
//                                             Quit
//                                         </Button>
//                                         <Button type='submit' variant='contained' className={classes.formButton}>
//                                             Confirm
//                                         </Button>
//                                     </DialogActions>
//                                 </form>
//                             </>}
//                         </Dialog>
//                     </Grid>


//                     {scheduleSubmited && <>
//                         <Grid lg={4} item container direction='column'>
//                             <Grid item>
//                                 <Typography className={classes.titleText}>
//                                     Scheduled Dispense
//                                 </Typography>
//                             </Grid>
//                             <Grid item container justifyContent='space-between' style={{ padding: 16 }}>
//                                 <Grid item>
//                                     <Typography>
//                                         Time
//                                     </Typography>
//                                 </Grid>
//                                 <Grid item style={{ display: 'flex' }}>
//                                     <HelpIcon></HelpIcon>
//                                     <Typography style={{ marginLeft: 8 }}>
//                                         Quantity
//                                     </Typography>
//                                 </Grid>
//                             </Grid>
//                             <Grid item container spacing={2}>
//                                 {dataSubmitted.map((data) =>
//                                     <Grid item xs={12} key={''}>
//                                         <DeletableItem
//                                             key={data.index}
//                                             tittleText={format(data.dispenseDate, 'hh:mm a')}
//                                             subText={
//                                                 <>
//                                                     {format(data.dispenseDate, 'dd/MM/yyyy')} | &nbsp;
//                                                     {data.customer.map((customer) => <b key={customer}>{customer}, </b>)}
//                                                     {data.group.map((group) => <b key={group}>{group}, </b>)}
//                                                 </>
//                                             }
//                                             onClick={() => handleItemDelete(data.index)}
//                                             chipContent={data.quantity}
//                                         ></DeletableItem>
//                                     </Grid>)}
//                             </Grid>
//                         </Grid>
//                     </>}
//                 </Grid>
//             </React.Fragment >}
//         </>
//     )


// }

// export default DispenseDrug;

