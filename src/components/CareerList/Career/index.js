import React from "react";

// Grommet
import Label from "grommet/components/Label";
import Paragraph from "grommet/components/Paragraph";
import Box from "grommet/components/Box";
import List from "grommet/components/List";
import ListItem from "grommet/components/ListItem";

// Custom components

export default class Career extends React.Component {
  render() {
    return (
      <Box>
        <Label align="start">Some Position Title</Label>
        <Paragraph
          align="start"
          style={{
            margin: 0,
            maxWidth: "1200px"
          }}
        >
          Lorem ipsum dolor amet aesthetic asymmetrical gastropub, typewriter
          brooklyn meggings cronut ugh XOXO next level celiac organic scenester
          slow-carb stumptown. Helvetica sartorial kitsch roof party, pitchfork
          migas DIY drinking vinegar shoreditch polaroid organic twee man braid.
        </Paragraph>
        <Box
          direction="row"
          justify="center"
          style={{
            width: "1200px",
            paddingTop: "42px"
          }}
        >
          <Box basis="1/2" direction="column">
            <Label
              align="start"
              style={{
                margin: "0 0 12px 0"
              }}
            >
              Requirements
            </Label>
            <List>
              <ListItem justify="between" separator="horizontal">
                <span>Alan</span>
                <span className="secondary">happy</span>
              </ListItem>
              <ListItem justify="between">
                <span>Chris</span>
                <span className="secondary">cool</span>
              </ListItem>
              <ListItem justify="between">
                <span>Eric</span>
                <span className="secondary">odd</span>
              </ListItem>
            </List>
          </Box>
          <Box basis="1/2" direction="column">
            <Label
              align="start"
              style={{
                margin: "0 0 12px 0"
              }}
            >
              We offer
            </Label>
            <List>
              <ListItem justify="between" separator="horizontal">
                <span>Alan</span>
                <span className="secondary">happy</span>
              </ListItem>
              <ListItem justify="between">
                <span>Chris</span>
                <span className="secondary">cool</span>
              </ListItem>
              <ListItem justify="between">
                <span>Eric</span>
                <span className="secondary">odd</span>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    );
  }
}
