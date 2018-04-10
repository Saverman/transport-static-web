import React from "react";

// Grommet
import Paragraph from "grommet/components/Paragraph";
import Label from "grommet/components/Label";
import Box from "grommet/components/Box";
import Tabs from "grommet/components/Tabs";
import Tab from "grommet/components/Tab";

// Custom components
import CareerBlock from "./Career";

export default class CareerList extends React.Component {
  render() {
    return (
      <Box
        pad="none"
        align="center"
        tag="center"
        separator="top"
        style={{
          padding: "22px 0"
        }}
      >
        <Tabs>
          <Tab title="Zlin">
            <CareerBlock />
            <CareerBlock />
            <CareerBlock />
            <CareerBlock />
            <CareerBlock />
          </Tab>
          <Tab title="Brno">
            <CareerBlock />
            <CareerBlock />
          </Tab>
          <Tab title="Ostrava">
            <CareerBlock />
          </Tab>
        </Tabs>
      </Box>
    );
  }
}
