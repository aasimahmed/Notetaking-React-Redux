import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Todolist from './ToDoList';
import './index.css';

import {createStore} from "redux";
import rootReducer from "./rootReducer"
import {Provider} from "react-redux";

const store = createStore(rootReducer)


ReactDOM.render(
  <Provider store={store}>
  <Todolist/>
  </Provider> , document.getElementById('root'));


serviceWorker.unregister();
