import React, {useState} from 'react';
import { Grid, Button, Input } from '@material-ui/core';

const TimeslotBox = ({time, numDrugs, onQuantityChange}) => {
    const [quantity, setQuantity] = useState(0);
    const handleClick= () => {
        setQuantity(1);
    }

    const handleChange = (e) => {
        setQuantity(parseInt(e.target.value));
        onQuantityChange(time, parseInt(e.target.value));
    }

    const handleBlur = (e) => {
        if (parseInt(e.target.value) === 0) {
            setQuantity(0)
        }
    }

    return (
        <Grid container>
            <Grid item container direction='column'>
                <Grid item>
                    <div>{time.toLocaleString()}</div>
                </Grid>
                <Grid item>
                    <div>{numDrugs} drugs at this time already</div>
                </Grid>
            </Grid>
            <Grid item>
                {quantity === 0 ? <Button onClick={handleClick}>add</Button> : <Input onBlur={handleBlur} onChange={handleChange} type='text' value={quantity}/>}
            </Grid>


        </Grid>
        


    )
}

export default TimeslotBox;