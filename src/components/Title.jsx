import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import VerticalModal from './Modal'
import { addUser } from '../redux/actions'
import { useDispatch } from 'react-redux'

function Title({ search }) {
  const [modalShow, setModalShow] = React.useState(false)
  const dispatch = useDispatch()
  const [searchQuery, setSearchQuery] = useState('')

  function addUserHandler(user) {
    console.log(user)
    dispatch(addUser(user))
  }

  function searchHandler(e) {
    console.log(e.target.value)
    setSearchQuery(e.target.value)
    search(e.target.value)
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div><h2>Users</h2></div>
        <div className="d-flex">
          <Form>
            <Form.Group className="mb-0 mr-4">
              <Form.Control type="search" placeholder="Enter name" value={searchQuery} onChange={e => searchHandler(e)} />
            </Form.Group>
          </Form>
          <Button onClick={e => setModalShow(true)}>Add new</Button>
        </div>
      </div>
      <VerticalModal 
        show={modalShow} 
        onHide={() => setModalShow(false)} 
        type="add"
        addUser={addUserHandler}
      />
    </>  
  )
}

export default Title