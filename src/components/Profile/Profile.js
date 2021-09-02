import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { editName } from './profileSlice';

const Profile = () => {
    const { userName } = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onEditName = (e) => {
        const newName = e.target.value;
        dispatch(editName(newName));
    };

    useEffect(() => {
        if (userName) {
            setTimeout(() => {
                console.log(userName);
            }, 1000);
        }
    }, [userName]);

    return (
        <>
            <div>Профиль</div>
            <div>{userName}</div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={userName} onInput={onEditName}></input>
                <input type="submit"></input>
            </form>
        </>
    );
};

export default Profile;
