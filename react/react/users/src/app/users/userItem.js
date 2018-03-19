import React from 'react';


const UserItem = (props) =>{
return (
    <li className="collection-item avatar">
        <img src={props.data.picture.thumbnail} alt="fwefewf" className="circle" />
        <span className="title">Name: {props.data.name.first}</span>
        <p>Email: {props.data.email}
            <br /> Date of birth: {props.data.dob}
        </p>
    </li>
)
}

export default UserItem