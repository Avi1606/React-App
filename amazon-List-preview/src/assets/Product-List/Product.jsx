import "./Product.css"
import Price from "../Price-Box/Price.jsx";

function Product({Title, Description,oprice,nprice}) {
    return (
        <div className="Product">
            <h1>{Title}</h1>
            <h1>{Description}</h1>
            < Price OldPrice={oprice} NewPrice={nprice} />
        </div>
    )
}

export default Product