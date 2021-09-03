import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Chat from './Chat/Chat';
import Home from './Home';
import Menu from './Menu';
import Profile from './Profile/Profile';

const useStyles = makeStyles(() => ({
  app: {
    margin: '0 auto',
    width: '800px',
    height: '800px',
    border: '1px solid lightsteelblue',
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: 'lightsteelblue 2px 2px 5px',
    position: 'relative',
    padding: '85px 20px 20px 0',
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Menu />

          <Switch>
            <Route path="/chat">
              <Chat />
            </Route>

            <Route path="/profile">
              <Profile />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
