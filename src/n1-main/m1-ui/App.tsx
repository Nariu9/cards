import React from 'react';
import './App.css';
import {Main} from './Main';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../m2-bll/store';

const App = () => (
    <div className="App">
        <Provider store={store}>
            <HashRouter>
                <Main/>
            </HashRouter>
        </Provider>
    </div>
);

export default App;
