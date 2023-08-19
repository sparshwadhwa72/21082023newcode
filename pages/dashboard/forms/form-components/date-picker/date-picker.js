import React from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Controller } from 'react-hook-form';

const DateInput = ({ control, name, placeholder, label, rules, ...props }) => {
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Controller
          control={control}
          name={name}
          defaultValue={new Date()}
          rules={rules}
          render={({ field }) => (
            <DatePicker
              autoOk
              variant="inline"
              disableToolbar
              label={label}
              value={field.value}
              initialFocusedDate={Date.now()}
              onChange={field.onChange}
              onBlur={field.onBlur}
              placeholder={placeholder}
            />
          )}
          {...props}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};
export default DateInput;
