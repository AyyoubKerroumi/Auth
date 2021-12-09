import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../actions/userActions'
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])
  const onSubmit = e => {
    e.preventDefault()
    dispatch(loginUser(email, password))
  }
  return (
    <section id='login'>
      <div class='container'>
        <h1 class='l-heading'>
          Account <span class='text-primary'>Login</span>
        </h1>
        <form onSubmit={onSubmit}>
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
            <button type='submit' class='btn btn-primary btn-block'>
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login
