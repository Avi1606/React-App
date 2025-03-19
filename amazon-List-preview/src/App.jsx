import Product from "./assets/Product-List/Product.jsx";
import './App.css';
import './assets/Product-List/Product.css';

function App() {
    return (
        <div className="container">
            <Product Title={"Mouse"} oprice={"$12"} nprice={"$7"} />
            <Product Title={"Lights"} oprice={"$40"} nprice={"$20"} />
            <Product Title={"Jeans"} oprice={"$4"} nprice={"$2"} />
        </div>
    );
}

export default App;