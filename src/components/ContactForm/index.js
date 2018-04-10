import React from "react";

// Grommet
import Label from "grommet/components/Label";
import Box from "grommet/components/Box";
import Form from "grommet/components/Form";
import FormField from "grommet/components/FormField";
import TextInput from "grommet/components/TextInput";
import Header from "grommet/components/Header";
import Heading from "grommet/components/Heading";
import Footer from "grommet/components/Footer";
import Button from "grommet/components/Button";

// Custom components

export default class CareerForm extends React.Component {
  sendForm = e => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    return (
      <Box
        pad="none"
        align="center"
        pad="center"
        style={{
          padding: "22px 0"
        }}
      >
        <Form>
          <Header>
            <Heading tag="h3">Fel free to give us some feedback!</Heading>
          </Header>
          <FormField label="First &amp; Last Name">
            <TextInput />
          </FormField>
          <FormField label="E-mail">
            <TextInput />
          </FormField>
          <FormField label="Phone number">
            <TextInput />
          </FormField>
          <FormField label="Description">
            <textarea
              rows="5"
              type="text"
              id="description"
              name="description"
            />
          </FormField>
          <Footer pad={{ vertical: "medium" }} justify="end">
            <Button
              label="Send"
              type="submit"
              primary={false}
              onClick={this.sendForm}
            />
          </Footer>
        </Form>
      </Box>
    );
  }
}
