import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import configureStore from './modules/store/configureStore'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
    registerServiceWorker()
)
