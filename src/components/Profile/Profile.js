import { useDispatch, useSelector } from "react-redux";
import { editName } from './profileSlice';

const Profile = () => {
    const { userName } = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onEditName = (newName) => {
        dispatch(editName(newName));
      };

    return (
        <>
            <div>Профиль</div>
            <div>{userName}</div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={userName} onChange={onEditName}></input>
                <input type="submit"></input>
            </form>
        </>
    );
};

export default Profile;
