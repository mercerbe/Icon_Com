import React from "react";
//semantic card
import { Card } from "semantic-ui-react";

const IconCard = props => (
  <Card
    className="iconCards"
    color="grey"
    image={props.icon}
    id={props.id}
    title={props.title}
    onClick={props.onClick}
  />
);

export default IconCard;
