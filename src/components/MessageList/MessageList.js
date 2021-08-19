import './MessageList.css';
import Message from '../Message/Message';

const MessageList = (props) => {
    return (
        <div className="message-list">
            {props.list.map((message, i) => (
                <Message key={i} text={message.text} author={message.author} />
            ))}
        </div>
    );
};

export default MessageList;
