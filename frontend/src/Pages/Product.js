import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

const Product = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProductCount, setSelectedProductCount] = useState(0);
  const { incrementCounter, setSelectedProducts } = props;

  const products = [
    {
      id: 1,
      title: "Whiskas Ocean Fish Flavour Adult Cat Dry Food",
      image:
        "https://supertails.com/cdn/shop/products/1_88adc76d-a171-4cfe-bd9d-6fcec38250eb.png?v=1700817567",
      price: "₹4,675",
    },
    {
      id: 2,
      title:
        "Sheba Chicken With Tuna In Gravy Rich Premium Adult Fine Cat Wet Food",
      image:
        "https://supertails.com/cdn/shop/files/HenloComboTopper_18_d639e373-0a6b-49d0-a667-b35f81cd0947.png?v=1711797033",
      price: "₹3,634",
    },
    {
      id: 3,
      title: "Bark Out Loud by Vivaldis Pillow Cat Treats",
      image:
        "https://supertails.com/cdn/shop/files/Frame42_f6734490-6e00-4877-95c8-fa9ab493ffb0.png?v=1700812918",
      price: "₹638",
    },
    {
      id: 4,
      title: "Me O Creamy Crab Cat Treats",
      image:
        "https://supertails.com/cdn/shop/products/Frame1_1a36697d-9749-4253-9789-ffcc82dff8e0-253075.png?v=1696556257",
      price: "₹1,173",
    },

    {
      id: 5,
      title: "GiGwi Dental Mesh Seahorse Toy for Cats (Blue)",
      image: "https://supertails.com/cdn/shop/files/petter_31.png?v=1696522439",
      price: "₹439",
    },

    {
      id: 6,
      title: "Fofos Geek Ball Toy for Cats",
      image:
        "https://supertails.com/cdn/shop/files/Frame10976_73807a5d-9933-4545-8921-516d37aed57c.png?v=1707741810",
      price: "₹1,764",
    },
    {
      id: 7,
      title: "Skatrs Say Cheese Scratcher Pad Toy for Cats (Length 41cm)",
      image:
        "https://supertails.com/cdn/shop/files/SAKTRStree_10.png?v=1711693142",
      price: "₹379",
    },
    {
      id: 8,
      title: "QPets Automatic Water Fountain with LED Light for Pets (Grey)",
      image: "https://supertails.com/cdn/shop/files/image1426.png?v=1710230916",
      price: "₹1,393",
    },
    {
      id: 9,
      title: "Scoopy Quick Clumping Lavender Scented Cat Litter",
      image:
        "https://supertails.com/cdn/shop/files/SKATRSTOYS-2024-05-16T110249.521_1800x1800.png?v=1715837874",
      price: "₹299",
    },
    {
      id: 10,
      title: "Drools Ocean Fish Adult Cat Dry Food",
      image:
        "https://supertails.com/cdn/shop/files/SKUTIlesOffer.png?v=1713771403",
      price: "₹3,399",
    },
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const searchBarStyle = {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  };

  const inputStyle = {
    width: "300px",
    fontSize: "24px",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "10px",
  };

  const handleAddToCart = (product) => {
    const extractPrice = (price) => {
      if (typeof price === "string") {
        const matches = price.match(/₹([\d,]+)/);
        if (matches) {
          return parseFloat(matches[1].replace(/,/g, ""));
        }
      }
      return 0;
    };

    const price = extractPrice(product.price);

    setSelectedProducts((prevSelectedProducts) => [
      ...prevSelectedProducts,
      { ...product, price: price },
    ]);
    setSelectedProductCount(selectedProductCount + 1);
    incrementCounter();
  };

  return (
    <>
      <div style={searchBarStyle}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          style={inputStyle}
        />
      </div>
      <Grid container spacing={2} marginTop={2}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Paper
              style={{
                padding: 16,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "80%", height: "auto", marginBottom: "8px" }}
              />
              <Typography variant="h6" style={{ flex: 1, textAlign: "center" }}>
                {product.title}
              </Typography>
              <Typography
                variant="body2"
                style={{
                  color: "black",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                {product.price}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "8px", width: "80%" }}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Product;
