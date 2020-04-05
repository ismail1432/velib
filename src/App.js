import React from 'react';
import './App.css';
import Layout from './Layout';
import { createStore } from 'redux';
import allReducer from './reducers';
import { Provider } from 'react-redux';

const rootReducer = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <div className="App">
        <Provider store={rootReducer}>
            <Layout/>
        </Provider>
    </div>
  );
}

export default App;
