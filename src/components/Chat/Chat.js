import React, { useState, useEffect } from 'react';
import InputMessage from './InputMessage';
import MessageList from './MessageList';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const chats = [
    {
        id: 0,
        name: 'Chat 1',
    },
    {
        id: 1,
        name: 'Chat 2',
    },
    {
        id: 2,
        name: 'Chat 3',
    },
];

const useStyles = makeStyles(() => ({
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
    },
    chatItem: {
        color: 'mediumpurple',
        padding: '10px 0'
    }
  }));

const Chat = () => {
    const classes = useStyles();
    const [inputMessage, setInputMessage] = useState('');
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
        <>
            <div className={classes.chatList}>
                <MenuList>
                    {chats.map((chat) => (
                        <MenuItem key={chat.id} className={classes.chatItem}>{chat.name}</MenuItem>
                    ))}
                </MenuList>
            </div>

            <div className={classes.chat}>
                <MessageList list={messageList} />

                <div className={classes.inputWrapper}>
                    <InputMessage inputValue={inputMessage} onChangeMessage={setInputMessage} onSendMessage={onSendMessage} />
                    <button onClick={onSendMessage} className={classes.buttonSend}>Отправить</button>
                </div>
            </div>
        </>
    );
};

export default Chat;
