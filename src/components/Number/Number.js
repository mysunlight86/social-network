import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getNumberFact } from './actions'
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//     number: {
//         fontWeight: 'bold',
//         fontSize: '32px',
//     },
// }));

const Number = () => {
    // const classes = useStyles();
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.number);

    console.log(data, loading, error);

    const getThunkNumberFact = useCallback(
        () => dispatch(getNumberFact(number)),
        [dispatch, number]
    );

    useEffect(() => {
        getThunkNumberFact();
    }, [getThunkNumberFact]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        console.log(number);
    };

    const onEditValue = (e) => {
        setNumber(e.target.value);
    };

    // console.log(number);

    return (
        <div>
            <div>Введите число и получите информацию связанную с этим числом</div>
            <blockquote>
                {/* <span className={classes.number}>{number}</span> */}
                {data}
            </blockquote>
            <form onSubmit={handleSubmit}>
                {/* <input type="text" value={number} onInput={onEditValue}></input> */}
                <input type="text" value={number} onInput={onEditValue}></input>
                {/* <input type="submit"></input> */}
            </form>
        </div>
    );
};

export default Number;
