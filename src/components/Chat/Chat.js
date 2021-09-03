import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MenuList from '@material-ui/core/MenuList';
import ChatPreview from './ChatPreview';
import ChatWindow from './ChatWindow';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles(() => ({
  chatList: {
    width: '40%',
  },
}));

const Chat = () => {
  const classes = useStyles();
  const { chats } = useSelector((state) => state.chat);
  const [chatId, setChatId] = useState(0);

  return (
    <>
      <div className={classes.chatList}>
        <MenuList>
          {chats.map((chat, i) => (
            <ChatPreview key={i} chat={chat} chatIdActive={chatId} />
          ))}
        </MenuList>
      </div>

      <Switch>
        <Route path="/chat/:id">
          <ChatWindow setChatId={setChatId} />
        </Route>
      </Switch>
    </>
  );
};

export default Chat;
