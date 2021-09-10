import React, { useState } from 'react';
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//     number: {
//         fontWeight: 'bold',
//         fontSize: '32px',
//     },
// }));

const numberFact = '';

const Number = () => {
    // const classes = useStyles();
    const [number, setNumber] = useState(0);

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
                {numberFact}
            </blockquote>
            <form onSubmit={handleSubmit}>
                <input type="text" value={number} onInput={onEditValue}></input>
                <input type="submit"></input>
            </form>
        </div>
    );
};

export default Number;
