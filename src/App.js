import React, { Component } from "react";
//app css
import "./App.css";
//dependencies
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import EyeGazeTemplate from "./components/EyeGazeTemplate";
import Sidebar from "./components/Sidebar";
import data from "./data";

class App extends Component {
  constructor() {
    super();

    this.state = {
      availableIcons: data,
      selectedIcons: Array(12).fill({}),
      language: "english",
      languages: [
        {
          label: "English",
          value: "english"
        },
        {
          label: "Blank",
          value: "blank"
        }
      ]
    };

    window._APP_ = this;
  }

  onDrop = (item, position) => {
    const updatedIcons = this.state.selectedIcons.map((icon, index) => {
      if (position === index) {
        return { ...item.icon };
      }
      return icon;
    });

    this.setState({
      selectedIcons: updatedIcons
    });
  };

  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className="App">
          <Sidebar availableIcons={this.state.availableIcons} />
          <EyeGazeTemplate
            languages={this.state.languages}
            language={this.state.language}
            selectedIcons={this.state.selectedIcons}
            onDrop={this.onDrop}
            onSelect={item => this.setState({ language: item.value })}
            onClear={() => this.setState({ selectedIcons: Array(12).fill({}) })}
          />
        </div>
      </DragDropContextProvider>
    );
  }
}

export default App;
