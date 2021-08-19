import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
    message: {
        fontSize: '20px',
        padding: '5px 10px',
        borderRadius: '10px',
        width: '75%',
        color: 'mediumpurple',
    },
    authorMessage: {
        fontSize: '15px',
        color: 'lightsteelblue',
        margin: '0 10px',
    },
    authorRobot: {
        textAlign: 'right',
    },
    userMessage: {
        backgroundColor: 'white',
        padding: '5px 10px',
        borderRadius: '10px',
        width: '75%',
    },       
    robotMessage: {
        backgroundColor: 'ghostwhite',
        marginLeft: 'auto',
    }
    
}));

const Message = ({ text, author }) => {
    const classes = useStyles();

    return (
        <>
            <span className={`${classes.authorMessage} ${author === 'robot' ? classes.authorRobot : ''}`}>{author}</span>
            <div className={`${classes.message} ${author === 'user' ? classes.userMessage : classes.robotMessage}`}>{text}</div>
        </>
    );
};

Message.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

export default Message;