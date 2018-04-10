import React, { Component } from "react";

import Card from "grommet/components/Card";
import Anchor from "grommet/components/Anchor";
import Box from "grommet/components/Box";

export default class Service extends Component {
  render() {
    const {
      thumbnail,
      label,
      heading,
      description,
      anchorHref,
      anchorLabel
    } = this.props;

    return (
      <Box pad="small">
        <Card
          textSize="xsmall"
          thumbnail={thumbnail}
          label={label}
          heading={heading}
          description={description}
        />
      </Box>
    );
  }
}
