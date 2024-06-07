import { DirectionsRun, LocalHospital, Pets, ShoppingCart } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import PawIcon from "@mui/icons-material/Pets";
import PhoneIcon from "@mui/icons-material/Phone";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import img1 from "../Assets/2.png";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import { default as React, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const navBarStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const rightCornerStyles = {
  display: "flex",
  alignItems: "center",
};

const logoStyles = {
  width: "50px",
  height: "40px",
};
const dashboardStyle1 = {
  backgroundColor: "#8A2BE2",
};

const dashboardStyle = {
  // backgroundColor: '#AB274F',
};

function Dashboard(props) {
  // const userName = "John Doe";
  const { counter } = props;

  let navigate = useNavigate();
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  
const animalitem = [
  { text: "General information" },
  { text: "About the shelter" },
  { text: "Statistic data" },
  { text: "Job" },
  { text: "Tenders" },
  { text: "Contact" },
];

const vetitem = [
  { text: "When your pet is missing" },
  { text: "Recently found" },
  { text: "How to adopt" },
  { text: "Pets for adoption" },
  { text: "Material Gifts" },
  { text: "Help with Walks" },
  { text: "Volunteer Activities" },
];


  return (
    <>
      <div style={dashboardStyle}>
        <AppBar position="static" sx={{ backgroundColor: "#8A2BE2" }}>
          <Toolbar style={navBarStyles}>
            <Hidden mdUp>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <img src={img1} alt="Logo" style={logoStyles} />
            <div>
              <Hidden smDown>
                <Button component={Link} to="/" color="inherit">
                  Home
                </Button>
                <Button component={Link} to="/product" color="inherit">
                  Product
                </Button>
                <Button component={Link} to="/vet" color="inherit">
                  Consult a Vet
                </Button>

                <Button component={Link} to="/contact" color="inherit">
                  Contact Us
                </Button>
                <Button component={Link} to="/health" color="inherit">
                  HealthCare
                </Button>
              </Hidden>
            </div>
            <div style={rightCornerStyles}>
              <Hidden mdUp>
                <div style={{ marginLeft: "auto" }}>
                  <IconButton
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenuOpen}
                  ></IconButton>
                </div>
              </Hidden>
            
                <>
                  <IconButton
                    component={Link}
                    to="/cart"
                    color="inherit"
                    style={{ marginLeft: "20px" }}
                  >
                    <ShoppingCart />
                    {/* {counter > 0 && <span style={{ marginLeft: "8px" }}>{counter}</span>} */}
                    {counter > 0 && (
                      <span style={{ marginLeft: "8px" }}>{counter}</span>
                    )}
                  </IconButton>

                  <Avatar
                    style={{ marginLeft: "20px" }}
                    // alt={userName}
                    src="/broken-image.jpg"
                  ></Avatar>
                  <ListItemIcon
                    style={{ marginLeft: "20px" }}
                    onClick={() => {
                      localStorage.clear();
                      Swal.fire({
                        title: "Logout!",
                        text: "You Logged out...👍",
                        icon: "success",
                      });

                      navigate("/login");
                    }}
                  >
                    <LogoutIcon style={{ color: "white" }} />
                  </ListItemIcon>
                </>
           
                <Button component={Link} to="/login" color="inherit">
                  Log In
                </Button>
              
            </div>
          </Toolbar>

          <Menu
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem
              component={Link}
              to="/dashboard/main"
              onClick={handleMenuClose}
            >
              Home
            </MenuItem>
            <MenuItem
              component={Link}
              to="/dashboard/product"
              onClick={handleMenuClose}
            >
              Product
            </MenuItem>
            <MenuItem
              component={Link}
              to="/dashboard/vetAppointment"
              onClick={handleMenuClose}
            >
              Consult a Vet
            </MenuItem>
            <MenuItem
              component={Link}
              to="/dashboard/contact"
              onClick={handleMenuClose}
            >
              Contact Us
            </MenuItem>
            <MenuItem
              component={Link}
              to="/dashboard/health"
              onClick={handleMenuClose}
            >
              HealthCare
            </MenuItem>
          </Menu>
        </AppBar>
        <div>
          <Outlet />
        </div>
        <div>
          <div style={dashboardStyle1}>
            <Grid container spacing={2} marginLeft={3} marginTop={10}>
              <Grid item xs={12} sm={6} md={3}>
                <Paper
                  style={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: "200px",
                    height: "200px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/new-templates/animal-shelter/logo.png"
                    height="100"
                    alt=""
                    loading="lazy"
                  />
                </Paper>
                <Typography
                  variant="h6"
                  style={{ marginTop: "10px", color: "white" }}
                >
                  Homeless Animal Shelter The budgetary unit of the Capital City
                  of Ahmednagar
                </Typography>
                <IconButton style={{ color: "white" }}>
                  <Pets />
                </IconButton>
                <IconButton style={{ color: "white" }}>
                  <DirectionsRun />
                </IconButton>
                <IconButton style={{ color: "white" }}>
                  <LocalHospital />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <h5 style={{ color: "white" }}> VetCare</h5>
                <List dense>
                  {vetitem.map((item, index) => (
                    <ListItem key={index}>
                      <IconButton color="primary">
                        <PawIcon fontSize="24px" style={{ color: "white" }} />
                      </IconButton>
                      <ListItemText>
                        <Typography variant="body2" color="white">
                          {item.text}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} sm={6} md={3} style={{ color: "white" }}>
                <h5>Animals</h5>
                <List dense>
                  {animalitem.map((item, index) => (
                    <ListItem key={index}>
                      <IconButton color="primary">
                        <PawIcon fontSize="24px" style={{ color: "white" }} />
                      </IconButton>
                      <ListItemText>
                        <Typography variant="body2" color="white">
                          {item.text}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} sm={6} md={3} style={{ color: "white" }}>
                <h5>Contact</h5>
                <Typography variant="body2" style={{ margin: "40px 0" }}>
                  <LocationOnIcon
                    fontSize="small"
                    style={{ verticalAlign: "middle" }}
                  />
                  Savedi, Ahmednagar
                </Typography>
                <Typography variant="body2" style={{ margin: "40px 0" }}>
                  <PhoneIcon
                    fontSize="small"
                    style={{ verticalAlign: "middle" }}
                  />
                  +91 960xxxxxxx
                </Typography>
                <Typography variant="body2" style={{ margin: "8px 0" }}>
                  <EmailIcon
                    fontSize="small"
                    style={{ verticalAlign: "middle" }}
                  />
                  vaishnavichoudhary200@gmail.com
                </Typography>
              </Grid>
            </Grid>
            <Paper
              style={{
                backgroundColor: "#8A2BE2",
                padding: "10px",
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              <Typography
                variant="body1"
                style={{ fontWeight: "bold", color: "white" }}
              >
                &copy;2024 Copyright: Vaishnavi Choudhary
              </Typography>
            </Paper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
