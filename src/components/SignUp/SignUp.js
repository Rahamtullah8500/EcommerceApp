import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SignUp = () => {
  const [userDetails, setUserDetails] = useState({
    firstName:'',
    lastName:'',
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const users = JSON.parse(localStorage.getItem("users"));
  //   const { password, email } = userDetails;

  //   if (users && users.length) {
  //     const userExsist = users.filter((item) => {
  //       return item.email === email && item.password === password;
  //     });
  //     if (userExsist.length) {
  //       history("/");
  //     } else {
  //       alert("Invalid email or password");
  //     }
  //   }
  // };

  const handleSignUp=(e)=>{
    e.preventDefault();
    if(userDetails.firstName.length < 1){
      alert("Please enter your First name before submitting the form.");
    }
    else if(userDetails.lastName.length < 1){
      alert("Please enter your Last name before submitting the form.");
    }
    else if(userDetails.email.length < 1){
      alert("Please enter your Email before submitting the form.");
    }
    else if(userDetails.password.length < 1){
      alert("Please enter your Password before submitting the form.");
    }
    else{
      const prevUsers = JSON.parse(localStorage.getItem("users"));
      if(prevUsers === null){
        localStorage.setItem('users',JSON.stringify([userDetails]))
      }
      else{
        localStorage.setItem("users", JSON.stringify([...prevUsers, userDetails]));
      }
      history("/login");
      alert("Successfully Registered, SignIn Proceed");
    }
  }

  const theme = createTheme();

  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  const handleSignIn = () => {
    history("/login");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="ecom-login-page-container">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: 3,
              px: 4,
              py: 2,
              background: "#ffffff",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} size="small">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h3" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSignUp}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    size="small"
                    color="secondary"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    size="small"
                    color="secondary"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    size="small"
                    color="secondary"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid sm={12} item>
                  <FormControl
                    sx={{ m: 0, width: "100%" }}
                    size="small"
                    variant="outlined"
                    color="secondary"
                  >
                    <InputLabel
                      htmlFor="outlined-adornment-password"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      size="small"
                      color="secondary"
                      onChange={handleChange}
                    >
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      onChange={handleChange}
                      required
                      endAdornment={
                        <InputAdornment position="end" size="small">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            size="small"
                            color="secondary"
                          >
                            {!showPassword ? (
                              <VisibilityOff size="small" />
                            ) : (
                              <Visibility size="small" />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    style={{ fontSize: "10px" }}
                    control={
                      <Checkbox
                        size="small"
                        value="allowExtraEmails"
                        color="secondary"
                      />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="small"
                sx={{ mt: 3, mb: 2 }}
                color="secondary"
                // onClick={handleSignUp}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item onClick={handleSignIn}>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>

      {/* <form onSubmit={handleSubmit} className="ecom-signup-form" method="/">
        <h3>Sign In</h3>
        <input
          className="ecom-login-input"
          required
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
          type="email"
        />
        <input
          className="ecom-login-input"
          required
          placeholder="password"
          name="password"
          onChange={handleChange}
          type="password"
        />
        <button type="onsubmit">Sign In</button>
        <div className="ecom-login-account">
          Do no't have an account? plz <Link to="/login">SignUp</Link>
        </div>
      </form> */}
    </div>
  );
};

export default SignUp;

// "@mui/styles": "^5.15.3",
