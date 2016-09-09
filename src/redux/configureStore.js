import {
  createStore,
  combineReducers,
  bindActionCreators,
  applyMiddleware
} from 'redux';

// Modules
import * as currentTime from './modules/currentTime';
import * as currentUser from './modules/currentUser';

const loggingMiddleware = store => next => action => {
  console.log('loggingMiddleware got: ', action, store.getState());
  next(action);
}

const apiMiddleware = store => next => action => {
  if (!action.meta || action.meta.type !== 'api') {
    return next(action);
  }

  // This is an api request
  const {url} = action.meta;
  const fetchOptions = Object.assign({}, action.meta);
  fetch(url, fetchOptions)
  .then(resp => resp.json())
  .then(json => {
    let newAction = Object.assign({}, action, {payload: json});
    delete newAction.meta;
    store.dispatch(newAction);
  })
}

export const configureStore = () => {
  const reducer = combineReducers({
    currentTime: currentTime.reducer,
    currentUser: currentUser.reducer
  });

  let middleware = [
    loggingMiddleware,
    apiMiddleware
  ];
  const store = createStore(reducer, applyMiddleware(...middleware));

  const actions = {
    currentTime: bindActionCreators(currentTime.actions, store.dispatch),
    currentUser: bindActionCreators(currentUser.actions, store.dispatch)
  };

  return {store, actions};
}

export default configureStore;
