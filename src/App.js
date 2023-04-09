import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
	const [name , setName] = useState('');
	const [age , setAge] = useState('');
	const [email , setEmail] = useState('');
	const [password , setPassword] = useState('');
	const [confPassword , setConfPassword] = useState('');

	// function to update state of name with
	// value enter by user in form
	const handleChange =(e)=>{
	setName(e.target.value);
	}
	// function to update state of age with value
	// enter by user in form
	const handleAgeChange =(e)=>{
	setAge(e.target.value);
	}
	// function to update state of email with value
	// enter by user in form
	const handleEmailChange =(e)=>{
	setEmail(e.target.value);
	}
	// function to update state of password with
	// value enter by user in form
	const handlePasswordChange =(e)=>{
	setPassword(e.target.value);
	}
	// function to update state of confirm password
	// with value enter by user in form
	const handleConfPasswordChange =(e)=>{
	setConfPassword(e.target.value);
	}
	// below function will be called when user
	// click on submit button .
	const handleSubmit=(e)=>{
	if(password!=confPassword)
	{
		// if 'password' and 'confirm password'
		// does not match.
		alert("password Not Match");
	}
	else{
		// display alert box with user
		// 'name' and 'email' details .
		alert('A form was submitted with Name :"' + name +
		'" ,Age :"'+age +'" and Email :"' + email + '"');
	}
	e.preventDefault();

	}
return (
	<div className="App">
	<header className="App-header">
	<form onSubmit={(e) => {handleSubmit(e)}}>
	{/*when user submit the form , handleSubmit()
		function will be called .*/}
	<h2> Sign Up Form </h2>
	<h3> Owner : Vedansh kaushik </h3>
	<img src="/gfg.png" />
		<label >
		Name:
		</label><br/>
		<input type="text" value={name} required onChange={function (e) { handleChange(e); }} /><br/>
		{ /*when user write in name input box , handleChange()
			function will be called. */}
		<label >
		Age:
		</label><br/>
		<input type="text" value={age} required onChange={function (e) { handleAgeChange(e); }} /><br/>
			{ /*when user write in age input box , handleAgeChange()
			function will be called. */}
		<label>
		Email:
		</label><br/>
		<input type="email" value={email} required onChange={function (e) { handleEmailChange(e); }} /><br/>
		{/* when user write in email input box , handleEmailChange()
			function will be called.*/}
		<label>
		Password:
		</label><br/>
		<input type="password" value={password} required onChange={function (e) { handlePasswordChange(e); }} /><br/>
			{/* when user write in password input box ,
				handlePasswordChange() function will be called.*/}
		<label>
		Confirm Password:
		</label><br/>
		<input type="password" value={confPassword} required onChange={function (e) { handleConfPasswordChange(e); }} /><br/>
				{/* when user write in confirm password input box ,
					handleConfPasswordChange() function will be called.*/}
		<input type="submit" value="Submit"/>
	</form>
	</header>
	</div>
);
}

export default App;
