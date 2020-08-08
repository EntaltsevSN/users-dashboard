import React from 'react'
import { Navbar, Row, Col, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../redux/actions'

function Header() {
  const isLoggedIn = useSelector(state => state.loginReducer)
  const dispatch = useDispatch()

  return (
    <Navbar bg="dark" variant="dark">
      <Row noGutters className="w-100">
        <Col xs={6}><Navbar.Brand href="#home">Dashboard</Navbar.Brand></Col>
        { isLoggedIn ? <Col xs={6} className="text-right">
          <Button onClick={() => dispatch(logoutUser())}>Logout</Button>
        </Col> : `` }
      </Row>
    </Navbar>
  )
}

export default Header