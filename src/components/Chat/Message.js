import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
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

const Message = ({ message }) => {
    const classes = useStyles();
    const { myId } = useSelector((state) => state.chat);

    return (
        <div className={`${classes.message} ${message.userId === myId ? classes.userMessage : classes.robotMessage}`}>{message.text}</div>
    );
};

Message.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

export default Message;