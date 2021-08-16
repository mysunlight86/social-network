import React, { useState, useEffect } from "react";
import './App.css';
import InputMessage from '../InputMessage/InputMessage';
import MessageList from '../MessageList/MessageList';

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const onSendMessage = () => {
    setMessageList((prev) => [...prev, {text: inputMessage, author: 'user'}]);
    setInputMessage("");
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMessageList((prev) => {
        if (prev.length && prev[prev.length-1].author !== 'robot') {
          return [...prev, {text: prev[prev.length-1].text, author: 'robot'}];
        }
        return prev;
      });

      return (() => clearTimeout(timerId));
    }, 1500);

  }, [messageList]);

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
