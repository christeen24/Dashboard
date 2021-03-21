import React, { useState } from "react";
import axios from "axios";
import {
  Grid,
  CssBaseline,
  TextField,
  Button,
  Typography,
  Box,
  Card,
  Container,
  Avatar,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";

// styles imports
import SigninStyles from "../../styles/SigninStyles.js";

export default function Signin(props) {
  const classes = SigninStyles();

  //use states
  const [formData, SetFormData] = useState({
    username: "",
    password: "",
  });
  const [redirect, SetRedirect] = useState(false);

  //helper text states
  const [usernameHelper, setUsernameHelper] = useState({
    err: false,
    helperText: "",
  });
  const [passwordHelper, setPasswordHelper] = useState({
    err: false,
    helperText: "",
  });

  const handleInputChange = (event, field) => {
    if (event.target.name === "username") {
      setUsernameHelper({ err: false, helperText: "" });
    }
    if (event.target.name === "password") {
      setPasswordHelper({ err: false, helperText: "" });
    }

    SetFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.username) {
      console.log("no username");
      setUsernameHelper({
        err: true,
        helperText: "Username is required",
      });
    }
    if (!formData.password) {
      console.log("no password");
      setPasswordHelper({
        err: true,
        helperText: "Password is required",
      });
    }

    if (formData.username && formData.password) {
      let fd = new FormData();
      fd.append("username", formData.username);
      fd.append("password", formData.password);
      axios
        .post("http://apps.avantrio.xyz:8010/api/user/login", fd)
        .then((response) => {
          if (response.token !== "") {
            SetRedirect(true);
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("auth-token", JSON.stringify(response.token));
            localStorage.setItem("username", formData.username);
            localStorage.setItem("password", formData.password);
            setTimeout(() => {}, 2000);
          } else {
          }

          if (response.token === "") {
            setTimeout(() => {}, 2000);
          }
        });
    }
  };

  if (redirect) {
    return <Redirect to="/home" />;
  }
  const login = localStorage.getItem("isLoggedIn");
  if (login) {
    return <Redirect to="/home" />;
  }
  return (
    <React.Fragment>
      {/* dynamic helmet for seo content update */}
      <Helmet>
        <title>Sign in</title>
        <meta name="Sign in" />
      </Helmet>
      {/* end of helmet */}
      {/* page body */}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              color="primary"
              onChange={handleInputChange}
              error={usernameHelper.err}
              helperText={usernameHelper.helperText}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color="primary"
              onChange={handleInputChange}
              error={passwordHelper.err}
              helperText={passwordHelper.helperText}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link className={classes.link} href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      {/* end of page body */}
    </React.Fragment>
  );
}
