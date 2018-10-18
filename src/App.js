import React, { Component } from "react";
import "./App.css";
import Icons from "./data.json";
//components
import { Segment, Container, Card } from "semantic-ui-react";
import IconCard from "./components/card/Card";
import PageHeader from "./components/header/Header";
import PageFooter from "./components/footer/Footer";

//styles
const styles = {
  background: "#e9ecef"
};

class App extends Component {
  //set state
  state = {
    Icons
  };

  //render components
  render() {
    return (
      <div style={styles}>
        <Segment inverted>
          <PageHeader />
        </Segment>
        <Container>
          <Segment inverted>
            <Card.Group itemsPerRow={3}>
              {this.state.Icons.map(icon => (
                <IconCard
                  key={icon.key}
                  id={icon.id}
                  mixIcons={this.mixIcons}
                  icon={icon.icon}
                />
              ))}
            </Card.Group>
          </Segment>
        </Container>
        <br />
        <PageFooter />
      </div>
    );
  }
}

export default App;
