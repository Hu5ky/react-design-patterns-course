import { User } from './UserInterface';

interface UserInfoProps {
    user?: User;
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {

    return user ? (
        <>
            <h3>Name: {user.name}</h3>
            <p>Age: {user.age} years</p>
            <p>Hair Color: {user.hairColor}</p>
            <h3>Hobbies:</h3>
            <ul>
                {user.hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
        </>
    ) : <p>Loading...</p>;
}

export default UserInfo