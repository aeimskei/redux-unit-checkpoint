import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { fetchPosts } from './redux/actions/posts';

const newStore = store();

newStore.dispatch(fetchPosts())

ReactDOM.render(
  <Provider store={newStore}>
  <App />
  </Provider>,
  document.getElementById('root')
);
