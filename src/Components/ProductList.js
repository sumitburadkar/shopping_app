import "../App.css";

function ProductList({ product, addToCart }) {
  return (
    <div className="flex">
      {product.map((productItem, productIndex) => {
        return (
          <div style={{ width: "20%" }}>
            <div className="product-item">
              <img src={productItem.url} width="90%" />
              <p>
                {productItem.name} | {productItem.category}{" "}
              </p>
              <p> {productItem.seller} </p>
              <p> Rs. {productItem.price} /-</p>
              <button
                className="addbutton"
                onClick={() => addToCart(productItem)}
              >
                <span>
                  <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                </span>{" "}
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
