import React from "react";
import Link from "gatsby-link";

// Grommet
import Image from "grommet/components/Image";

// Image
import logo from "../../../images/logo.png";

const Logo = () => (
  <Link to="/">
    <Image src={logo} full={true} alt="transport-logo" />
  </Link>
);

export default Logo;
