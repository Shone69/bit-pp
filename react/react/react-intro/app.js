const products = ["apple", "banana", "orange"];



const createProductList = () => {
    const newProductList = products.map(element => {
    return < Product name = {element.toUpperCase()} />
    })
    return newProductList;


}
const Product = (props) => {
    return <li>{props.name}</li>
}
const ShopingList = () => {
    return (
        <ul>
            {createProductList()}
        </ul>
    )
}


const App = () => {
    return (
        <div>
            <h1>Jeca je kul,ali Shone je CAR!</h1>
            <ShopingList />
        </div>
    )

}


const rootElement = document.querySelector(".root")
ReactDOM.render(<App />, rootElement)