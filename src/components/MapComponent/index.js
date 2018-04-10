import React, { Component } from "react";

export default class MapComponent extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10422.25323427066!2d17.6657013!3d49.227808350000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1scs!2scz!4v1522998246039"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>
    );
  }
}
