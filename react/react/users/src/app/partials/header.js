import React from 'react';
const nav ={
    background:"blue",
    boxShadow: '1px 7px 1px black'
}
const h1 ={
    color: "black",
    textShadow: '1px 1px 1px purple'
    
}
const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper" style={nav}>
                <a  className="brand-logo center" ><span style ={h1}>React Users</span></a>
            </div>
        </nav>
    )
}
export default Header
