import React, { Component } from 'react';
import './ToDoList.css';
import Todo from "./ToDo";
import {connect} from "react-redux";

class ToDoList extends Component{
  constructor(props){
    super(props)
  }

  handleSubmit(e){ //Handle submission of form
    e.preventDefault();
    // send a dispatch to add value of input off
  }

  handleChange(e){
    //set state = this.target.value.
  }
  render(){
    debugger
    let toDos = this.props.todos.map((val, idx) => (
      <Todo value={val} key={idx}/>
    ))
      return(<
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="enter text here" value={this.props.value}onChange={this.handleChange}/>
            <button> Submit </button>
          </form>
          <div>
            <ul>
              {toDos}
            </ul>
          </div>
        </div>
    )
  }
}

function mapStateToProps(state){
  return {
    todos: state.todos,
    id: state.id
  }
}
export default connect(mapStateToProps)(ToDoList)
