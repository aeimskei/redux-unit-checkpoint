import { createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';


export default () => {
  return createStore(rootReducer, applyMiddleware(thunk)); // setting redux to work in your project 
}

// think of store as agiant container that keeps all states