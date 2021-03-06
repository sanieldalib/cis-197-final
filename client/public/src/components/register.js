import React, { Component } from 'react';

export default class Register extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			confirm: ''
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefaults();
		const user = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			confirm: this.state.confirm
		};
	}

	render() {
		return (
			<div className="container">
				<h2>Registration</h2>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<input
							type="text"
							placeholder="Name"
							className="form-control"
							name="name"
							onChange={this.handleInputChange}
							value={this.state.name}
						/>
					</div>
					<div className="form-group">
						<input
							type="email"
							placeholder="Email"
							className="form-control"
							name="email"
							onChange={this.handleInputChange}
							value={this.state.email}
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							placeholder="Password"
							className="form-control"
							name="password"
							onChange={this.handleInputChange}
							value={this.state.password}
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							placeholder="Confirm Password"
							className="form-control"
							name="password_confirm"
							onChange={this.handleInputChange}
							value={this.state.password_confirm}
						/>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary">
							Register User
						</button>
					</div>
				</form>
			</div>
		);
	}
}
