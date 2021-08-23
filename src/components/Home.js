import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    homeContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    homeList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },
    homeLink: {
        textDecoration: 'none',
    }
}));

const Home = () => {
    const classes = useStyles();

    return (
        <section className={classes.homeContainer}>
            <h1>Домашняя страница</h1>
            <ul className={classes.homeList}>
                <li><Link to="/chat" className={classes.homeLink}>Чат</Link></li>
                <li><Link to="/profile" className={classes.homeLink}>Профиль</Link></li>
            </ul>
        </section>
    );
};

export default Home;
