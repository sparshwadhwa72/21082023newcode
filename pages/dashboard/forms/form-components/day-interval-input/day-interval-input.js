import React from 'react';
import { Grid, Typography, Input } from '@material-ui/core';
import { Controller } from 'react-hook-form';


const DayIntervalInput = ({name, control, rules, placeholder, ...props}) => {
    return (
        <Grid container item direction='column'>
            <Grid item>
                <Typography variant='h4'>Days interval</Typography>
            </Grid>
            <Grid item container direction='row'>
                <Grid item>
                    <Typography variant='h5'>Every</Typography>
                </Grid>
                <Grid item>
                    <Controller
                        control={control}
                        name={name}
                        defaultValue=''
                        rules={rules}
                        render={({ field }) => (
                            <Input
                                onChange={field.onChange}
                                type='text'
                                value={field.value}
                                placeholder={placeholder}
                            />
                        )}
                        {...props}
                    />
                </Grid>
                <Grid item>
                    <Typography variant='h5'>Days</Typography>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default DayIntervalInput;