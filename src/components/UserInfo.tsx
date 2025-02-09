import './cardStyle.css';  
import { User } from '../data/UserInterface';
import { useUser } from './hooks/useUser';

interface UserInfoProps {
    user?: User;
    userId?: string;
}

export const UserInfo: React.FC<UserInfoProps> = ({ userId = "" }) => {
    const user = useUser(userId);
    return user ? (
        <div className="info-card">
            <p>Name: {user.name}</p>
            <p>Age: {user.age} years</p>
            <p>Hair Color: {user.hairColor}</p>
            <p>Hobbies</p>
            <ul>
                {user.hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
        </div>
    ) : <p>Loading...</p>;
}

export default UserInfo;