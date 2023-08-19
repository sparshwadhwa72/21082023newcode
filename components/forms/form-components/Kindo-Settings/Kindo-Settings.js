import React, { useState } from 'react';
import { Tabs, Tab , makeStyles} from '@material-ui/core';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography , Grid, Select, MenuItem, TextField, FormControlLabel, Checkbox,
  Dialog, DialogTitle, DialogContent, DialogActions} from '@material-ui/core';
import useStyles from './Kindo-Settings-styles';
import Switch, { switchClasses } from '@mui/joy/Switch';
import DateInput from '../date-picker/datepicker3';

const KindoSettings = () => {
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
        label="Reminder" />
        <Tab  className={classes.Tab} style={{ marginLeft: 16}} label="Kindo Passcode" />
        <Tab  className={classes.Tab} style={{ marginLeft: 16}} label="Feature" />
        <Tab  className={classes.Tab} style={{ marginLeft: 16}} label="Suspend" />
        <Tab  className={classes.Tab} style={{ marginLeft: 16}} label="Connection" />
        
        <Tab  className={classes.Tab} style={{ marginLeft: 16}} label="Reset" />
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
                Set Kindo passcode to protect privacy
                </Typography>
                <Typography className={classes.Kindoconnection2}>
                    To strengthen the privacy system, set the Kindo passcode first</Typography>
                    <Grid item className={classes.Grid3}>
                        <Typography
                        className={classes.KindoPasscode2}
                        >New Kindo passcode</Typography>
       <TextField
  className={classes.PasscodeTextfield}
  type={showPassword ? 'text' : 'password'}
  value={password}
  onChange={handlePasswordChange}
  InputProps={{
    disableUnderline: true,
  }}
  
  placeholder="4 number characters"
/>
        
                    </Grid>
                    <Grid item className={classes.Grid3}>
                        <Typography className={classes.KindoPasscode2}>Confirm Kindo pass code</Typography>
                        <TextField
                        
  className={classes.PasscodeTextfield}
  type={showPassword ? 'text' : 'password'}
  value={password}
  onChange={handlePasswordChange}
                        InputProps={{
                          
            disableUnderline: true,
                        }}
                        
          placeholder="4 number characters"
         
          // Add any additional TextField props or event handlers you need
        />
        <FormControlLabel style={{
          margin: '32px 0px 0px 0px',
          
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  color: "#BAB9B9",
        }}
          control={
            <Checkbox
              checked={showPassword}
              onChange={handleShowPasswordChange}
              color="primary"
            />
          }
          label="Show password"
        />
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

export default KindoSettings;
