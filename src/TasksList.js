import React from 'react';
import Task from './Task';

class TasksList extends React.Component {

  render() {
    return (
      <div>
        { this.props.tasks.map(
          (task) => { return <Task key={task.id} id={task.id} content={task.content}  />} ) }

      </div>
    );
  }
}

export default TasksList;
