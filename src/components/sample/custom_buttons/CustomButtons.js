import React from 'react'
import { AiOutlineFileAdd } from 'react-icons/ai';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

function CustomButtons() {
    const classes = useStyles();

    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<AiOutlineFileAdd/>}

            >
                Select 1
            </Button>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<AiOutlineFileAdd/>}

            >
                Select 2
            </Button>  
        </div>
    )
}

export default CustomButtons;
