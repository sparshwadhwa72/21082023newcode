import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Controller } from 'react-hook-form';

const DayPicker = ({
    name,
    control,
    options,
    rules,
    ...props

    }) => {
    return (
        <div>
            <Controller
                control={control}
                name={name}
                defaultValue={[]}
                rules={rules}
                render={({ field }) => (
                    <ToggleButtonGroup 
                        value={field.value} 
                        onChange={(e, data) => field.onChange(data)}
                        orientation='horizontal'
                        exclusive={false}
                    >
                        {options.map((option) => (
                            <ToggleButton key={option} value={option}>
                                {option}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                )}
                {...props}
            />
        </div>
    )
}

export default DayPicker;