import React, { useState } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

import AddDrugOne from '../../components/forms/add-drug-pg1';
import AddDrugNavBar from '../../components/layout/add-drug/top-nav-bar';
import AddDrugProgressBar from '../../components/layout/add-drug/progress-bar';
import { Container, Grid, Button, TextField } from '@material-ui/core';
import { Label } from '@material-ui/icons';
import TextInput from '@components/forms/form-components/text-input/text-input';
import { SubmitKindoCode } from '@utils/axios';

const Dashboard = () => {
  const [code, setCode] = useState('');

  return (
    <Grid container direction="column">
      <Grid item>
        <Label>Enter Kindo Pairing Code:</Label>
        <TextField
          value={code}
          onChange={event => {
            setCode(event.target.value);
          }}
        ></TextField>

        <Button
          onClick={() => {
            SubmitKindoCode(parseInt(code));
          }}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
