import React from 'react';
import UserItem from './userItem'
const UserList = (props) => {
    // console.log(props.data)
    return (
        <ul className="collection">
            {
                props.data.map((user, i) => {
                    return <UserItem data = {user} key ={i}/>
                })
            }
        </ul>

    )
}
export default UserList