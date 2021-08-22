import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputMessage from './InputMessage';
import MessageList from './MessageList';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(() => ({
  app: {
    margin: '0 auto',
    width: '800px',
    height: '800px',
    border: '1px solid lightsteelblue',
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: 'lightsteelblue 2px 2px 5px',
  },
  chatList: {
    width: '100%',
  },
  chat: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputWrapper: {
    flex: '1',
    width: '500px',
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
    setMessageList((prev) => [...prev, { text: inputMessage, author: 'user' }]);
    setInputMessage("");
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMessageList((prev) => {
        if (prev.length && prev[prev.length - 1].author !== 'robot') {
          return [...prev, { text: prev[prev.length - 1].text, author: 'robot' }];
        }
        return prev;
      });

      return (() => clearTimeout(timerId));
    }, 1500);

  }, [messageList]);

  return (
    <div className={classes.app}>
      <div className={classes.chatList}>
        <MenuList>
          <MenuItem>Chat 1</MenuItem>
          <MenuItem>Chat 2</MenuItem>
          <MenuItem>Chat 3</MenuItem>
        </MenuList>
      </div>

      <div className={classes.chat}>
        <MessageList list={messageList} />

        <div className={classes.inputWrapper}>
          <InputMessage inputValue={inputMessage} onChangeMessage={setInputMessage} onSendMessage={onSendMessage} />
          <button onClick={onSendMessage} className={classes.buttonSend}>Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default App;
