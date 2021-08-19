import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputMessage from './InputMessage';
import MessageList from './MessageList';

const useStyles = makeStyles(() => ({
  app: {
    margin: '0 auto',
    width: '600px',
    height: '800px',
    border: '1px solid lightsteelblue',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'lightsteelblue 2px 2px 5px',
  },
  inputWrapper: {
    flex: '1',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'lavender',
    boxSizing: 'border-box',
    padding: '0 30px',
  },
  buttonSend: {
    borderColor: 'mediumpurple',
    color: 'mediumpurple',
    borderRadius: '10px',
    padding: '7px 15px',
  }
}));

function App() {
  const classes = useStyles();

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
    <div className={classes.app}>
      <MessageList list={messageList} />

      <div className={classes.inputWrapper}>
        <InputMessage inputValue={inputMessage} onChangeMessage={setInputMessage} onSendMessage={onSendMessage} />
        <button onClick={onSendMessage} className={classes.buttonSend}>Отправить</button>
      </div>
    </div>
  );
}

export default App;
