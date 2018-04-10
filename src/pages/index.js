import React from "react";
import Link from "gatsby-link";

// Grommet
import Paragraph from "grommet/components/Paragraph";
import Carousel from "grommet/components/Carousel";
import Box from "grommet/components/Box";
import Image from "grommet/components/Image";
import Label from "grommet/components/Label";
import Hero from "grommet/components/Hero";
import Heading from "grommet/components/Heading";

// Custom components
import ServiceList from "../components/ServiceList";

// Images
import CarouselImg1 from "../images/cover_image3.jpg";
import CarouselImg2 from "../images/cover_image4.jpg";
import CarouselImg3 from "../images/cover_image5.jpg";
import CarouselImg4 from "../images/cover_image7.jpg";
import CarouselImg5 from "../images/cover_image6.jpg";
import TruckIcon from "../images/truck-icon.png";

const headingStyle = {
  textTransform: "uppercase",
  fontSize: "48px"
};

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Carousel
          style={{
            height: "414px"
          }}
        >
          <Hero
            size="small"
            background={<Image src={CarouselImg1} fit="cover" />}
            backgroundColorIndex="dark"
          >
            <Box direction="row" justify="center" align="center">
              <Heading margin="none" style={headingStyle}>
                Career
              </Heading>
            </Box>
          </Hero>
          <Hero
            size="small"
            background={<Image src={CarouselImg2} fit="cover" />}
            backgroundColorIndex="dark"
          >
            <Box direction="row" justify="center" align="center">
              <Heading margin="none" style={headingStyle}>
                Career
              </Heading>
            </Box>
          </Hero>
          <Hero
            size="small"
            background={<Image src={CarouselImg3} fit="cover" />}
            backgroundColorIndex="dark"
          >
            <Box direction="row" justify="center" align="center">
              <Heading margin="none" style={headingStyle}>
                Career
              </Heading>
            </Box>
          </Hero>
          <Hero
            size="small"
            background={<Image src={CarouselImg4} fit="cover" />}
            backgroundColorIndex="dark"
          >
            <Box direction="row" justify="center" align="center">
              <Heading margin="none" style={headingStyle}>
                Career
              </Heading>
            </Box>
          </Hero>
          <Hero
            size="small"
            background={<Image src={CarouselImg5} fit="cover" />}
            backgroundColorIndex="dark"
          >
            <Box direction="row" justify="center" align="center">
              <Heading margin="none" style={headingStyle}>
                Career
              </Heading>
            </Box>
          </Hero>
        </Carousel>
        <Box
          direction="row"
          justify="center"
          align="center"
          wrap={true}
          colorIndex="ok"
        >
          <Box
            basis="1/5"
            direction="column"
            basis="small"
            className="transport-type"
          >
            <Image src={TruckIcon} size="small" />
            <Label align="center">International Transport</Label>
          </Box>
          <Box
            basis="1/5"
            direction="column"
            basis="small"
            className="transport-type"
          >
            <Image src={TruckIcon} />
            <Label align="center">Domestic Transport</Label>
          </Box>
          <Box
            basis="1/5"
            direction="column"
            basis="small"
            className="transport-type"
          >
            <Image src={TruckIcon} />
            <Label align="center">Oversized Transport</Label>
          </Box>
          <Box
            basis="1/5"
            direction="column"
            basis="small"
            className="transport-type"
          >
            <Image src={TruckIcon} />
            <Label align="center">Storage &amp; Manipulation</Label>
          </Box>
          <Box
            basis="1/5"
            direction="column"
            basis="small"
            className="transport-type"
          >
            <Image src={TruckIcon} />
            <Label align="center">Collection Services</Label>
          </Box>
        </Box>
        <Box align="center" justify="center">
          <Paragraph
            align="start"
            style={{
              maxWidth: "1200px",
              paddingLeft: "18px",
              margin: "32px 0",
              borderLeft: "4px solid grey"
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
          </Paragraph>
        </Box>
        <ServiceList />
      </div>
    );
  }
}
