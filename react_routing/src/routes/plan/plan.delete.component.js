import axios from 'axios';
import { useState } from 'react';
import { Outlet } from "react-router";
import { Link } from 'react-router-dom';
// import './form.css'

const DeletePlan = () => {

// States for registration
const [id, setId] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

const handleId = (e) => {
	setId(e.target.value);
	setSubmitted(false);
};

const handleSubmit = (e) => {
	e.preventDefault();
    axios.delete(`http://localhost:3090/plan/${id}`, {
        id,
      })
      .then(function (response) {
        console.log('response',response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
	if (id ==='') {
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
		<h1>plan for {id} has successfully deleted</h1>
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
        <Outlet />
	<div>
		<h1>Plans For The Gym Membership</h1>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form className="square">
		{/* Labels and inputs for form data */}
		{/* <input onChange={handlePlan} className="input"
		value={plan} type="text" /> */}

        <label className="label">Plan Id</label>
		<input className="input" onChange={handleId} value={id} type="text" />

		{/* <label className="label">Email</label>
		<input onChange={handleEmail} className="input"
		value={email} type="email" />

		<label className="label">Password</label>
		<input onChange={handlePassword} className="input"
		value={password} type="password" /> */}

		<button onClick={handleSubmit} className="btn" type="submit">
		Submit
		</button>
	</form>
	<br />
	<Link className='nav-link' style={{color:'blue', padding:'10px'}} to='/plan/update'>
		UPDATE
	</Link>
	<Link className='nav-link' style={{color:'blue', padding:'10px'}} to='/plan'>
		CREATE
	</Link>
	</div>
);
}

export default DeletePlan;
