import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createBrowserHistory } from "history";
import rootReducer from 'reducers/reducer.js';
import App from './App'; 
import AutorBox from "./Autor";
import Home from './Home';
import LivroBox from './Livro';


const history = createBrowserHistory()
const store = createStore(rootReducer)

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={App} />
            <Route exact path="/" component={Home}/>
            <Route path='/autor' component={AutorBox}/>
            <Route path='/livro' component={LivroBox}/>
        </Router>
    </Provider>,
    document.getElementById('root')
)