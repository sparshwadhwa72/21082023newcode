import React from 'react';
import { Grid } from '@material-ui/core';
import Link from 'next/link';

const AddDrugNavBar = ({ username, drugName, dosage, currentPage, setCurrentPage }) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <Link href="#">Cancel</Link>
        </Grid>
        <Grid item container xs={8}>
          <Grid item>
            <div>{username}</div>
          </Grid>
          <Grid item>{drugName !== '' ? <div>{drugName}</div> : null}</Grid>
          <Grid item>{dosage !== '' ? <div>{dosage}</div> : null}</Grid>
        </Grid>
        <Grid item xs={2}>
          <button>Next</button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddDrugNavBar;
