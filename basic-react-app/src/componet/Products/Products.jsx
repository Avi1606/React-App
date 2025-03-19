import "./Products.css";

function Products({title, price}) {
    // let Discount = price >10000 ? "Discounted Price" : "No Discount Available";
    let styles = {backgroundColor: price>10000 ?"black" : null};  // set it as camelCase
      return (
          <div className="Products" style={styles}>
              <p>{title}</p>
               <span>{price}</span>
              {price >10000 ? <p>Discount is 10%</p> : null}
          </div>
      );
}

export default Products;