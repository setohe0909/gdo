import React from "react";
import styled from "@emotion/styled";

import * as routes from "./constants/routes";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import MainContainer from "./components/main";
import NotFound from "./components/NotFound";
import MainLayout from "./layout";

export const Header = styled.div`
  height: 60px;
  background: #3b719f;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 20px;
  font-weight: 600;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  height: 80px;
  background: #242323;
  font-size: 20px;
  color: white;
  width: 100%;
  display: flex;
  align-items: center;

  strong {
    margin-left: 20px;
  }
`;

const App = () => {
  return (
    <Router>
      <Header>GDO</Header>
      <MainLayout>
        <Switch>
          <Route exact path={routes.MAIN} component={MainContainer} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
      <Footer>
        <strong>Footer</strong>
      </Footer>
    </Router>
  );
};

export default App;
