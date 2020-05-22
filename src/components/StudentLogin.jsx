import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'

const StudentLogin = props => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [parentName, setParentName] = useState('')
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [dob, setDob] = useState('')
	const [gender, setGender] = useState('')
	const [address, setAddress] = useState('')
	const [session, setSession] = useState('')

	var newUser = {}

	const handleSubmit = e => {
		e.preventDefault()

		newUser = {
			firstName,
			lastName,
			parentName,
			userName,
			password,
			dob,
			gender,
			address,
			session,
		}
		// console.log(newUser)

		axios
			.post('http://localhost:8000/users/add-students', newUser)
			.then(res => console.log(res.data))

		console.log(newUser)	
		setFirstName('')
		setLastName('')
		setParentName('')
		setUserName('')
		setPassword('')
		setDob('')
		setGender('')
		setAddress('')
		setSession('')
	}

	return (
		<div className='App'>
			<div className='form-container'>
				<form onSubmit={handleSubmit}>
					<label>
						First Name
						<input
							type='text'
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
							required
						/>
					</label>
					<label>
						Last Name
						<input
							type='text'
							value={lastName}
							onChange={e => setLastName(e.target.value)}
							required
						/>
					</label>
					<label>
						Father / Mother's Name
						<input
							type='text'
							value={parentName}
							onChange={e => setParentName(e.target.value)}
							required
						/>
					</label>
					<label>
						Username
						<input
							type='text'
							value={userName}
							onChange={e => setUserName(e.target.value)}
							required
						/>
					</label>

					<label>
						Password
						<input
							type='password'
							value={password}
							onChange={e => setPassword(e.target.value)}
							required
						/>
					</label>
					<label>
						Date of Birth
						<input
							type='text'
							value={dob}
							onChange={e => setDob(e.target.value)}
							required
						/>
					</label>
					<label>
						Gender
						<input
							type='text'
							value={gender}
							onChange={e => setGender(e.target.value)}
							required
						/>
					</label>
					<label>
						Address
						<input
							type='text'
							value={address}
							onChange={e => setAddress(e.target.value)}
							required
						/>
					</label>
					<label>
						Session
						<input
							type='text'
							value={session}
							onChange={e => setSession(e.target.value)}
							required
						/>
					</label>
					<button id='submit'>Submit</button>
				</form>
			</div>
		</div>
	)
}

export default StudentLogin
