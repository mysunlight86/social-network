import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    link: {
        marginRight: '20px',
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
    },

    activeLink: {
        color: 'mediumpurple',
    },

    appBar: {
        position: 'absolute',
        backgroundColor: 'lavender',
        boxShadow: 'lightsteelblue 2px 2px 5px',
    },
}));

const Menu = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <NavLink exact to="/" className={classes.link} activeClassName={classes.activeLink}>Главная</NavLink>
                <NavLink to="/chat" className={classes.link} activeClassName={classes.activeLink}>Чат</NavLink>
                <NavLink to="/profile" className={classes.link} activeClassName={classes.activeLink}>Профиль</NavLink>
                <NavLink to="/number" className={classes.link} activeClassName={classes.activeLink}>Число</NavLink>
            </Toolbar>
        </AppBar>
    );
};

export default Menu;
