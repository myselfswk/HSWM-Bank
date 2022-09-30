import React from 'react';
// import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import { createRoot } from 'react-dom/client';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
        <App tab="home" />
    </Provider>
);
// ReactDOM.render(<App />, document.getElementById('root'));