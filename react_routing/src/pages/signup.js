import { useState } from 'react';
import './form.css'

export default function Form() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

const handleAge = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

const handleRole = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

const handlePhone = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

const handleAddress = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

const handleHeight = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

const handleWeight = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || password === '') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	}
};

const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {name} successfully registered!!</h1>
	</div>
	);
};

const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return (
	<div className="form">
	<div>
		<h1>User Registration</h1>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
		{/* Labels and inputs for form data */}
		<label className="label">Name</label>
		<input onChange={handleName} className="input"
		value={name} type="text" />

        <label className="label">Age</label>
		<input onChange={handleAge} className="input"
		value={name} type="text" />

        <label className="label">Role</label>
		<input onChange={handleRole} className="input"
		value={name} type="text" />

        <label className="label">Phone</label>
		<input onChange={handlePhone} className="input"
		value={name} type="text" />

        <label className="label">Address</label>
		<input onChange={handleAddress} className="input"
		value={name} type="text" />

        <label className="label">Height</label>
		<input onChange={handleHeight} className="input"
		value={name} type="text" />

        <label className="label">Weight</label>
		<input onChange={handleWeight} className="input"
		value={name} type="text" />

		<label className="label">Email</label>
		<input onChange={handleEmail} className="input"
		value={email} type="email" />

		<label className="label">Password</label>
		<input onChange={handlePassword} className="input"
		value={password} type="password" />

		<button onClick={handleSubmit} className="btn" type="submit">
		Submit
		</button>
	</form>
	</div>
);
}
