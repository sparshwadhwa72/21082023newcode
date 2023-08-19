import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto';

const useStyles = makeStyles({
    dropdown: {
        height: '80px',
        borderRadius: '16px',
        boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
        padding: '16px 16px 16px 20px',
        backgroundColor: '#fff'
    },
    dropdownLabel: {
        color: '#216194',
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 'bold',
        height: '21px',
        lineHeight: '1.11',
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing: 'normal',
        transform: 'none',
        transition: 'none',
        position: 'relative',
        '&.Mui-focused': {
            color: '#216194',
        },
    },
    dropdownSelect: {
        marginTop: '8px',
        
        textAlign: 'center'
    },
    dropdownInput: {
        marginBotton: '16px',
        padding: '0 24px 0 0',
        fontFamily: 'Roboto',
        fontSize: '16px',
        color: '#216194',
    },
    dropdownPlaceholderText: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        lineHeight: '1.25',
        color: '#969696'
    },
    dropdownMenu: {
        borderRadius: '16px',
        boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
    },
    dropdownMenuList: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        color: '#216194',
        textAlign: 'center',
    },
    dropdownMenuItem: {
        textAlign: 'center',
        fontSize: '16px',
        justifyContent: 'center'
    }

});

export default useStyles;