import React, { Component } from "react";

// Grommet
import Box from "grommet/components/Box";
import Value from "grommet/components/Value";

// Custom components
import Service from "./Service";

// Images
import CoverImage1 from "../../images/cover_image10.jpg";
import CoverImage2 from "../../images/cover_image4.jpg";
import CoverImage3 from "../../images/cover_image3.jpg";
import CoverImage4 from "../../images/cover_image2.jpg";
import CoverImage5 from "../../images/cover_image7.jpg";
import CoverImage6 from "../../images/cover_image5.jpg";

export default class ServiceList extends Component {
  render() {
    return (
      <Box
        direction="row"
        justify="center"
        align="center"
        wrap={true}
        pad="medium"
        margin="small"
        colorIndex="light-2"
      >
        <Service
          thumbnail={CoverImage1}
          label="Some Label"
          heading="Some Heading"
          description="Lorem ipsum dolor mater....orem ipsum dolor mater....orem ipsum dolor mater....orem ipsum dolor mater....orem ipsum dolor mater...."
        />
        <Service
          thumbnail={CoverImage2}
          label="Some Label"
          heading="Some Heading"
          description="Lorem ipsum dolor mater....orem ipsum dolor mater....orem ipsum dolor mater.....orem ipsum dolor mater....orem ipsum dolor mater...."
        />
        <Service
          thumbnail={CoverImage3}
          label="Some Label"
          heading="Some Heading"
          description="Lorem ipsum dolor mater....orem ipsum dolor mater....orem ipsum dolor mater....orem ipsum dolor mater....orem ipsum dolor mater...."
          anchorHref="/"
        />
        <Service
          thumbnail={CoverImage4}
          label="Some Label"
          heading="Some Heading"
          description="Lorem ipsum dolor mater....orem ipsum dolor mater....orem ipsum dolor mater....orem ipsum dolor mater....orem ipsum dolor mater...."
        />
        <Service
          thumbnail={CoverImage5}
          label="Some Label"
          heading="Some Heading"
          description="Lorem ipsum dolor mater....orem ipsum dolor mater....orem ipsum dolor mater....orem ipsum dolor mater....orem ipsum dolor mater....."
        />
        <Service
          thumbnail={CoverImage6}
          label="Some Label"
          heading="Some Heading"
          description="Lorem ipsum dolor mater....orem ipsum dolor mater....orem ipsum dolor mater....orem ipsum dolor mater....orem ipsum dolor mater...."
        />
      </Box>
    );
  }
}
