import React from "react";

// Grommet
import Header from "grommet/components/Header";
import Heading from "grommet/components/Heading";
import Hero from "grommet/components/Hero";
import Box from "grommet/components/Box";
import Image from "grommet/components/Image";

// Custom components
import ContactForm from "../components/ContactForm";
import MapComponent from "../components/MapComponent";

// Images
import UserIcon from "../images/user-icon.png";
import CoverImage from "../images/contact_cover.jpg";

const headingStyle = {
  textTransform: "uppercase",
  fontSize: "72px"
};

export default class Career extends React.Component {
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
              Contact Us
            </Heading>
          </Box>
        </Hero>
        <Box direction="row">
          <Box
            basis="1/2"
            style={{
              marginTop: "6px"
            }}
          >
            <ContactForm />
          </Box>
          <Box basis="1/2">
            <Box
              align="center"
              pad="none"
              tag="center"
              style={{
                padding: "22px 0"
              }}
            >
              <Header>
                <Heading tag="h3">Where can you find us</Heading>
              </Header>
            </Box>
            <Box direction="row" justify="center" align="center">
              <MapComponent />
            </Box>
          </Box>
        </Box>
      </div>
    );
  }
}
