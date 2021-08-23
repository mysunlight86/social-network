import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Chat from './Chat/Chat';
import Home from './Home';

const useStyles = makeStyles(() => ({
  app: {
    margin: '0 auto',
    width: '800px',
    height: '800px',
    border: '1px solid lightsteelblue',
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: 'lightsteelblue 2px 2px 5px',
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.app}>

          <Switch>
            <Route path="/chat">
              <Chat />
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
