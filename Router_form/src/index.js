import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsShow from './components/posts_show';
import PostsNew from './components/posts_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <HashRouter basename="/Router_form">
    	<div>
    		<Switch>
    			<Route path="/" exact component={PostsIndex} />    
    			<Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
    		</Switch>
    	</div>
    </HashRouter>
  </Provider>
  , document.querySelector('.container'));
