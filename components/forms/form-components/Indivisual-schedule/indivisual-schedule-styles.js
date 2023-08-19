import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto';

const useStyles = makeStyles({

Container: {    
        margin: '0px 0px 0px 10px'
},    

Grid1:{    
  background: "#FCFCFC",  
  borderBottom: "1px solid #C6D9E7",
  boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
  borderRadius: "10px 10px 0px 0px",  
  height: "62px",
  width: '717px',
  marginTop: 40,
},
TobeTaken:{
    fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  textAlign: "center",
  color: "#216194",
},
HKT: {    
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  color: "#BAB9B9",
  margin: '21px 0px 0px 20px'
},
Today: {    
    justifyContent: 'center',
    fontFamily: "'Roboto'",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "21px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#216194",
    margin: '9px 0px 0px 180px'
},
DrugName:{  
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  color: "#BAB9B9",
  margin: '32px 0px 0px 45px'
},
Quantity:{  
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  color: "#BAB9B9",
  margin: '-23px 0px 0px 248px'
},
Grid2:{    
  height: "682px",
  boxShadow: '0px 15px 30px rgba(33, 97, 148, 0.15)',
  width: '718px',  
  background: "#F5F6F7",
  borderRadius: '0px 0px 20px 20px',
},
Day:{
    marginTop: 32,              
    fontFamily: "'Roboto'",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "21px",
    display: "flex",
    alignItems: "center",
    color: "#216194",
    marginLeft: 20,
},

Grid3:{    
  background: "#FFFFFF",
  border: "2px solid #216194",
  boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
  borderRadius: "16px",
  width: '640px',
  height: '80px',
  margin: '24px 0px 0px 20px'
},
Grid4:{    
    width: '146px',
    height: '22px',
background: "#F8BF80",
borderRadius: "20px",
margin: '8px 0px 0px 20px'
},
Frequency:{                  
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  textAlign: "center",
  color: "#FFFFFF",
},


Time:{
    fontFamily: "'Roboto'",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#BAB9B9",  
    marginTop: 8,
    marginRight: 60,
},
Medicine:{    
    width: "504px",
    height: "16px",    
fontFamily: "'Roboto'",
fontStyle: "normal",
fontWeight: 400,
fontSize: "14px",
lineHeight: "16px",
color: "#BAB9B9",
margin: '-17px 0px 0px 88px'
},
Grid5:{
    background: "#FFFFFF",
    border: "2px solid #fff",
    boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
    borderRadius: "16px",
    width: '640px',
    height: '80px',
    margin: '20px 0px 0px 20px'
},
Dispensed:{    
    width: '140px',
    height: '22px',    
background: "#89C1B6",
borderRadius: "20px",
margin: '8px 0px 0px 20px'
},
Missed:{    
    width: '70px',
    height: '22px',    
background: "#E58A83",
borderRadius: "20px",
margin: '8px 0px 0px 20px'
},
Time2:{    
    width: '80px',
    fontFamily: "'Roboto'",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#BAB9B9",  
    marginTop: 8
},
Grid6:{
    background: "#FFFFFF",
    border: "2px solid #fff",
    boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
    borderRadius: "16px",
    width: '640px',
    height: '80px',
    margin: '24px 0px 0px 20px'
},
Grid7:{    
    width: '97px',
    height: '22px',  
background: "#F1F6FD",
border: "1px solid #216194",
borderRadius: "20px",
margin: '8px 0px 0px 20px'
},
Calander:{
    
    margin: '-750px 0px 0px 800px',
},

Grid8:{    
    
    width: '182px',
    height: '22px',                  
background: "#F1F6FD",
border: "1px solid #216194",
borderRadius: "20px",
margin: '8px 0px 0px 20px'
},
ManageButton:{    
    width: '335px',
    height: '80px',
background: "#FFFFFF",
boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
borderRadius: "16px",
marginTop: 24,
},
ManageSession:{    
    textTransform: 'none',          
    fontFamily: "'Roboto'",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "28px",
    textAlign: "center",
    color: "#216194",
},
DialogTitle:{    
    justifyContent: 'center',
    marginTop: 32,
fontFamily: "'Roboto'",
fontStyle: "normal",
fontWeight: 700,
fontSize: "18px",
lineHeight: "21px",
display: "flex",
alignItems: "center",
textAlign: "center",
color: "#216194",
},
DialogText1:{    
    justifyContent: 'center',                  
    fontFamily: "'Roboto'",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    textAlign: "center",
    color: "#BAB9B9"
},
DialogActions:{   
        justifyContent: 'center',
        marginBottom: 32,
     
},
Quit:{
    background: "#F1F6FD",
  border: "2px solid #216194",
  borderRadius: "16px",
  width: "104px",
  height: "19px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  textAlign: "center",
  color: "#216194",
  width: '128px',
  height:'42px',
  textTransform: 'none',
},
Next:{
    background: "#216194",
  borderRadius: "16px",
  width: "104px",
  height: "19px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  textAlign: "center",
  color: "#FFFFFF",  
  width: '128px',
  height:'42px',
  textTransform: 'none',
},
DispenseNow:{                         
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  textAlign: "center",
  color: "#216194",
  textTransform: 'none',
  width: '295px',
  height: '33px',
  margin: '0px 0px 0px 40px'
},
ScheduleDispense:{
                                
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  textAlign: "center",
  color: "#216194",
  textTransform: 'none',
  width: '295px',
  height: '33px',
},
SelectedDate:{
    fontFamily: "'Roboto'",
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '21px',
    textAlign: 'center',
    color: '#BAB9B9',
    margin: '-20px 0px 0px 135px'
},
SelectTime:{               
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "21px",
  textAlign: "center",  
  color: '#BAB9B9',
},
Bedispsensedon:{
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "21px",
  textAlign: "left",  
  color: '#BAB9B9',
  marginLeft: 70,
},
Grid9:{
  marginTop: 40,        
  borderRadius: "16px 16px 0px 0px",        
  background: "#89C1B6",
  border: "2px solid #216194",  
  width: "335px",
  height: "64px",
},
Dispensedontime:{  
  marginTop: 20,
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: "21px",
  alignItems: "center",
  textAlign: "center",
  color: "#FFFFFF",
},
Grid10:{  
  height: '286px',        
  background: "#fff",
  border: "2px solid #216194",  
  width: "335px",  
  boxSizing: "border-box",
  border: "2px solid #216194",
  boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
  borderRadius: "0px 0px 16px 16px"
},
Time3:{
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  alignItems: "center",
  textAlign: "center",
  color: "#969696",
  marginTop: 16,
},
Editor:{
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  alignItems: "center",
  color: "#969696",
  marginLeft: 16,
  marginTop: 11,
},
EditorName:{
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  alignItems: "center",
  color: "#969696",
  marginLeft: 8,
  marginTop: 11,
},
DateofEdit:{  
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  alignItems: "center",
  color: "#969696",
  marginTop:8,
  marginLeft: 16,
},
DateofEdit2:{  
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  alignItems: "center",
  color: "#969696",
  marginTop:8,
  marginLeft:8,
},




});

export default useStyles;