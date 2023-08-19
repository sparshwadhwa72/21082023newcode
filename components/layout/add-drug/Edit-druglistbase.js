import React from 'react';
import clsx from 'clsx';

import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import AddDrugNavBar from './Manage-drug-progress-bar';
import AddDrugProgressBar from './progress-bar';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TodayIcon from '@material-ui/icons/Today';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddIcon from '@material-ui/icons/Add';
import AddDrugOne from '@components/forms/manage-drug-pg1';


import EnhancedTable from './drug-list-mock-table';

import Chip from '@material-ui/core/Chip';

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ManageDrugTwo from '@components/forms/Manage-drug-pg2';
import { Button } from '@material-ui/core';
import Dispense from '@components/forms/form-components/Dispense/Dispense';
import MyDialog from '@components/forms/form-components/3pagedialog';
import Mydialog from '@components/forms/form-components/3pagedialog';
import DailyPlanner from '@components/forms/form-components/Indivisual-schedule/Indivisual-schedule';
import KindoSettings from '@components/forms/form-components/Kindo-Settings/Kindo-Settings';


const drawerWidth = 240;



function createDataAccount(userName, email, status) {
  return { userName, email, status};
}

const users = [
  createDataAccount('Alex Wong','alexwong@gmail.com','owner'),
  createDataAccount('Bryan Lee','bryanlee@gmail.com','other'),
  createDataAccount('Candy Wong','candywong@gmail.com','other'),
];

// tab section start 
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-prevent-tabpanel-${index}`}
        aria-labelledby={`scrollable-prevent-tab-${index}`}
        {...other}
      >
        {value === index && (
          <div>
               {children}
          </div>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-prevent-tab-${index}`,
      'aria-controls': `scrollable-prevent-tabpanel-${index}`,
    };
  };

  

  

// tab section end

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        
      }),
      color: theme.palette.background
    
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    title: {
        width: "94px",
        height: "21px",
        fontFamily: "'Roboto'",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "18px",
        lineHeight: "21px",
        display: "flex",
        alignItems: "center",
        color: "#969696",
        flex: "none",
        order: 0,
        flexGrow: 1
      },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    tabLabel: {
      
  width: "88px",
  height: "21px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: "21px",
  display: "flex",
  alignItems: "center",
  textTransform: 'none',
  textAlign: "center",
  color: "#BAB9B9",
  flex: "none",
  order: 0,
    },
    hide: {
        display: 'none',
    },
    Typography:{
        color:"inherit"
    },
    drawer: {
    width: drawerWidth,
    flexShrink: 0,
    },
    drawerPaper: {
    width: drawerWidth,
    },
    drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        height: '30vh',
        overflow: 'auto',
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }), 
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    labelContainer: {
        width: "auto",
        padding: 0,
    },
      iconLabelWrapper: {
        flexDirection: "row"
    },tabIcon:{
        marginRight:'10px',
        
      margin: '5px 0px 0px 0px'
    },tablePaper:{
        padding:'3em 0px 3em 0px '
    }
    }));

    export default function PersistentDrawerLeft1() {
        const classes = useStyles();
        const theme = useTheme();
        const methods = useForm({
          mode: 'all',
          reValidateMode: 'onChange',
          criteriaMode: 'all',
        });

        const [open, setOpen] = React.useState(false);
        const handleDrawerOpen = () => {
          setOpen(true);
        };
      
        const handleDrawerClose = () => {
          setOpen(false);
        };

        const [value, setValue] = React.useState(0);

        const handleChange = (event, newValue) => {
          setValue(newValue);
        };
      
        return (
          <div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
              })}
              style={{ backgroundColor: '#fff' }}
              
            >
              <Toolbar >
                <IconButton
                  style={{ color: '#808080' }}
                  aria-label="open drawer"
                  value={value}
                  onClick={handleDrawerOpen}
                  
                  edge="start"
                  className={clsx(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap  className={classes.title}>
                  Carol Yui &#62;
                </Typography>
                <Typography variant="h6" noWrap style={{ 
                   width: "39px",
                   height: "21px",
                   fontFamily: "'Roboto'",
                   fontStyle: "normal",
                   fontWeight: 700,
                   fontSize: "18px",
                   marginRight: 1100,
                   lineHeight: "21px",
                   display: "flex",
                   alignItems: "center",
                   color: "#216194",
                   flex: "none",
                   order: 0,
                   flexGrow: 1
                 }} >
                  Drug 
                </Typography>
                <IconButton color="inherit" style={{ color: '#808080' }}>
                      <NotificationsIcon />
                 </IconButton>
                 
                 <ListItemAvatar
                 >
                    <Avatar
                    style={{
                   backgroundColor: '#93BCD7',   
                      color: '#fff',
                      width: '30px',
                      height: '30px',
                      fontSize: '16px',
                      
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  
  textAlign: "center",
  color: "#FFFFFF"
                    }}>
                    AW
                    </Avatar>
                  </ListItemAvatar>
              </Toolbar>
            </AppBar>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose} >
                    <MenuIcon/>
                </IconButton>
                {/*   <Typography variant="h7" noWrap style={{ color: '#808080'}} spacing="1">
                 Account
            </Typography> */}
              </div>
              <List               
              subheader={
                  <ListSubheader component="div" id="nested-list-subheader"
                  style={{
                    
  width: "64px",
  height: "45px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "21px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  color: "#BAB9B9",
  flex: "none",
  order: 0,
  flexGrow: 0
                  }}>
                    Viewing
                  </ListSubheader>
              }
              >
                <ListItem button
               >
                  <ListItemAvatar
                 >
                    <Avatar
                    style={{
                   backgroundColor: '#93BCD7',   
                      color: '#fff'
                    }}>
                    CY
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                  style={{
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: "21px",

  color: "#173A62",
  flex: "none",
  order: 0,
  flexGrow: 0,
                  }} primary='Carol Yui' secondary="caroly2205@gmail...&#62;"
                  secondaryTypographyProps={{
                    style: {
                      
  width: "146px",
  height: "19px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  color: "#173A62",
  flex: "none",
  order: 0,
  flexGrow: 0
                    },
                  }}/>
                </ListItem>
                </List>
                <Divider />
              <List               
               subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    My Self
                  </ListSubheader>
              }>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar >
                    AC
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Alex Wong" secondary="alexWong@gmail.com" />
                </ListItem>
                </List>
              <div>
              <List 
                sx={{ width: '80%', maxWidth: 360 }}
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Other Account
                  </ListSubheader>
              }>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                    AC
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Bryan" secondary="brayanlee@gmail.com" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                    AC
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Candy" secondary="candywong@gmall.com" />
                </ListItem>
                <Button
                style={{
                  margin: '70px 0px 0px 62px',
  background: "#216194",
  borderRadius: "16px",
  width: "104px",
  top: "11.5px",
  fontFamily: "'Roboto'",
  textTransform: 'none',
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  textAlign: "center",
  color: "#FFFFFF"
                }}>Upgrade</Button>
              </List>
          </div>
            </Drawer>
              {/* end of the drawer */}

            <main
              className={clsx(classes.content, {
                [classes.contentShift]: open,
              })}
              style={{ background: '#f2f6fc' }}
            >
              <div className={classes.drawerHeader} />
              <Container maxWidth="80vw">
              <Grid container spacing={3} alignItems="center" >

            <Grid item xs={12}>
            <Paper elevation={15} style={{borderRadius: 15}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab 
                        classes={{
                            wrapper: classes.iconLabelWrapper,
                            labelContainer: classes.labelContainer
                        }}
                        label={<span className={classes.tabLabel}>Dashboard</span>}
                        
                        icon={<DashboardIcon className={classes.tabIcon}/>} 
                        {...a11yProps(0)}/>
                    <Tab 
                        classes={{
                            wrapper: classes.iconLabelWrapper,
                            labelContainer: classes.labelContainer
                        }}           
                        
                        label={<span className={classes.tabLabel}>Schedule</span>}
                    icon={<TodayIcon className={classes.tabIcon}/>}
                    {...a11yProps(1)}/>
                    <Tab 
                        classes={{
                            wrapper: classes.iconLabelWrapper,
                            labelContainer: classes.labelContainer
                        }}       
                        
                        label={<span className={classes.tabLabel}>Drug</span>}
                    icon={<HighlightOffIcon className={classes.tabIcon}/>}
                    {...a11yProps(2)}/>
                    <Tab 
                        classes={{
                            wrapper: classes.iconLabelWrapper,
                            labelContainer: classes.labelContainer
                        }}        
                        
                        label={<span className={classes.tabLabel}>Kindo</span>}
                    icon={<HighlightOffIcon className={classes.tabIcon}/>}
                    {...a11yProps(3)}/>
                    <Tab 
                        classes={{
                            wrapper: classes.iconLabelWrapper,
                            labelContainer: classes.labelContainer
                        }}             
                        
                        label={<span className={classes.tabLabel}>Kin Friend</span>}
                    icon={<GroupIcon className={classes.tabIcon}/>}
                    {...a11yProps(4)}/>
                    <Tab 
                        classes={{
                            wrapper: classes.iconLabelWrapper,
                            labelContainer: classes.labelContainer
                        }}         
                        
                        label={<span className={classes.tabLabel}>Settings</span>} 
                    icon={<SettingsIcon className={classes.tabIcon}/> }
                    {...a11yProps(5)}/>
                    <IconButton color="inherit"  style={{ color: '#808080'} } size="small">
                      <AddIcon />
                 </IconButton>
                </Tabs>
              </Paper>  
            </Grid>

            <Grid item xs={12}>
              <TabPanel value={value} index={0}>
                Dashboard
              </TabPanel>

              <TabPanel value={value} index={1}
              >
      <DailyPlanner></DailyPlanner>
              </TabPanel>

              <TabPanel value={value} index={2}
              >
                {/* </Paper> */}
              </TabPanel>

              <TabPanel value={value} index={3}>
              <KindoSettings></KindoSettings>
              </TabPanel>

              <TabPanel value={value} index={4}>
                <Mydialog></Mydialog>
              </TabPanel>

              <TabPanel value={value} index={5}>
                <Dispense></Dispense>
              </TabPanel>

            </Grid>
          </Grid>
              </Container>
            </main>
          </div>
        );
      }    

    //   f3f8fe