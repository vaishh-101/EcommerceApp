import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddToCart from "./Pages/AddToCart";
import Checkout from "./Pages/Checkout";
import ConsultAVet from "./Pages/ConsultAVet";
import Contact from "./Pages/Contact";
import Dashboard from "./Pages/Dashboard";
import HealthCare from "./Pages/HealthCare";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import Bill from "./Pages/Proceedtobuy/bill";
import DeliveryAdd from "./Pages/Proceedtobuy/deliveryadd";
import Ordered from "./Pages/Proceedtobuy/ordered";
import Payment from "./Pages/Proceedtobuy/payment";
import Product from "./Pages/Product";

function Routing() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [counter, setCounter] = useState(0);
  const handleProductDelete = (productId) => {
    const updatedProducts = selectedProducts.filter(
      (product) => product.id !== productId
    );
    setSelectedProducts(updatedProducts);
    setCounter(counter - 1);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard counter={counter} />}>
          <Route index element={<Main />} />
          <Route
            path="product"
            element={
              <Product
                incrementCounter={incrementCounter}
                selectedProducts={selectedProducts}
                setSelectedProducts={setSelectedProducts}
              />
            }
          />
          <Route
            path="cart"
            element={
              <AddToCart
                selectedProducts={selectedProducts}
                onProductDelete={handleProductDelete}
              />
            }
          />
          <Route path="checkout" element={<Checkout />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="vet" element={<ConsultAVet />} />
          <Route
            path="health"
            element={
              <HealthCare
                incrementCounter={incrementCounter}
                selectedProducts={selectedProducts}
                setSelectedProducts={setSelectedProducts}
              />
            }
          />
          <Route path="deliveryadd" element={<DeliveryAdd />} />
          <Route
            path="payment"
            element={<Payment selectedProducts={selectedProducts} />}
          />
          <Route path="bill" element={<Bill />} />
          <Route path="ordered" element={<Ordered />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Routing;
