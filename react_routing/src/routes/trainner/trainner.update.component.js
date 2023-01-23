import axios from 'axios';
import { useState } from 'react';
import { Outlet } from "react-router";
import { Link } from 'react-router-dom';
// import './form.css'

const UpdateTrainner = () => {

// States for registration
const [id, setId] = useState(''); 
const [name, setName] = useState('');
const [age, setAge] = useState('');
const [role, setRole] = useState('');
const [phone, setPhone] = useState('');
const [address, setAddress] = useState('');
const [height, setHeight] = useState('');
const [weight, setWeight] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

const handleId = (e) => {
    setId(e.target.value);
	setSubmitted(false);
}

const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

const handleAge = (e) => {
	setAge(e.target.value);
	setSubmitted(false);
};

const handleRole = (e) => {
	setRole(e.target.value);
	setSubmitted(false);
};

const handlePhone = (e) => {
	setPhone(e.target.value);
	setSubmitted(false);
};

const handleAddress = (e) => {
	setAddress(e.target.value);
	setSubmitted(false);
};

const handleHeight = (e) => {
	setHeight(e.target.value);
	setSubmitted(false);
};

const handleWeight = (e) => {
	setWeight(e.target.value);
	setSubmitted(false);
};

const handleSubmit = (e) => {
    console.log('id', id);
	e.preventDefault();
	axios.put(`http://localhost:3090/trainner/${id}`, {
        // name, age, role, phone, address, height, weight
        id,
        name,
        age,
        role,
        phone,
        address,
        height,
        weight
      })
      .then(function (response) {
        console.log('response',response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
	if (name==='' || age==='' || role==='' || phone==='' || address==='' || height==='' || weight==='' ) {
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
		<h1>{name} has successfully registered as a Trainer!!</h1>
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
		<h1>Trainer Update</h1>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

		<form className="square">
			{/* Labels and inputs for form data */}
            <label className="label">User Id</label>
			<input onChange={handleId} className="input"
			value={id} type="text" />
            
			<label className="label">Name</label>
			<input onChange={handleName} className="input"
			value={name} type="text" />

			<label className="label">Age</label>
			<input onChange={handleAge} className="input"
			value={age} type="text" />

			<label className="label">Role</label>
			<input onChange={handleRole} className="input"
			value={role} type="text" />

			<label className="label">Phone</label>
			<input onChange={handlePhone} className="input"
			value={phone} type="text" />

			<label className="label">Address</label>
			<input onChange={handleAddress} className="input"
			value={address} type="text" />

			<label className="label">Height</label>
			<input onChange={handleHeight} className="input"
			value={height} type="text" />

			<label className="label">Weight</label>
			<input onChange={handleWeight} className="input"
			value={weight} type="text" />

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
		<Link className='nav-link' style={{color:'blue', padding:'10px'}} to='/trainner'>
            CREATE
		</Link>
		<Link className='nav-link' style={{color:'blue', padding:'10px'}} to='/trainner/delete'>
		DELETE
		</Link>
	</div>
);
}

export default UpdateTrainner;
