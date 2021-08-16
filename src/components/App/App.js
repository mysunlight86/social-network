import React, { useState } from "react";
import './App.css';
import Message from '../Message/Message';
import InputMessage from '../InputMessage/InputMessage';

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const onSendMessage = () => {
    setMessageList((prev) => [...prev, inputMessage]);
    setInputMessage("");
  };

  return (
    <div className="app">
      <div className="message-list">
        {messageList.map((message, i) => (
          <div key={i}>
            <Message text={message} />
          </div>
        ))}
      </div>

      <div className="input-wrapper">
        <InputMessage inputValue={inputMessage} onChangeMessage={setInputMessage} onSendMessage={onSendMessage} />
        <button onClick={onSendMessage} className="button-send">Отправить</button>
      </div>
    </div>
  );
}

export default App;
