import "./App.css";
import React from "react";
import { Component } from "react";
import TodoItems from "./Todoitems";
import AddItems from "./Additems";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "Yassine", age: 23 },
      { id: 2, name: "Ibrahim", age: 23 },
      { id: 3, name: "Mahmoud", age: 24 },
    ],
  };

  deleteItem = (id) => {
    let items = this.state.items;
    let i = items.findIndex((item) => this.item === id);
    items.splice(i, 1);
    this.setState({ items });
  };

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };

  render() {
    return (
      <div className="App container ">
        {" "}
        <h1 className="text-center"> Todo List App </h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItems addItem={this.addItem} />{" "}
      </div>
    );
  }
}

export default App;
