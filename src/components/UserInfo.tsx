import './cardStyle.css';  
import { useResource } from './hooks/useResource';

interface UserInfoProps {
    userId: string;
}

export const UserInfo: React.FC<UserInfoProps> = ({ userId }) => {
    const user = useResource(`/users/${userId}`);
    
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