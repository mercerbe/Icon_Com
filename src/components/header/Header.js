import React from "react";
//import semantic header here
import { Header, Segment, Icon } from "semantic-ui-react";
import StartModal from "../modal/Modal.js";

const PageHeader = () => (
  <Segment inverted>
    <Header as="h1" icon inverted color="grey" textAlign="center">
      <Icon name="talk" />
      <Header.Content>Icon Com</Header.Content>
    </Header>
    <Header as="h5" inverted color="grey" textAlign="center">
      Select available icons to communicate using touch to speech technology
    </Header>
    <Header textAlign="center">
      <StartModal />
    </Header>
  </Segment>
);

export default PageHeader;
