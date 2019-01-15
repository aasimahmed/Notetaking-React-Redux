import React from "react";
import "./ToDo.css"

const Todo = ({value, key}) => (
    <li key={key}> {value} </li>
  )

export default Todo
