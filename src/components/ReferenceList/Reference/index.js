import React from "react";

// Grommet
import Paragraph from "grommet/components/Paragraph";
import Label from "grommet/components/Label";
import Box from "grommet/components/Box";
import Image from "grommet/components/Image";

// Custom components

// Images
import RefrenceImage from "../../../images/reference-image.png";

export default class Reference extends React.Component {
  render() {
    return (
      <Box
        direction="row"
        justify="center"
        style={{
          width: "1200px",
          padding: "42px 0 12px 0",
          borderBottom: "1px solid rgba(0,0,0,0.1)"
        }}
      >
        <Box basis="1/4" direction="column">
          <Image src={RefrenceImage} alt="User icon" size="small" />
        </Box>
        <Box basis="3/4" direction="column">
          <Label
            align="start"
            style={{
              margin: "0 0 12px 0"
            }}
          >
            Some Fake Company Reviewer
          </Label>
          <Paragraph
            align="start"
            style={{
              margin: 0,
              maxWidth: "1200px"
            }}
          >
            Lorem ipsum dolor amet aesthetic asymmetrical gastropub, typewriter
            brooklyn meggings cronut ugh XOXO next level celiac organic
            scenester slow-carb stumptown. Helvetica sartorial kitsch roof
            party, pitchfork migas DIY drinking vinegar shoreditch polaroid
            organic twee man braid. Palo santo XOXO typewriter etsy blue bottle,
            cloud bread food truck retro pour-over meggings wayfarers actually
            kickstarter. Palo santo XOXO typewriter etsy blue bottle, cloud
            bread food truck retro pour-over meggings wayfarers actually
            kickstarter.
          </Paragraph>
          <Label align="end">Ing. Fake name</Label>
        </Box>
      </Box>
    );
  }
}
