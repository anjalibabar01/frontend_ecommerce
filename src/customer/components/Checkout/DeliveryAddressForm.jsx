// DeliveryAddressForm.jsx
import React from "react";
import { Box, Button, Paper, TextField } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";

const DeliveryAddressForm = ({ onDeliverHere }) => {
  const [editingAddress, setEditingAddress] = React.useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "98%",
          maxWidth: "1400px",
          minHeight: "500px",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        {/* Left side: show entered address preview */}
        <Box
          sx={{
            flex: { xs: "none", md: "1 1 50%" },
            bgcolor: "#fafafa",
            borderRight: { xs: "none", md: "1px solid #eee" },
            p: 3,
            minWidth: 300,
          }}
        >
          <AddressCard address={editingAddress} />
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 3, width: "100%" }}
            onClick={() => onDeliverHere(editingAddress)}
          >
            Deliver Here
          </Button>
        </Box>

        {/* Right side: form */}
        <Box
          sx={{
            flex: { xs: "none", md: "1 1 50%" },
            bgcolor: "#fff",
            p: 4,
            minWidth: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                mb: 2,
              }}
            >
              <TextField
                label="First Name"
                name="firstName"
                autoComplete="given-name"
                fullWidth
                required
                value={editingAddress.firstName}
                onChange={handleChange}
              />
              <TextField
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                fullWidth
                required
                value={editingAddress.lastName}
                onChange={handleChange}
              />
            </Box>
            <TextField
              label="Address"
              name="streetAddress"
              autoComplete="address"
              fullWidth
              multiline
              rows={4}
              required
              value={editingAddress.streetAddress}
              onChange={handleChange}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                mb: 2,
                mt: 2,
              }}
            >
              <TextField
                label="City"
                name="city"
                autoComplete="city"
                fullWidth
                required
                value={editingAddress.city}
                onChange={handleChange}
              />
              <TextField
                label="State/Province/Region"
                name="state"
                autoComplete="state"
                fullWidth
                required
                value={editingAddress.state}
                onChange={handleChange}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                mb: 2,
                mt: 2,
              }}
            >
              <TextField
                label="Zip / Postal Code"
                name="zipCode"
                autoComplete="zip"
                fullWidth
                required
                value={editingAddress.zipCode}
                onChange={handleChange}
              />
              <TextField
                label="Phone Number"
                name="mobile"
                autoComplete="phoneNumber"
                fullWidth
                required
                value={editingAddress.mobile}
                onChange={handleChange}
              />
            </Box>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mt: 3, width: "100%" }}
              type="submit"
            >
              Change Address
            </Button>
          </form>
        </Box>
      </Paper>
    </Box>
  );
};

export default DeliveryAddressForm;
