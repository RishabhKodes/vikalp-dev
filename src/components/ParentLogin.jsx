import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'

const ParentLogin = ({ history }) => {
	const [email, setEmail] = useState('')
	const [password, setPass1] = useState('')
	const [yob, setDob] = useState()

	var newUser = {}
	const handleSubmit = e => {
		e.preventDefault()

		newUser = {
			email,
			password,
			yob,
		}
		console.log(newUser)

		axios
			.post('http://localhost:8000/users/add-parents', newUser)
			.then(res => console.log(res.data))

		history.push('/student-login')

		setEmail('')
		setPass1('')
		setDob('')
	}

	return (
		<div className='App'>
			<div className='form-container'>
				<form onSubmit={handleSubmit}>
					<label>
						Parent Email
						<input
							type='email'
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
						/>
					</label>

					<label>
						Password
						<input
							type='password'
							value={password}
							onChange={e => setPass1(e.target.value)}
							required
						/>
					</label>
					<label>
						Parent's Year of Birth
						<input
							type='text'
							value={yob}
							onChange={e => setDob(e.target.value)}
							required
						/>
					</label>
					<button id='submit'>Submit</button>
				</form>
			</div>
		</div>
	)
}

export default ParentLogin
