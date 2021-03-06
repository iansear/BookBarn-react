import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Books from './components/Books'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BaseLayout from './components/BaseLayout';
import BookDetails from './components/BookDetails';
import Register from './components/Register'
import Login from './components/Login'
import UpdateBook from './components/UpdateBook';
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <BaseLayout>
        <Switch>
            
            <Route exact path = "/"  component = {Books} />
            <Route path="/bookdetails/:bookID" component = {BookDetails} />
            <Route path="/updatebook/:bookID" component = {UpdateBook} />
            <Route path="/join" component={Register} />
            <Route path="/sign-in" component={Login}/>
        </Switch>
        </BaseLayout>
    </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
