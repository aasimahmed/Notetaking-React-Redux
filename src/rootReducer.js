import {ADD_TODO} from "./actionCreators"
import {REMOVE_TODO} from "./actionCreators"

const initialState = {
    todos:[] ,
    id: 0,
    formInputValue: 
}
export default function rootReducer(state=initialState, action){
  switch(action.type){
    case "ADD_TODO":
      let copyState = {...state};
      copyState.id++;
      return{
        ...copyState,
         todos: [...copyState.todos, {tasks: action.value, id:copyState.id}]
       }
    case "REMOVE_TODO":
      let removeState = state.todos.filter(val => val.id !== action.id);
      return{
        ...removeState,
        todos: removeState
      }
    default:
      return state
  }
}
