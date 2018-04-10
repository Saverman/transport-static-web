import React from "react";

import Header from "grommet/components/Header";
import Title from "grommet/components/Title";

import Logo from "./Logo";
import Footer from "../Footer";
import Menu from "./Menu";

export default class HeaderComponent extends React.PureComponent {
  render() {
    return (
      <Header
        fixed={true}
        justify="between"
        pad={{ horizontal: "medium", vertical: "small" }}
      >
        <Title>
          <Logo />
        </Title>
        <Menu />
      </Header>
    );
  }
}
