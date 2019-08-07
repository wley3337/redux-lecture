import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './containers/App';

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'


ReactDOM.render(
    <Provider store={store} >
        <Router>
            <App />
        </Router>
    </Provider>
            , document.getElementById('root')
    
    ) ;