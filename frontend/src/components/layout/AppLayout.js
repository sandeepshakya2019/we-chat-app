import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid } from "@mui/material";

// Higher order components
const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Header />
        <Grid container heigth={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
            height={"100%"}
          >
            Chat List
          </Grid>
          <Grid item xs={12} sm={4} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
            }}
            height={"100%"}
          >
            Profile
          </Grid>
        </Grid>

        <Footer />
      </>
    );
  };
};
export default AppLayout;
