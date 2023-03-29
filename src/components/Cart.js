import React from "react";
import "../styles/Cart.css";

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct }) => {
  console.log(handleAddProduct);
  return (
    <div className="aside">
      <div className="cart-items-header">
        <div className="cart-icon">
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div className="cart-price-name">
          <p>PANIER</p>
          <p>
            {cartItems.reduce((a, c) => a + c.price * c.quantity, 0).toFixed(2)}{" "}
            Dhs
          </p>
        </div>
        <div className="cart-length">
          <span>{cartItems.reduce((a, c) => a + c.quantity, 0)}</span>
        </div>
      </div>
      {cartItems.length === 0 && <div className="cart-items-empty"></div>}

      <div
        className="cart-body"
        style={{
          position: "fixed",
          top: "120px",
          right: "0",
          bottom: "200px",
          margin: "auto",
          paddingLeft: "15px",
          overflow: "auto",
          minWidth: "22%",
        }}
      >
        <div>
          <h3 style={{ color: "#555a6f", paddingTop: "0px" }}>COMMANDE</h3>
        </div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-items-list">
            <div className="cart-image">
              <img
                className="cart-items-image"
                src={item.image}
                alt={item.nom}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <div
                className="cart-item-name"
                style={{ minWidth: "190px", maxWidth: "191px" }}
              >
                <h6 style={{ color: "#555a6f", fontWeight: "800" }}>
                  {item.name}
                </h6>
                <h6
                  style={{
                    color: "#38807d",
                    marginTop: "2px",
                    marginBottom: "2px",
                  }}
                >
                  {item.category}
                </h6>
                <p
                  style={{
                    fontSize: "1.2em",
                    fontWeight: "bold",
                    color: "#313a5e",
                  }}
                >
                  {" "}
                  {item.price} Dhs
                </p>
              </div>
              <div className="cart-item-function">
                <button
                  className="cart-item-remove"
                  onClick={() => handleRemoveProduct(item)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="cart-item-add"
                  onClick={() => handleAddProduct(item)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="cart-items-footer"
        style={{
          position: "fixed",
          bottom: "0",
          right: "0",
          padding: "10px",
          margin: "10px",
          minWidth: "22%",
          borderTop: "10px solid transparent",
          boxShadow: "0px -4px 3px rgba(50, 50, 50, 0.75)",
        }}
      >
        <div className="cart-items-total">
          <p style={{}}>
            SOUS-TOTAL{" "}
            {cartItems.reduce((a, c) => a + c.price * c.quantity, 0).toFixed(2)}{" "}
            Dhs
          </p>
          <p>FRAIS DE LIVRAISON 10 Dhs</p>
          <p>
            TOTAL{" "}
            {(
              cartItems.reduce((a, c) => a + c.price * c.quantity, 0) + 10
            ).toFixed(2)}{" "}
            Dhs
          </p>
          <button
            className="cart-items-checkout"
            style={{
              backgroundColor: "#0a5551",
              width: "80%",
              height: "40px",
              borderRadius: "14px",
              border: "none",
            }}
          >
            COMMANDER
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
