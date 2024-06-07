import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import { useNavigate } from "react-router-dom";
import './AddToCart.css';

const AddToCart = ({ selectedProducts, onProductDelete, onProceed }) => {
  const navigate = useNavigate();

  const handleProductDelete = (productId) => {
    onProductDelete(productId);
  };

  const limitTitleLength = (title, limit) => {
    const words = title.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + " ...";
    }
    return title;
  };

  const formatPrice = (price) => {
    return price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const totalPrice = selectedProducts.reduce((total, product) => total + parseFloat(product.price), 0);

  const handleClick = () => {
    navigate('/deliveryadd');
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "blueviolet" }}>
        Keep shopping
      </h1>
      <div className="cart-container">
        {selectedProducts &&
          selectedProducts.map((product) => (
            <div key={product.id} className="cart-item">
              <Card style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="cart-image"
                />
                <CardContent style={{ flex: "1" }}>
                  <Typography variant="h6" component="div" className="cart-title">
                    {limitTitleLength(product.title, 3)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rs {formatPrice(parseFloat(product.price))}
                  </Typography>
                  <div className="cart-buttons">
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleProductDelete(product.id)}
                    >
                      Delete
                    </Button>
                    <Button variant="outlined" color="primary" onClick={handleClick}>
                      Buy Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Typography variant="h6" component="div">
          Total Price: Rs {formatPrice(totalPrice)}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default AddToCart;
