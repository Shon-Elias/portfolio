import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Router, Route } from 'react-router';
// import store from './store';
import { Main, Login, Signup, UserHome } from './components';
// import { me } from './reducer/user';

// const whoAmI = store.dispatch(me());

// const requireLogin = (nextRouterState, replace, next) =>
//   whoAmI
//     .then(() => {
//       const { user } = store.getState();
//       if (!user.id) replace('/login');
//       next();
//     })
//     .catch(err => console.log(err));


ReactDOM.render() {
  return(


    <Router history={browserHistory}>
      <Route path="/" component={Main}>

        <Route path="login" component={Login} />
        <Route path="signup" component={Signup} />
        <Route onEnter={requireLogin}>
          <Route path="home" component={UserHome} />
        </Route>
      </Route>
    </Router>,
  document.getElementById('app')
);
}

// <IndexRoute component={Login} />
