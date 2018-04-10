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

// Images
import UserIcon from "../images/user-icon.png";
import CoverImage from "../images/cover_image4.jpg";

const headingStyle = {
  textTransform: "uppercase",
  fontSize: "72px"
};

export default class About extends React.Component {
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
              About us
            </Heading>
          </Box>
        </Hero>
        <Box align="center" justify="center">
          <Paragraph
            style={{
              maxWidth: "1200px",
              paddingLeft: "18px",
              margin: "32px 0",
              borderLeft: "4px solid grey"
            }}
            size="large"
          >
            Lorem ipsum dolor amet aesthetic asymmetrical gastropub, typewriter
            brooklyn meggings cronut ugh XOXO next level celiac organic
            scenester slow-carb stumptown. Helvetica sartorial kitsch roof
            party, pitchfork migas DIY drinking vinegar shoreditch polaroid
            organic twee man braid.
          </Paragraph>
          <Paragraph
            style={{
              maxWidth: "1200px",
              paddingLeft: "18px",
              margin: "32px 0"
            }}
          >
            Lorem ipsum dolor amet aesthetic asymmetrical gastropub, typewriter
            brooklyn meggings cronut ugh XOXO next level celiac organic
            scenester slow-carb stumptown. Helvetica sartorial kitsch roof
            party, pitchfork migas DIY drinking vinegar shoreditch polaroid
            organic twee man braid. Palo santo XOXO typewriter etsy blue bottle,
            cloud bread food truck retro pour-over meggings wayfarers actually
            kickstarter. Kombucha cold-pressed next level, keffiyeh waistcoat
            four loko blue bottle prism master cleanse freegan gochujang echo
            park. Selvage selfies letterpress +1 health goth tousled pug. Vinyl
            raw denim tousled humblebrag poutine kale chips coloring book
            leggings iPhone gochujang heirloom kitsch affogato lumbersexual.
            Lorem ipsum dolor amet aesthetic asymmetrical gastropub, typewriter
            brooklyn meggings cronut ugh XOXO next level celiac organic
            scenester slow-carb stumptown.
          </Paragraph>
          <Paragraph
            style={{
              maxWidth: "1200px",
              paddingLeft: "18px",
              margin: "32px 0"
            }}
          >
            Lorem ipsum dolor amet aesthetic asymmetrical gastropub, typewriter
            brooklyn meggings cronut ugh XOXO next level celiac organic
            scenester slow-carb stumptown. Helvetica sartorial kitsch roof
            party, pitchfork migas DIY drinking vinegar shoreditch polaroid
            organic twee man braid. Palo santo XOXO typewriter etsy blue bottle,
            cloud bread food truck retro pour-over meggings wayfarers actually
            kickstarter. Kombucha cold-pressed next level, keffiyeh waistcoat
            four loko blue bottle prism master cleanse freegan gochujang echo
            park. Selvage selfies letterpress +1 health goth tousled pug.
          </Paragraph>
        </Box>
        <Box
          pad="none"
          align="center"
          tag="center"
          separator="top"
          style={{
            padding: "22px 0"
          }}
        >
          <Box direction="row" justify="center">
            <Box basis="1/3" direction="column">
              <Image
                src={UserIcon}
                alt="User icon"
                size="small"
                width="100"
                height="200"
              />
            </Box>
            <Box basis="2/3" direction="column">
              <Heading>Some Name</Heading>
              <Label>CEO of this company</Label>
              <Paragraph
                style={{
                  paddingLeft: "18px"
                }}
              >
                Lorem ipsum dolor amet aesthetic asymmetrical gastropub,
                typewriter brooklyn meggings cronut ugh XOXO next level celiac
                organic scenester slow-carb stumptown. Helvetica sartorial
                kitsch roof party, pitchfork migas DIY drinking vinegar
                shoreditch polaroid organic twee man braid. Palo santo XOXO
                typewriter etsy blue bottle, cloud bread food truck retro
                pour-over meggings wayfarers actually kickstarter.
              </Paragraph>
            </Box>
          </Box>
        </Box>
      </div>
    );
  }
}
