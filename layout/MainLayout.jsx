import React from "react";
import { Container } from "reactstrap";

const MainLayout = props => {
  const { children } = props;
  return (
    <Container fluid className="wrapper">
      {children}
    </Container>
  );
};

export default MainLayout;
