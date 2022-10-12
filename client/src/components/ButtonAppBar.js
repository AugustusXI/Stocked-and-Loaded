import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Stocked and Loaded
          </Typography>


          <Button color="inherit">
            <Link to="/login" style={{ textDecoration: "none", color: 'white' }}>
              Login
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/" style={{ textDecoration: "none", color: 'white' }}>
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/on-order" style={{ textDecoration: "none", color: 'white' }}>
              On Order
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/to-order" style={{ textDecoration: "none", color: 'white' }}>
              To Be Ordered
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/out-of-stock" style={{ textDecoration: "none", color: 'white' }}>
              86 List
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
