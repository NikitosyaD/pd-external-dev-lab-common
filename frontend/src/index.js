import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";

// import jquery from './static/js/jquery-3.5.1.min.js';

export let rerenderFullTree = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App state={store.getState()}/>
      </Provider>,
      document.getElementById('root')
  )
}

rerenderFullTree();
