import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Books from './components/Books'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BaseLayout from './components/BaseLayout';
import BookDetails from './components/BookDetails';

ReactDOM.render(
    <BrowserRouter>
   <BaseLayout>
    <Switch>
        <Route exact path = "/"  component = {Books} />
        <Route path="/bookdetails/:bookID" component = {BookDetails} />
    </Switch>
   </BaseLayout>
</BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
