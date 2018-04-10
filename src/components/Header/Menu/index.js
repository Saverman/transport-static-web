import React from "react";
import Link from "gatsby-link";

import Box from "grommet/components/Box";
import Menu from "grommet/components/Menu";
import Anchor from "grommet/components/Anchor";
import Actions from "grommet/components/icons/base/Actions";

export default class MenuComponent extends React.PureComponent {
  render() {
    return (
      <Box direction="row" align="center" pad={{ between: "medium" }}>
        <Menu direction="row" size="small" dropAlign={{ right: "right" }}>
          <Link to="/about" className="menu-link">
            About
          </Link>
          <Link to="/our-services" className="menu-link">
            Services
          </Link>
          <Link to="/references" className="menu-link">
            References
          </Link>
          <Link to="/career" className="menu-link">
            Career
          </Link>
          <Link to="/contact" className="menu-link">
            Contact
          </Link>
        </Menu>
      </Box>
    );
  }
}
