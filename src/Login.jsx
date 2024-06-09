import React, { useState, useEffect } from "react";
import { TextField, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [identifier, setIdentifier] = useState(""); // Changed to identifier
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const validate = () => {
    let isValid = true;
    if (identifier === "" || identifier === null) {
      // Changed to identifier
      isValid = false;
      toast.warning("Please Enter Email or Phone Number"); // Updated error message
    }
    if (password === "" || password === null) {
      isValid = false;
      toast.warning("Please Enter Password");
    }
    return isValid;
  };

  const ProceedLoginusingAPI = (e) => {
    e.preventDefault();
    if (validate()) {
      const inputObj = { identifier, password }; // Changed to identifier
      // Proceed with your login API call
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="40vh"
      bgcolor="#f5f5f5"
    >
      <Box
        component="form"
        onSubmit={ProceedLoginusingAPI}
        bgcolor="white"
        p={3}
        borderRadius={2}
        boxShadow={3}
        maxWidth={400}
        width="100%"
      >
        <TextField
          label="Email or Phone Number" // Updated label
          placeholder="Enter Email or Phone Number" // Updated placeholder
          fullWidth
          required
          margin="normal"
          onChange={(e) => setIdentifier(e.target.value)} // Changed to setIdentifier
        />
        <TextField
          label="Password"
          placeholder="Enter Password"
          type="password"
          fullWidth
          required
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" color="primary" variant="contained" fullWidth>
          Sign in
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
