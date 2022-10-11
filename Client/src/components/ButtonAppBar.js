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
            News
          </Typography>

          <Button color="inherit">Login</Button>

          <Button color="inherit">
            <Link to="/Home">Home</Link>
          </Button>
          <Button color="inherit">
            <Link to="/OnOrder">On Order</Link>
          </Button>
          <Button color="inherit">
            <Link to="/ToOrder">To Be Ordered</Link>
          </Button>
          <Button color="inherit">
            <Link to="/OutOfStock">86 List</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
