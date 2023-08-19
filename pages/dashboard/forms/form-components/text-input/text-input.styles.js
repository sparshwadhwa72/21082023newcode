import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto';

const useStyles = makeStyles({
    textField: {
        height: '80px',
        borderRadius: '16px',
        boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
        padding: '16px 76px 16px 20px',
        backgroundColor: '#fff'
    },
    textFieldLabel: {
        color: '#216194',
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 'bold',
        margin: '16px 0px 43px 20px',
        height: '21px',
        lineHeight: '1.11',
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing: 'normal',
        transform: 'none',
        transition: 'none',
        '&.Mui-focused': {
            color: '#216194',
        },
    },
    textFieldInput: {
        margin: '8px 0 16px 0',
        '&::placeholder': {
            fontFamily: 'Roboto',
            fontSize: '16px',
            color: '#969696',
            opacity: '1'
        },
    },

});

export default useStyles;