import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Avatar,
} from "@mui/material";
import { useForm } from "react-hook-form";
// import { CameraAlt } from "@mui/icons-material";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "./YupResolverSchema/LoginSchema";
import { SignupSchema } from "./YupResolverSchema/SignupSchema";

function Login() {
  const inputRef = useRef(null);
  const [isLogin, setIsLogin] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(isLogin ? LoginSchema : SignupSchema),
  });

  function toogleLoginAndRegister() {
    setIsLogin(!isLogin);
  }

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log("fileObj is", fileObj);

    // event.target.value = null;
  };

  useEffect(() => {
    isLogin ? (document.title = "Login") : (document.title = "Signup");
  }, [isLogin]);

  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        display: "flex",
        // height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          margin: 4,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <>
          <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
            {isLogin ? "Login" : "Register"}{" "}
          </Typography>
          <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
            {!isLogin && (
              <Box
                display="flex"
                flexDirection={"column"}
                justifyContent="center"
                alignItems="center"
                sx={{ marginTop: "10px" }}
              >
                <input
                  style={{ display: "none" }}
                  ref={inputRef}
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                />
                <Avatar
                  sx={{
                    cursor: "pointer",
                    align: "center",
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                  onClick={() => inputRef.current.click()}
                />
              </Box>
            )}
            {!isLogin && (
              <TextField
                fullWidth
                error={errors.name ? true : false}
                {...register("name")}
                label="Name"
                name="name"
                margin={"normal"}
                variant="outlined"
                helperText={errors.name && errors.name.message}
              />
            )}
            {!isLogin && (
              <TextField
                fullWidth
                error={errors.bio ? true : false}
                {...register("bio")}
                label="Bio"
                name="bio"
                margin={"normal"}
                variant="outlined"
                helperText={errors.bio && errors.bio.message}
              />
            )}
            <TextField
              fullWidth
              error={errors.username ? true : false}
              {...register("username")}
              label="Username"
              margin={"normal"}
              variant="outlined"
              helperText={errors.username && errors.username.message}
            />

            <TextField
              fullWidth
              error={errors.password ? true : false}
              {...register("password")}
              label="Password"
              type="password"
              margin={"normal"}
              variant="outlined"
              helperText={errors.password && errors.password.message}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{ marginTop: "10px" }}
            >
              {isLogin ? "Login" : "Register"}
            </Button>
            <Typography
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              OR
            </Typography>
            <Button
              variant="text"
              color="primary"
              onClick={toogleLoginAndRegister}
              fullWidth
            >
              {!isLogin ? "Login" : "Register"}
            </Button>
          </form>
        </>
      </Paper>
    </Container>
  );
}

export default Login;
