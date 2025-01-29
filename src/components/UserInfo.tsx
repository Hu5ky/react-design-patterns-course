import { User } from '../data/UserInterface';
import './cardStyle.css';  // Import your CSS file

interface UserInfoProps {
    user?: User;
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
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
