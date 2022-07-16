import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux";

import {App} from './App';
import {setupStore} from "./redux";
import './firebase';
import {CookiesProvider} from "react-cookie";

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <CookiesProvider>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </CookiesProvider>
);

