import React from 'react';
import Header from "./partials/header"
import Footer from "./partials/footer"
import Main from "./partials/Main"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        console.log("componentDidMount");
        fetch('https://randomuser.me/api/?results=115')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            this.setState({
                users: data.results
            })
        })
    }

    render() {
        console.log("render");
        return (
            <div>
                <Header />
                <Main data={this.state.users} />
                <Footer />
            </div>
        )
    }
}

export default App;
