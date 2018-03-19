import React from 'react';
import UserList from "../users/userList.js"

const Main = (props) => {
    return (
        <div className="container">
            <div className="row">
                <UserList data={props.data} />
            </div>
        </div>
    )
}
export default Main;