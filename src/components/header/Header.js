import React from "react";
import { Header, Segment } from "semantic-ui-react";
//evergreen
import {
  Heading,
  SubHeading,
  IconButton,
  Popover,
  Pane,
  Text,
  Paragraph,
  Card,
  Button,
  SelectMenu,
  TriangleIcon
} from "evergreen-ui";

const AppHeader = () => (
  <Segment inverted>
    <Header as="h1" inverted color="grey" textAlign="center">
      Icon Com
      <Popover
        content={
          <Pane
            width={250}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            padding={15}
          >
            <Paragraph size={300}>
              <Text size={300} fontWeight="bold">
                About
              </Text>
              <br />
              Communication barriers are a major cause of adverse events in
              acute care hospitals (Hurting, Nilsen, Happ, & Blackstone, 2015).
              To facilitate effective patient-provider communication, this app
              offers patients with limited expressive language abilities or
              language differences to express basic and immediate wants and
              needs through individualized communication boards.
            </Paragraph>
          </Pane>
        }
      >
        <IconButton marginLeft={0} appearance="ghost" icon="question" />
      </Popover>
    </Header>
  </Segment>
);

export default AppHeader;
