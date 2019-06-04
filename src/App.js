import React from "react";

import {
  Button,
  Typography,
  Input,
  List,
  ListItem,
  ListItemText,
  Grid
} from "@material-ui/core";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_value: "",
      values: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.element.value = "";
  }

  render() {
    console.log(this.state.values.length);
    let taskList;
    if (this.state.values !== []) {
      taskList = this.state.values.map(task => {
        return (
          <div>
            <ListItem button style={{ textAlign: `center` }}>
              <ListItemText primary={task[0]} key={task[1]} />
            </ListItem>
          </div>
        );
      });
    }
    if (this.state.values.length === 0) {
      console.log("this is working");
      taskList = <p>Looks like you do not have any tasks to complete. </p>;
    }

    return (
      <div className="App">
        <Grid container spacing={3}>
          <Grid
            item
            xs={6}
            className="task-form"
            style={{ textAlign: `center` }}
          >
            <Typography
              variant="h4"
              component="h1"
              color="inherit"
              style={{ margin: `10px` }}
            >
              Task Manager
            </Typography>
            <form id="create-task-form" onSubmit={this.handleSubmit}>
              <Input
                margin="normal"
                variant="filled"
                inputRef={el => (this.element = el)}
                style={{ margin: `15px` }}
              />
              <Button
                variant="outlined"
                size="small"
                color="primary"
                type="submit"
                name="cancelCourse"
              >
                Add Task
              </Button>
            </form>
          </Grid>
          <Grid
            item
            xs={6}
            className="display-tasks"
            style={{ textAlign: `center` }}
          >
            <section>
              <Typography
                variant="h6"
                component="h1"
                color="inherit"
                style={{ margin: `10px` }}
              >
                Tasks to Complete
              </Typography>
              <List
                component="nav"
                aria-label="Main mailbox folders"
                style={{ textAlign: `center` }}
              >
                {taskList}
              </List>
            </section>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
