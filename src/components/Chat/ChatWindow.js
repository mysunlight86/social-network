import InputMessage from './InputMessage';
import MessageList from './MessageList';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from './chatSlice';
import React, { useState, useEffect } from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

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

const ChatWindow = () => {
    const classes = useStyles();
    const [inputMessage, setInputMessage] = useState('');
    const dispatch = useDispatch();
    const urlParams = useParams();
    const chatId = Number.parseInt(urlParams.id);
    console.log('urlParams ', urlParams);
    console.log('chatId ', chatId);
    const { chats } = useSelector((state) => state.chat);
    console.log('chats ', chats);
    const messageList = chats.find((chat) => chat.id === chatId).messagesArray;

    const onSendMessage = () => {
        // setMessageList((prev) => [...prev, { text: inputMessage, author: 'user' }]);
        // dispatch(addMessage({ author: "me", inputMessage }));
        dispatch(addMessage({ chatId, inputMessage }));
        setInputMessage("");
    };

    return (
        <div className={classes.chat}>
            <MessageList list={messageList} />

            <div className={classes.inputWrapper}>
                <InputMessage inputValue={inputMessage} onChangeMessage={setInputMessage} onSendMessage={onSendMessage} />
                <button onClick={onSendMessage} className={classes.buttonSend}>Отправить</button>
            </div>
        </div>
    );
};

export default ChatWindow;