import { withEditableUser } from "./HOCs/withEditableUser";
import { withUser } from "./HOCs/withUser";
import { User } from "../data/UserInterface";

interface UserInfoFormProps {
    user?: User | null;
    onChangeUser?: (changes: Partial<User>) => void;
    onSaveUser?: () => void;
    onResetUser?: () => void;
}

export const UserInfoForm = withEditableUser<UserInfoFormProps>(({user, onChangeUser, onSaveUser, onResetUser}) => {
    const { name, age, hairColor} = user || {};
    return user ? (
        <>
            <label>Name:
                <input 
                    value={name} 
                    onChange={e => onChangeUser ({name: e.target.value})}/>
            </label>
            <label>Age:
                <input 
                    type="number" 
                    value={age} 
                    onChange={e => onChangeUser ({age: Number(e.target.value)})}/>
            </label>
            <label>Hair Color:
                <input 
                    value={hairColor} 
                    onChange={e => onChangeUser ({hairColor: e.target.value})}/>
            </label>
            <button onClick={onResetUser}>Reset</button>
            <button onClick={onSaveUser}>Save Changes</button>
        </>
    ) : <p>Loading...</p>
}, '102');