import InputMessage from './InputMessage';
import MessageList from './MessageList';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from './chatSlice';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
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
}));

const ChatWindow = ({ setChatId }) => {
    const classes = useStyles();
    const [inputMessage, setInputMessage] = useState('');
    const dispatch = useDispatch();
    const urlParams = useParams();
    const chatId = Number.parseInt(urlParams.id);
    // setChatId(chatId);
    const { chats } = useSelector((state) => state.chat);
    const messageList = chats.find((chat) => chat.id === chatId).messagesArray;

    const onSendMessage = () => {
        dispatch(addMessage({ chatId, inputMessage }));
        // setInputMessage("");
    };

    useEffect(() => {
        // const urlParams = useParams();
        // const chatId = Number.parseInt(urlParams.id);
        setChatId(chatId);
    });

    return (
        <div className={classes.chat}>
            <MessageList list={messageList} />

            <div className={classes.inputWrapper}>
                <InputMessage 
                inputValue={inputMessage} 
                onChangeMessage={setInputMessage} 
                onSendMessage={onSendMessage} 
                />
                <button onClick={onSendMessage} className={classes.buttonSend}>Отправить</button>
            </div>
        </div>
    );
};

export default ChatWindow;