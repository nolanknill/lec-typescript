import User from "../../interfaces/User";
import { FunctionComponent } from "react";

interface UserListProps {
    title: string,
    users: User[]
}

const UserList: FunctionComponent<UserListProps> = ({ title, users }) => {
    return (
        <>
            <h2>{title}</h2>
            <ul>
                {users.map((user) => {
                    return <li>{user.name} is a {user.zodiacSign}</li>
                })}
            </ul>
        </>
    );
}

export default UserList;