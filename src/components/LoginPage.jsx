import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../redux/actions'
import { useState } from 'react'
import { Alert, Form, Button } from 'react-bootstrap'

function LoginPage() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.usersReducer)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(0)

  function submitFormHandler(e) {
    e.preventDefault()

    console.log(users);

    const num = users.filter(user => (
      user.username === login
      &&
      user.address.zipcode === password
    )).length

    num > 0 ? dispatch(loginUser()) : submitErrorHandler(true)
  }

  function submitErrorHandler(isNotCorrect = false) {
    setErrorMessage(
      login.length === 'The login field is empty. Please type the login' 
      ? 1 
      : password.length === 0 ? 'The password field is empty. Please type the password' 
      : isNotCorrect ? 'The login and password is not corrert. Please try again'
      : 0
    )
    setShowError(true)
  }

  return (
    <div className="d-flex h-100 align-items-center justify-content-center">
      <Form onSubmit={e => submitFormHandler(e)} className="p-4 bg-white w-50">
        { showError ? <Alert variant="danger">{errorMessage}</Alert> : `` }
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Login</Form.Label>
          <Form.Control type="text" placeholder="Login" value={login} onChange={e => setLogin(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default LoginPage