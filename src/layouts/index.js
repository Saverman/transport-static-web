import React from "react";
import PropTypes from "prop-types";

// Grommet
import App from "grommet/components/App";

// Custom components
import Header from "../components/Header";
import Footer from "../components/Footer";

// Styles
import "../scss/main.scss";

export default class IndexLayout extends React.Component {
  static propTypes = {
    children: PropTypes.func
  };

  render() {
    return (
      <App centered={false}>
        <Header />
        {this.props.children()}
        <Footer />
      </App>
    );
  }
}
