import React from "react";
import { Containermain, Content, Output } from "./styles";

const MainLayout = ({ children }) => {
  return (
    <Containermain className="test">
      <Content>
        {children}
        <Output>output</Output>
      </Content>
    </Containermain>
  );
};

export default MainLayout;
