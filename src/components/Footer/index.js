import React, { Component } from "react";

import Footer from "grommet/components/Footer";
import Box from "grommet/components/Box";
import Menu from "grommet/components/Menu";
import Anchor from "grommet/components/Anchor";
import SocialShare from "grommet/components/SocialShare";

export default class FooterComponent extends Component {
  render() {
    return (
      <Footer
        direction="row"
        size="small"
        pad={{ horizontal: "medium", vertical: "small" }}
        style={{
          borderTop: "1px solid rgba(0,0,0,0.1)"
        }}
      >
        <Box basis="1/3" pad={{ between: "medium" }} align="start">
          <span className="secondary">
            &copy; {new Date().getFullYear()} Company Name s.r.o.
          </span>
        </Box>
        <Box basis="1/3" align="center" pad={{ between: "medium" }}>
          <Menu direction="row" size="small" dropAlign={{ right: "right" }}>
            <Anchor href="#">Support</Anchor>
            <Anchor href="#">Contact</Anchor>
            <Anchor href="#">About</Anchor>
          </Menu>
        </Box>
        <Box
          basis="1/3"
          direction="row"
          align="end"
          pad={{ between: "medium" }}
          justify="end"
        >
          <SocialShare link="patrik" type="email" />
          <SocialShare
            link="https://www.facebook.com/sterbaPatrik"
            type="facebook"
          />
          <SocialShare
            link="https://www.facebook.com/sterbaPatrik"
            type="twitter"
          />
        </Box>
      </Footer>
    );
  }
}
