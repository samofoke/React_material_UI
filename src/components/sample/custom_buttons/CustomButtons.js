import React from 'react'
import { AiOutlineFileAdd } from 'react-icons/ai';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '10px',
        width: '40%'
    },
    button: {
        color: '#FFFFFF',
        margin: theme.spacing(1),
        borderRadius: '20px',
        '&:hover': {
            backgroundColor: '#008B8B',
            color: '#FFFFFF'
        }
    },
}));

function CustomButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<AiOutlineFileAdd/>}

            >
                Select 1
            </Button>
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<AiOutlineFileAdd/>}

            >
                Select 2
            </Button>  
        </div>
    )
}

export default CustomButtons;
