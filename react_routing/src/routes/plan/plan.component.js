import axios from 'axios';
import { useState } from 'react';
import { Outlet } from "react-router";
import { Link } from 'react-router-dom';
// import './form.css'

const Plan = () => {

// States for registration
const [plan, setPlan] = useState('');
const [amount, setAmount] = useState(''); 

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

const handlePlan = (e) => {
	setPlan(e.target.value);
    if(e.target.value==='1 Month') {
        setAmount(2000);
    }
    else if(e.target.value==='3 Month') {
        setAmount(3000);
    }
    else if(e.target.value==='6 Month') {
        setAmount(5000);
    }
    else if(e.target.value==='1 Year') {
        setAmount(6000);
    }
    else if(e.target.value==='Tp') {
        setAmount('');
    }
	setSubmitted(false);
};


const handleAmount = () => {};

const handleSubmit = (e) => {
	e.preventDefault();
    axios.post('http://localhost:3090/plan', {
        // name, age, role, phone, address, height, weight
        plan,
        amount
      })
      .then(function (response) {
        console.log('response',response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
	if (plan ==='' || amount==='') {
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
		<h1>plan for {plan} has successfully created</h1>
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
		<label className="label">Plan</label>
        <select className="input" onClick={handlePlan} >
            <option value="Tp">Please Select</option>
            <option value="1 Month">1 Month</option>
            <option value="3 Month">3 Month</option>
            <option value="6 Month">6 Month</option>
            <option value="1 Year">1 Year</option>
        </select>
		{/* <input onChange={handlePlan} className="input"
		value={plan} type="text" /> */}

        <label className="label">Amount</label>
		<input className="input" onChange={handleAmount} value={amount} type="text" />

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
	<Link className='nav-link' style={{color:'blue', padding:'10px'}} to='/plan/delete'>
		DELETE
	</Link>
	</div>
);
}

export default Plan;
