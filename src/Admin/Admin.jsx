import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import PersonIcon from "@mui/icons-material/Person";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import ListItemText from "@mui/material/ListItemText";
import Dashboard from "./components/Dashboard";
import CreateProductForm from "./components/CreateProductForm";
import ProductsTable from "./components/ProductsTable";
import OrdersTable from "./components/OrdersTable";
import CustomersTable from "./components/CustomersTable";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <SpaceDashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <SpaceDashboardIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <SpaceDashboardIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <SpaceDashboardIcon /> },
  {
    name: "AddProduct",
    path: "/admin/product/create",
    icon: <SpaceDashboardIcon />,
  },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <>
        {/* {isLargeScreen && <Toolbar />} */}
        <List>
          {menu.map((item, index) => (
            <ListItem
              key={item.name}
              disablePadding
              onClick={() => navigate(item.path)}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <div className="relative flex h-[100vh]">
      <CssBaseline />
      <div className="shadow-lg shadow-gray-400 w-[15%] border-r border-r-gray-300 h-full fixed">
        {drawer}
      </div>

      <div className="w-[85%] h-full ml-[15%]">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/product/create" element={<CreateProductForm />}></Route>
          <Route path="/products" element={<ProductsTable />}></Route>
          <Route path="/orders" element={<OrdersTable />}></Route>
          <Route path="/customers" element={<CustomersTable />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
