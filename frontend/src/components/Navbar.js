import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions'
const Navbar = () => {
  const dispatch = useDispatch()
  const logou = () => dispatch(logout())
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  return (
    <nav id='main-nav' class='bg-primary'>
      <div class='container'>
        <h1 class='l-heading'>
          <i class='fas fa-key'></i>
          Auth APP
        </h1>
        <ul>
          {!userInfo ? (
            <>
              <li>
                <Link to='/register'>Register</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
            </>
          ) : (
            <li onClick={logou} className='flex'>
              <p>logout</p>
              <i class='fas fa-sign-out-alt'></i>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
