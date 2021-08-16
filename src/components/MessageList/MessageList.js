import './MessageList.css';
import Message from '../Message/Message';

const MessageList = (props) => {
    return (
        <div className="message-list">
        {props.list.map((message, i) => (
          <div key={i}>
            <Message text={message} />
          </div>
        ))}
      </div>
    );
};

export default MessageList;
