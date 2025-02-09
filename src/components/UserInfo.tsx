import './cardStyle.css';  
import { useDataSource } from './hooks/useDataSource';
import { User } from '../data/UserInterface';
import axios from 'axios';

interface UserInfoProps {
    userId: string;
}

const serverResource = (resourceUrl: string) => async () => {
    const response = await axios.get<User>(resourceUrl);
    return response.data;
};

export const UserInfo: React.FC<UserInfoProps> = ({ userId }) => {
    const user = useDataSource(serverResource(`/users/${userId}`));
    
    return user ? (
        <div className="info-card">
            <p>Name: {user.name}</p>
            <p>Age: {user.age} years</p>
            <p>Hair Color: {user.hairColor}</p>
            <p>Hobbies</p>
            <ul>
                {user.hobbies.map((hobby: string) => <li key={hobby}>{hobby}</li>)}
            </ul>
        </div>
    ) : <p>Loading...</p>;
}

export default UserInfo;