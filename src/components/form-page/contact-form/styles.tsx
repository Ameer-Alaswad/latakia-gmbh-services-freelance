import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    button: {
        marginTop: theme.spacing(1),
    },
}));