import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);
  const history = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    const { password, email } = userDetails;

    if (userDetails.email.length < 1) {
      alert("Please enter your Emil before submitting the form.");
    } else if (userDetails.password.length < 1) {
      alert("Please enter your Password before submitting the form.");
    } else {
      if (users && users.length) {
        const userExsist = users.filter((item) => {
          return item.email === email && item.password === password;
        });
        if (userExsist.length) {
          history("/");
        } else {
          alert("Invalid email or password");
        }
      }
    }
  };

  const handleSignUp = () => {
    history("/signUp");
  };

  return (
    <div className="ecom-login-page-container">
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            boxShadow: 3,
            borderRadius: 2,
            px: 4,
            py: 4,
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#ffffff",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            sx={{ mt: 1 }}
            onSubmit={handleSubmit}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              size="small"
              color="secondary"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              size="small"
              autoComplete="current-password"
              color="secondary"
              onChange={handleChange}
            />
            <FormControlLabel
              control={
                <Checkbox size="small" value="remember" color="secondary" />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              size="small"
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item onClick={handleSignUp}>
                <Link href="#" className=" " variant="body2">
                  {"Don't have an account? SignUp"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      {/* <form onSubmit={handleSubmit} className='ecom-signup-form' method='/' >
            <h3>Sign Up</h3>
            <input className='ecom-login-input' required placeholder='Enter Your Name' name='name' onChange={handleChange} type='text' />
            <input className='ecom-login-input' required placeholder='Enter email' name='email' onChange={handleChange} type='email'  />
            <input className='ecom-login-input' required placeholder='' name='date' onChange={handleChange} type='date'  />
            <input className='ecom-login-input' required placeholder='password' name='password' onChange={handleChange} type='password'  />
            <button type='onsubmit'>Sign Up</button>
            <div className='ecom-login-account'>Already have an account? plz <Link to='/signIn'>signin </Link></div>
        </form> */}
    </div>
  );
};

export default Login;
