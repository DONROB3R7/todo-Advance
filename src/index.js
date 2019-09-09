import React, { Component } from "react";
import ReactDOM from "react-dom";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "./styles.css";

//Todo List

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "wake up"
      },
      {
        id: 2,
        title: "maek breakfast"
      }
    ],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => {
    console.log("Handle Change");
  };

  handleSubmit = e => {
    console.log("Handle Submit");
  };

  clearList = () => {
    console.log("Clear list");
  };

  handleDelete = id => {
    console.log(`handle Delete ${id}`);
  };

  handleEdit = id => {
    console.log(`handle edit ${id}`);
  };

  render() {
    console.log(this.state.id);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.item}
              clearList={this.clearList}
              handleChange={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
