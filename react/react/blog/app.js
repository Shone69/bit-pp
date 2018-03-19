const SinglePost = (props) => {
    const singlePostTitle = props.post.title;
    const singlePostBody = props.post.body;
    
    return (
        <div className="card red darken-1">
            <div className="card-content white-text">
                <span className="card-title" >{singlePostTitle}</span>
                <p>{singlePostBody}</p>
            </div>
        </div>
    )
}



const PostList = (props) => {
    return (
        <div className="col-12 ">
            {
                props.posts.map((post, key) => {
                    return <SinglePost key = {key} post={post} />
                })
            }
        </div>
    )
}


const Header = (props) => {
    const head = {
        background: 'blue'
    };
    return (
        <nav>
            <div className="nav-wrapper" style={head}>
            <a href="#" className="brand-logo center" style={head}>☺Jeca†Shone☻</a>
            </div>
        </nav>
    )
}

const Main = (props) => {
    return (
        <div className="container">
            <div className="row">
                <PostList posts={props.data} />
            </div>
        </div>
    )
}


const App = (props) => {

    return (
        <div>
            <Header  />
            <Main data={props.data} />
        </div>
    )
}


const rootElement = document.querySelector(".root")
ReactDOM.render(
    <App data={postsData}  />,
    rootElement
)