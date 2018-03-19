const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">React Users</a>
            </div>
        </nav>
    )
}
const SingleUser = (props) => {
    const userPhoto = props.usersData.picture.thumbnail;
    const userName = props.usersData.name.first;
    const userEmail = props.usersData.email;
    const userDateOfBirth = props.usersData.dob;

    const formatDate = (date) =>{
        const newDate = new Date(date)
        const day = newDate.getDate();
        const month = newDate.getMonth() + 1;
         const year = newDate.getFullYear();
         const formatedDate = `${day}.${month}.${year}.`
         return formatedDate
        }
        

    return (
        <li className="collection-item avatar">
            <img src={userPhoto} alt="" className="circle" />
            <span className="title">Name: {userName}</span>
            <p>Email: {userEmail}
                <br /> Date of birth: {formatDate(userDateOfBirth)}
            </p>
        </li>
    )
}
const UserList = (props) => {
    return (
        <ul className="collection">
            {
                props.users.map((user, i) => {
                    return <SingleUser usersData={user} key={i} />
                })
            }
        </ul>

    )
}

const Main = (props) => {
    return (
        <div className="container">
            <div className="row">
                <UserList users={props.data} />
            </div>
        </div>
    )
}
const Footer = () => {

    return (
        <footer className="page-footer">
            <div class="footer-copyright">
                <div class="container">
                    © 2018 Copyright Bit
                </div>
            </div>
        </footer>
    )

}
const App = (props) => {
    return (
        <div>
            <Header />
            <Main data={props.data} />
            <Footer />
        </div>
    )
}


const rootElement = document.querySelector(".root")
ReactDOM.render(<App data={usersData} />, rootElement)