import React, { useState, useEffect } from 'react';
import { DateRange } from 'react-date-range';
import { Grid } from '@material-ui/core';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Controller } from 'react-hook-form';


const DateRangePicker = ({ value, onChange }) => {
    
    const [dateRange, setDateRange] = useState(value);

    useEffect(() => {
        onChange(dateRange);
    }, [dateRange]);
    return (
        <DateRange
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={dateRange}
            onChange={item => setDateRange([item.selection])}
        />
    )

}

const DateRangeInput = ({
    control,
    name,
    rules,
    //additionalStyles,
    ...props
    }) => {

    return (
        <Grid container>
            <Controller
                control={control}
                name={name}
                rules={rules}
                defaultValue={[
                    {
                        startDate: new Date(),
                        endDate: null,
                        key: 'selection'
                    }
                ]}
                render={({ field }) => (
                    <DateRangePicker
                        value={field.value}
                        onChange={field.onChange}
                    />
                )}
            />
        </Grid>
    )
}

export default DateRangeInput;