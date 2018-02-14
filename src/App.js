import React from 'react';
import ReactDOM from 'react-dom';
import TasksList from './TasksList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      tasks: [{
          id: 0,
          content: "Buy an apple",
        },
        {
          id: 1,
          content: "Sleeeeep"
        }]
    };

  }

  addTask(event) {
    event.preventDefault();
    let id = this.state.tasks.length;
    let value = this.refs.content.value;
    console.log("id = "+id+", content = "+value );
    this.setState({tasks: this.state.tasks.concat( {id: id, content: value } )} );
  }

  render() {
    return (
      <div>
        <h1> Todo List </h1>
        <form onSubmit={this.addTask.bind(this)}>
          <input type="text"
              placeholder="Add task to list"
              ref = "content"
              />
            <button type="submit" > Submit </button>
        </form>
        <TasksList tasks = {this.state.tasks} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
