import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setToken from './auth/setToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import history from './history';
import Navbar from './components/navbar';
import Register from './components/register';
import Login from './components/login';
import Home from './components/home';
import PostPage from './components/postPage';
import Shared from './components/shared';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

if (localStorage.jwtToken) {
	setToken(localStorage.jwtToken);
	const decoded = jwt_decode(localStorage.jwtToken);
	store.dispatch(setCurrentUser(decoded));

	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		store.dispatch(logoutUser());
		window.location.href = '/login';
	}
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={history}>
					<div>
						<Navbar />
						<Route exact path="/" render={props => <Home {...props} />} />
						<div className="container">
							<Route
								exact
								path="/register"
								render={props => <Register {...props} />}
							/>
							<Route
								exact
								path="/login"
								render={props => <Login {...props} />}
							/>

							<Route
								exact
								path="/shared"
								render={props => <Shared {...props} />}
							/>
							<Route path="/posts/" render={props => <PostPage {...props} />} />
						</div>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
