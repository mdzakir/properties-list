import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import rootReducer from './reducers';
import PropertyList from './components/PropertyList';
import PropertyDetails from './components/PropertyDetails';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import * as serviceWorker from './serviceWorker';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/property/:id' component={PropertyDetails} />
          <Route path='/' component={PropertyList} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
