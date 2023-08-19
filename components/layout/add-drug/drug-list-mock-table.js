
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { useRouter } from 'next/router';
import { Select, MenuItem, FormControl, InputLabel, ListItemText } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert'; // Correct import path for MoreVertIcon
import { Controller } from 'react-hook-form';
import clsx from 'clsx';
import PausePresentationIcon from '@material-ui/icons/PausePresentation';
import { withStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';  
import Tooltip from '@material-ui/core/Tooltip';
import Chip from '@material-ui/core/Chip';

import DeleteIcon from '@material-ui/icons/Delete';
import PrintIcon from '@material-ui/icons/Print';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import EventBusyIcon from '@material-ui/icons/EventBusy';

import SearchBar from "material-ui-search-bar";
import theme from 'src/theme';
import { Button } from '@material-ui/core';
import DropdownInput from '@components/forms/form-components/dropdown/dropdown';

// mock data
function createData(id,name, dosageStr, form, expDate, quantity, storage) {
  return { id,name, dosageStr, form, expDate, quantity, storage};
}

const rows = [
  createData(1,'Pandol', 100, 'Capsule','22 Oct 2023',3, 'Runnning Low', 'abcjej'),
  createData(2,'Salbutamol Sulphate', 100, 'Tablet','22 Nov 2022',56, 'In use'),
  createData(3,'Vitamin D', 25, 'Liquid','15 Oct 2024',32, 'Suspended'),
  createData(4,'Salbutamol Sulphate', 100, 'Tablet','21 Jan 2023',56, 'Runnning Low'),
  createData(5,'Salbutamol Sulphate', 100, 'Tablet','11 Jun 2025',56, 'Runnning Low'),
  createData(6,'Pandol', 100, 'Capsule','02 Dec 2023',56, 'Runnning Low'),
  createData(7,'Salbutamol Sulphate', 60, 'Tablet','17 Apr 2024',56, 'In use'),
  createData(8,'Vitamin D', 100, 'Liquid','2022 oct 2017',56, 'Suspended'),
  createData(9,'Salbutamol Sulphate', 100, 'Tablet','2022 oct 2017',56, 'Runnning Low'),
  createData(10,'Salbutamol Sulphate', 80, 'Tablet','2022 oct 2017',56, 'Runnning Low'),
  createData(11,'Pandol', 100, 'Capsule','2022 oct 2017',56, 'Runnning Low'),
  createData(12,'Salbutamol Sulphate', 100, 'Tablet','2022 oct 2017',56, 'In use'),
  createData(13,'Vitamin D', 100, 'Liquid','2022 oct 2017',56, 'Suspended'),
  createData(14,'Salbutamol Sulphate', 100, 'Tablet','2022 oct 2017',56, 'Runnning Low'),
  createData(15,'Salbutamol Sulphate', 100, 'Tablet','2022 oct 2017',56, 'Runnning Low'),
  createData(16,'Salbutamol Sulphate', 100, 'Tablet','2022 oct 2017',56, 'Runnning Low'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Drug Name' },
  { id: 'dosageStr', numeric: false, disablePadding: false, label: 'Dosage ' },
  { id: 'form', numeric: false, disablePadding: false, label: 'Form' },
  { id: 'expDate', numeric: false, disablePadding: false, label: 'Expiry Date' },
  { id: 'quantity', numeric: false, disablePadding: false, label: 'Est. quantity' },
  { id: 'storage', numeric: false, disablePadding: false, label: 'Status' },
  
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
         
         className={classes.blueCheckbox}
           // indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            style={{
              width: "191px",
              height: "21px",
              fontFamily: "'Roboto'",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "18px",
              color: "#216194",
            }}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
         // backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
    color: '#216194',
  },
  title2: {
    flex: '1 1 100%',
  },

  tooltip: {
    backgroundColor: '#93BCD7',
    
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "16px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  color: "#FFFFFF"
  },
  arrow: {
    color: '#93BCD7',
  },

  
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title}  color="inherit" variant="subtitle1" component="div" marginLeft='auto'>
         ({numSelected}) selected
          

         <>
         
        <Tooltip title="Suspend"
        placement="top"
        arrow
        classes={{ tooltip: classes.tooltip, arrow: classes.arrow }}>
          <IconButton aria-label="suspend" size="small"
           style={{
         //   color: '#216194',
            marginLeft:'1vw',
          }}>
            <PausePresentationIcon />
          </IconButton>
        </Tooltip>
      <Tooltip title="Delete"placement="top"
      arrow
      classes={{ tooltip: classes.tooltip, arrow: classes.arrow }}>
        <IconButton onClick={handleOpen}
        style={{
        //  color: '#216194',
          marginLeft:'1vw',
        }}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      
      <Tooltip title="Export"
      arrow
      placement="top"
      classes={{ tooltip: classes.tooltip, arrow: classes.arrow }}>
      
          <IconButton aria-label="print" size="small" style={{marginLeft:'1vw',
       // color: '#216194'
      }}>
            <PrintIcon />
          </IconButton>
         </Tooltip>
         
      <Dialog open={open} onClose={handleClose}
     
PaperProps={{
  style: {

    width: '640px',
    boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)" ,

    height: '522px',
  borderRadius: '16px',
  },
}}>
        <DialogTitle
        style={{
          
  fontFamily: "Roboto",
  marginTop: 31,
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: "21px",
  alignItems: "center",
  textAlign: "center",
  color: "#216194",
  flex: "none",
  order: 0,
  flexGrow: 0
        }}>Drug Deletion</DialogTitle>
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
        }}>The information of the drug(s) listed<br></br>below will be deleted.<br></br>
        Please empty out the content of the<br></br>canister(s). please consult healthcare<br></br>
        professionals regarding drug disposal</Typography>
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
          }}>
          <Button style={{
            
  background: "#F3F8FE",
  textTransform: 'none',
  border: "2px solid #216194",
  color: '#216194',
  borderRadius: "16px",
  
  width: '80px',
  height: '42px',
          }} onClick={handleClose}>Delete</Button>
          <Button onClick={handleClose} autoFocus
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
            Quit
          </Button>
        </DialogActions>
        </Grid>
      </Dialog>
    </>


        </Typography>
        

        
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
         
      </Typography> 
      )}


      
      
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,

  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  low:{
    
    backgroundColor: "#F8BF80",
  border: "3px solid #F8BF80",
  borderRadius: "20px",
  },  
  inUse:{

    backgroundColor: "#89C1B6",
    border: "2px solid #89C1B6",
    borderRadius: "20px",
  },
  suspended:{
    
  backgroundColor: "#969696",
  border: "3px solid #969696",
  borderRadius: "20px",
  },
  Chip:{
    color : '#000'
  },
  
  New: {
    fontFamily: "'Roboto'",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#969696",
    flex: "none",
    order: 0,
    flexGrow: 0
    },
    blueCheckbox: {
      '&.MuiCheckbox-colorSecondary.Mui-checked': {
        color: '#216194',
      },
      '&.MuiCheckbox-colorSecondary.Mui-checked:hover': {
        backgroundColor: 'rgba(0, 0, 255, 0.04)',
      },
    },
}));

const useRowStyles = makeStyles({
  root: {
    '&$selected': {
      
      
      backgroundColor: 'red',// Replace with your desired color
    },
  },
  selected: {
    
    backgroundColor: '#216194',
  },
});

export default function EnhancedTable() {
  const classes = useStyles();
  
  const rowClasses = useRowStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('asc');
  const [selected, setSelected] = React.useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searched, setSearched] = React.useState("");
  const [copyList, setCopyList] = React.useState(rows)


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = copyList.length > 0 ? copyList.map((n) => n.id) : rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const handleChangeDense = (event) => {
  //   setDense(event.target.checked);
  // };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  const requestSearch = (searchedVal) => {
    const filteredRows = rows.filter((row) => {
      const name = row.name.toString().toLowerCase();
      const searchValue = searchedVal.toString().toLowerCase();
      return name.includes(searchValue);
    });
  
    setCopyList(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const router = useRouter();

  const handleClick2 = () => {
    router.push('./Edit-drug'); // Replace '/another-page' with the actual route of the page you want to navigate to
  };


  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // Handle the option selection here
    console.log('Selected option:', option);
  };
  
  



  return (


    <div className={classes.root}>
       <Grid container spacing={5} alignItems="center" >

<Grid item xs={12}>
<Paper  elevation={10} style={{borderRadius: 15}}>
    <SearchBar
    value={searched}
    onChange={(searchVal) => requestSearch(searchVal)}
    onCancelSearch={() => cancelSearch()}
    placeholder='Search keywords eg. pandol, vitamin D'
    style={{borderRadius: '16px',
    boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
    fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "21px",
  textAlign: "center",
  color: "#BAB9B9",
  }}
  />
  </Paper>
  </Grid>

  <Grid item xs={12}>
  <Paper  elevation={15} style={{borderRadius: 15}}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              
            />

            <TableBody>
              {stableSort(copyList.length > 0 ? copyList : rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;


                  return (
                    <TableRow
                      hover
                    
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.ID}
                      selected={isItemSelected}
                     className={classes.blueCheckbox}
                   
                     classes={rowClasses.selected} 
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                        className={classes.blueCheckbox}
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      
                      <TableCell component="th" id={labelId} scope="row" padding="none"
                      
                      className={classes.New}>
                        {row.name}
                      </TableCell>
                      <TableCell
                      className={classes.New}
                        align="left">{row.dosageStr}</TableCell>
                      <TableCell 
                      className={classes.New} align="left">{row.form}</TableCell>
                      <TableCell align="left"
                      
                      className={classes.New}>{row.expDate}</TableCell>
                      <TableCell align="left"
                      
                      className={classes.New}>{row.quantity}</TableCell>
                      <TableCell align="left">
                        <Chip 
                        size="mid" 
                        label={row.storage} 
                        color='primary'
                        className={row.storage == 'Runnning Low' ? classes.low : row.storage == 'In use' ? classes.inUse : classes.suspended}
                        />              
                      </TableCell>
                      <TableCell align="left">

                      <Select
  disableUnderline
  value={selectedOption}
  onChange={handleChange}
  style={{ minWidth: '120px' }}
  renderValue={() => null} // Render function to hide the selected option
  IconComponent={MoreVertIcon} // Custom icon representing three dots
  MenuProps={{
    PaperProps: {
      style: {
        height: '224px',
        color: '#216194',
        boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
        width: '94px',
        borderRadius: '16px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
      },
    },
  }}
>
  <MenuItem value="option1">
    <Button fullWidth
    style={{
      width: '94px',
      height: '40px',
      textTransform: 'none',
      
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  color: "#216194",
    }}
    >
        <ListItemText primary="Dispense" />
      </Button>
      
  </MenuItem>
  
  <MenuItem value="option2">
    <Button fullWidth  onClick={handleClick2}
      style={{
        width: '94px',
        height: '40px',
        textTransform: 'none',
        
    fontFamily: "'Roboto'",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "19px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#216194",
      }}>
        <ListItemText primary="Edit" />
     </Button>
  </MenuItem>
  <MenuItem value="option3">
    <Button fullWidth
      style={{
        width: '94px',
        height: '40px',
        textTransform: 'none',
        
    fontFamily: "'Roboto'",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "19px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#216194",
      }}>
        <ListItemText primary="Suspend" />
     
    </Button>
  </MenuItem>
  <MenuItem value="option4">
    <Button fullWidth
    onClick={handleOpen}
      style={{
        width: '94px',
        height: '40px',
        textTransform: 'none',
        
    fontFamily: "'Roboto'",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "19px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#216194",
      }}>
        <ListItemText primary="Delete" />
     
    </Button>
    
  </MenuItem>
  
</Select>    
<Dialog open={open} onClose={handleClose}
     
     PaperProps={{
       style: {
     
         width: '640px',
         boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)" ,
     
         height: '522px',
       borderRadius: '16px',
       },
     }}>
             <DialogTitle
             style={{
               
       fontFamily: "Roboto",
       marginTop: 31,
       fontStyle: "normal",
       fontWeight: 700,
       fontSize: "18px",
       lineHeight: "21px",
       alignItems: "center",
       textAlign: "center",
       color: "#216194",
       flex: "none",
       order: 0,
       flexGrow: 0
             }}>Drug Deletion</DialogTitle>
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
             }}>The information of the drug(s) listed<br></br>below will be deleted.<br></br>
             Please empty out the content of the<br></br>canister(s). please consult healthcare<br></br>
             professionals regarding drug disposal</Typography>
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
               }}>
               <Button style={{
                 
       background: "#F3F8FE",
       textTransform: 'none',
       border: "2px solid #216194",
       color: '#216194',
       borderRadius: "16px",
       
       width: '80px',
       height: '42px',
               }} onClick={handleClose}>Delete</Button>
               <Button onClick={handleClose} autoFocus
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
                 Quit
               </Button>
             </DialogActions>
             </Grid>
           </Dialog>


                    </TableCell>
                      <TableCell align="left">

                      </TableCell>
                    </TableRow>
                    
                  );
                })}

               
             {/* {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}  */}  
            {/* For display the empty row */}

            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
        style={{
          fontSize: '16px',
          fontWeight: 500,
  color: "#BAB9B9",
        }}
          rowsPerPageOptions={[5, 10, 15, 20, 25]}
          component="div"
          count={copyList.length > 0 ? copyList.length : rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          SelectProps={{
            style: {
              fontFamily: "'Roboto'",
              borderRadius: '16px',
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "19px",
              textAlign: "center",
              color: "#BAB9B9",
              flex: "none",
              order: 0,
              flexGrow: 0
            },
            MenuProps: {
              PaperProps: {
                style: {
                  borderRadius: '16px',
                  width: '57px',
                  justifyContent: 'center',
                 
              color: "#216194", // Set the desired borderRadius value
                },
              },
            },
            
          }}
        />
        </Paper>
        </Grid>
        </Grid>
    </div>
  );
}