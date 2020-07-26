import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import nameReducer from './redux/reducers/nameReducer'
import wishReducer from './redux/reducers/wishReducer'
import App from './App';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

const masterReducer = combineReducers({
    name: nameReducer,
    wish: wishReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(masterReducer, {
    name: 'Ghanshyam',
    wish: ['eat', 'sleep', 'code']
}, composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}><App/></Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
serviceWorker.unregister();
