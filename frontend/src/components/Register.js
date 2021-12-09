import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../actions/userActions'

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [userInfo, navigate])
  const onSubmit = e => {
    e.preventDefault()
    if (password === password2) {
      dispatch(registerUser({ name, email, password }))
    }
  }
  return (
    <div id='login'>
      <div class='container'>
        <h1 class='l-heading'>
          Account <span class='text-primary'>Register</span>
        </h1>
        <form onSubmit={onSubmit}>
          <div class='form-group'>
            <label for='email'>name</label>
            <input
              type='text'
              name='name'
              value={name}
              placeholder='Enter your name'
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div class='form-group'>
            <label for='email'>email</label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Enter Email'
            />
          </div>
          <div class='form-group'>
            <label for='password'>password</label>
            <input
              type='password'
              name='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='Enter password'
            />
          </div>
          <div class='form-group'>
            <label for='password'>Confirm password</label>
            <input
              type='password'
              name='password2'
              placeholder='Confirm password'
              value={password2}
              onChange={e => setPassword2(e.target.value)}
            />
          </div>
          <div class='form-group'>
            <button type='submit' class='btn btn-primary btn-block'>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
