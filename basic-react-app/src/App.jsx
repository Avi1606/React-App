import "./App.css";
import Products from "./componet/Products/Products.jsx";
import Title from "./componet/Title.jsx";

function ProductTab() {
    return (
        <div>
            <Title/>
            <button>This is my first App</button>
            <Products title={"Phone"} price={"30k"}/>
            <Products title={"Phone"} price={"30k"}/>
            <Products title={"Phone"} price={"30000"}/>
        </div>
    );
}

export default ProductTab;