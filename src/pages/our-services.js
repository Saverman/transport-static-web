import React from "react";

// Grommet
import Paragraph from "grommet/components/Paragraph";
import Article from "grommet/components/Article";
import Section from "grommet/components/Section";
import Heading from "grommet/components/Heading";
import Label from "grommet/components/Label";
import Hero from "grommet/components/Hero";
import Box from "grommet/components/Box";
import Image from "grommet/components/Image";

// Custom components
import ServiceList from "../components/ServiceList";

// Images
import UserIcon from "../images/user-icon.png";
import CoverImage from "../images/cover_image1.jpg";

const headingStyle = {
  textTransform: "uppercase",
  fontSize: "72px"
};

export default class Services extends React.Component {
  render() {
    return (
      <div>
        <Hero
          size="small"
          background={<Image src={CoverImage} fit="cover" full={true} />}
          backgroundColorIndex="dark"
        >
          <Box direction="row" justify="center" align="center">
            <Heading margin="none" style={headingStyle}>
              Our Services
            </Heading>
          </Box>
        </Hero>
        <ServiceList />
      </div>
    );
  }
}
