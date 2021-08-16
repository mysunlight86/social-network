import './Message.css';

const Message = (props) => {
    return (
        <>
            <span className={`author-message${props.author === 'robot' && ' author-robot'}`}>{props.author}</span>
            <div className={`message ${props.author === 'user' ? 'user-message' : 'robot-message'}`}>{props.text}</div>
        </>
    );
};

export default Message;