import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';

const CheckboxInput = () => {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    disableRipple={true}

                />
            }
        />
    )
}