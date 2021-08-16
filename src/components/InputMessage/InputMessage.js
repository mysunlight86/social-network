import './InputMessage.css';

const InputMessage = (props) => {
    return (
        <input
          className="input-message"
          value={props.inputValue}
          onChange={(e) => props.onChangeMessage(e.target.value)}
          onKeyDown={({key}) => {
            if (key === 'Enter') {
              props.onSendMessage();
            }
          }}
        />
    );
};

export default InputMessage;
