import React from 'react';

class Task extends React.Component {

  constructor (props){
    super(props);
  }

  delElement(event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target.parent);
  }
  render() {
    return (
      <div className="task">
      <p>  {this.props.content}</p>  <a href="" className="del" onClick={this.delElement} > X </a>
      </div>
    );
  }
}

export default Task;
