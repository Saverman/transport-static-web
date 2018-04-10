import React from "react";

// Grommet
import Box from "grommet/components/Box";

// Custom components
import Reference from "./Reference";

export default class ReferenceList extends React.Component {
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
        <Reference />
        <Reference />
        <Reference />
        <Reference />
        <Reference />
      </Box>
    );
  }
}
