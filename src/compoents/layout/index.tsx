import { Container } from "@mui/material";
import Header from "../comon/header";
import { Outlet } from "react-router-dom";

import React from "react";

const Layout = () => {
  return (
    <Container disableGutters={true} maxWidth={false}  className="container">
      <Container maxWidth='lg'>
        <Header />
      </Container>
      <Container  maxWidth={false} >

        <Outlet />
      </Container>
    </Container>
  );
};

export default Layout;
