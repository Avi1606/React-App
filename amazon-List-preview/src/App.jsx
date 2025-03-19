import Product from "./assets/Product-List/Product.jsx";
import './App.css';
import './assets/Product-List/Product.css';
import Button from "./assets/Price-Box/Button.jsx";

function App() {
    return (
        <div className="container">
            <Product Title={"Mouse"} oprice={"$12"} nprice={"$7"} />
            <Product Title={"Lights"} oprice={"$40"} nprice={"$20"} />
            <Product Title={"Jeans"} oprice={"$4"} nprice={"$2"} />
            <Button onClick={hello}/>

            <p onMouseOver={hello}>hover me!</p>
        </div>
    );
}

function hello() {
    console.log("Hello World");
}

export default App;