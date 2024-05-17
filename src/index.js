//import thunk from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware, combineReducers } from 'redux';
import {Provider} from 'react-redux'; 
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './redux/reducer/rootReducer' ;
import contactReducer from './redux/reducer/contactReducer';
import initialState from './redux/reducer/intialState.json';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
 // puts in brackets
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBR1MwPSNpy4O-7TMkdwKgKyaut6oUaUbk",
  authDomain: "resume-f67b1.firebaseapp.com",
  projectId: "resume-f67b1",
  storageBucket: "resume-f67b1.appspot.com",
  messagingSenderId: "297865256203",
  appId: "1:297865256203:web:a28ea6fdf066254ca9960e"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();



function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;

const reduxStore = createStore(
  rootReducer, initialState,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase)
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={reduxStore}>
  <ReactReduxFirebaseProvider
    firebase={firebase}
    config={firebaseConfig}
    dispatch={reduxStore.dispatch}
    createFirestoreInstance={createFirestoreInstance}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReactReduxFirebaseProvider>
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
