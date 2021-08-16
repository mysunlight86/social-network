import React, { useState } from "react";
import './App.css';
import InputMessage from '../InputMessage/InputMessage';
import MessageList from '../MessageList/MessageList';

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const onSendMessage = () => {
    setMessageList((prev) => [...prev, inputMessage]);
    setInputMessage("");
  };

  return (
    <div className="app">
      <MessageList list={messageList} />

      <div className="input-wrapper">
        <InputMessage inputValue={inputMessage} onChangeMessage={setInputMessage} onSendMessage={onSendMessage} />
        <button onClick={onSendMessage} className="button-send">Отправить</button>
      </div>
    </div>
  );
}

export default App;
