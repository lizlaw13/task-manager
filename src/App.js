import React from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_value: "",
      values: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelCourse = this.cancelCourse.bind(this);
  }

  handleSubmit(event) {
    let today = new Date();
    let time =
      today.getHours() + ":" + today.getMinutes() + today.getSeconds() + ":";
    event.preventDefault();
    let toAdd = [];
    this.setState({
      current_value: this.element.value
    });
    if (this.state.values === []) {
      toAdd.push([this.element.value, time]);
      this.setState({
        values: toAdd
      });
    } else {
      toAdd = this.state.values;
      toAdd.push([this.element.value, time]);
      this.setState({
        values: toAdd
      });
    }
  }

  cancelCourse = () => {
    this.setState({
      current_value: ""
    });
  };

  render() {
    let taskList = this.state.values.map(task => {
      return <li key={task[1]}>{task[0]}</li>;
    });

    return (
      <div className="App">
        <div className="task-form">
          <h2>To Do List Manager </h2>
          <form id="create-task-form" onSubmit={this.handleSubmit}>
            <label>Task:</label> <br />
            <input type="text" ref={el => (this.element = el)} />
            <input
              type="submit"
              value="Submit"
              className="submit"
              name="cancelCourse"
              onClick={this.cancelCourse}
            />
          </form>
        </div>
        <div className="display-tasks">
          <section>
            <ul>{taskList}</ul>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
