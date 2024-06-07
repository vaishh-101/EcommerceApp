import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

const HealthCare = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProductCount, setSelectedProductCount] = useState(0);
  const { incrementCounter, setSelectedProducts } = props;

  const products = [
    {
      id: 1,
      title: "Furlicks Gut Health Supplement for Cats and Dogs",
      image:
        "https://supertails.com/cdn/shop/products/8908012692768_11-698168.png?v=1696436568",
      price: "₹439",
    },
    {
      id: 2,
      title:
        "Dr Goel's Diabosyz Jumbo Kit for Dogs and Cats",
      image:
        "https://supertails.com/cdn/shop/files/ph-2024-05-27T192458.759.jpg?v=1716818121",
      price: "₹450",
    },
    {
      id: 3,
      title: "Dr Goel's Diafine for Dogs and Cats (20ml)",
      image:
        "https://supertails.com/cdn/shop/files/ph-2024-05-23T191034.066.jpg?v=1716471675",
      price: "₹150",
    },
    {
      id: 4,
      title: "Vetricare Digestive Syrup for Dogs and Cats (100ml)",
      image:
        "https://supertails.com/cdn/shop/files/Pharmacy_51_b4ca9af0-3d35-4a66-bcb3-6e33c0e6a9af.png?v=1698488078",
      price: "₹370",
    },

    {
      id: 5,
      title: "Venkys Sensium Powder Feed Supplement for Dogs and Cats (200g)",
      image: "https://supertails.com/cdn/shop/files/Pharmacy_67_64798fa5-6ac0-44ec-92d8-44a47dbcaa33.png?v=1696465098",
      price: "₹400",
    },

    {
      id: 6,
      title: "Vetina Cat Laxative (60g) and Areion Vet Feli D Deworming Suspension (15ml) Combo",
      image:
        "https://supertails.com/cdn/shop/files/COMBO0050STPH.jpg?v=1708084495",
      price: "₹980",
    },
    {
      id: 7,
      title: "Dr Goel's Dermisule for Dogs and Cats (30ml)",
      image:
        "https://supertails.com/cdn/shop/files/ph-2024-05-20T120620.026.jpg?v=1716187037",
      price: "₹350",
    },
    {
      id: 8,
      title: "Natural Remedies Natgut Digestive Tablets for Dogs and Cats",
      image: "https://supertails.com/cdn/shop/files/Frame106722541.png?v=1702364084",
      price: "₹585",
    },
    {
      id: 9,
      title: "Unleash Wellness Jolly Gut Pre and Pro Biotic Supplement for Dogs and Cats",
      image:
        "https://supertails.com/cdn/shop/files/102.png?v=1707126895",
      price: "₹585",
    },
    {
      id: 10,
      title: "Doggie Dabbas Gut Buddy for Dogs and Cats",
      image:
        "https://supertails.com/cdn/shop/products/Frame1-2022-10-03T132536.638-362791.png?v=1696488930",
      price: "₹339",
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

export default HealthCare;
