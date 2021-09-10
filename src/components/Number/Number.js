import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getNumberFact } from './actions'
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    numberText: {
        fontWeight: 'bold',
        fontSize: '20px',
    },
}));

const Number = () => {
    const classes = useStyles();
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.number);

    const getThunkNumberFact = useCallback(
        () => dispatch(getNumberFact(number)),
        [dispatch, number]
    );

    useEffect(() => {
        getThunkNumberFact();
    }, [getThunkNumberFact]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onEditValue = (e) => {
        setNumber(e.target.value);
    };

    return (
        <div>
            <div>Введите число от 1 до 100 и получите информацию связанную с этим числом</div>

            {loading && <CircularProgress />}
            {error && <div>Возникла ошибка</div>}

            {!loading && !error && data && (
                <blockquote className={classes.numberText}>
                    {/* <span className={classes.number}>{number}</span> */}
                    {data}
                </blockquote>
            )}

            <form onSubmit={handleSubmit}>
                {/* <input type="text" value={number} onInput={onEditValue}></input> */}
                <input type="text" value={number} onInput={onEditValue}></input>
                {/* <input type="submit"></input> */}
            </form>
        </div>
    );
};

export default Number;
