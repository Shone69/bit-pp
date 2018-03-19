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
    const userPhoto = props.usersData.picture.large;
    const userName = props.usersData.name.first;
    const userEmail = props.usersData.email;
    const userDateOfBirth = props.usersData.dob;

    const hideEmail = (email) => {
        var part1 = email.slice(3,email.indexOf("@")-2);
        var hidden = email.replace(part1,"...");
        return hidden;
    }

    const formatDate = (date) =>{
        const newDate = new Date(date)
        const day = newDate.getDate();
        const month = newDate.getMonth() + 1;
         const year = newDate.getFullYear();
         const formatedDate = `${day}.${month}.${year}.`
         return formatedDate
        }
        
    return (
        <div class="col s4">
            <div className="card">
                <div className="card-image">
                    <img src={userPhoto}/>
                    <span className="card-title">{userName}</span>
                </div>
                <div className="card-content">
                    <p>Email: {hideEmail(userEmail)}</p>
                    <p>Date of birth: {formatDate(userDateOfBirth)}</p>
                </div>
            </div>
            </div>
    
    )
}
const UserList = (props) => {
    return (
        <div className ="row">
            {
                props.users.map((user, i) => {

                    return <SingleUser usersData={user} key={i} />
                })
            }
        </div>

    )
}

const Main = (props) => {
    return (
        <div className="container">
          
                <UserList users={props.data} />
          
        </div>
    )
}
const Footer = () =>{

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
            <Main data={props.data}/>
            <Footer/>
        </div>
    )
}


const rootElement = document.querySelector(".root")
ReactDOM.render(<App data={usersData} />, rootElement)

