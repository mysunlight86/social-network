import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Message from './Message';

const useStyles = makeStyles(() => ({
    messageList: {
        width: '100%',
        height: '90%',
        borderBottom: '1px solid lightsteelblue',
        backgroundColor: 'lavenderblush',
        boxSizing: 'border-box',
        padding: '15px 30px',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '5px',
    },
}));

const MessageList = ({ list }) => {
    const classes = useStyles();

    return (
        <div className={classes.messageList}>
            {list.map((message, i) => (
                <Message key={i} text={message.text} author={message.author} />
            ))}
        </div>
    );
};

MessageList.propTypes = {
    list: PropTypes.array.isRequired,
};

export default MessageList;
