import React from 'react'
import { Media, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { removeUser, editUser } from '../redux/actions'
import VerticalModal from './Modal'

function User(props) {
  const [modalShow, setModalShow] = React.useState(false)
  const [modalType, setModalType] = React.useState('edit')
  
  const dispatch = useDispatch()

  function removeUserHandler(e) {
    e.preventDefault()

    dispatch(removeUser(props.id))
  }

  function editUserHandler(user) {
    dispatch(editUser(user))
  }

  function onWatchHandler(e) {
    e.preventDefault()

    setModalShow(true)
    setModalType('watch')
  }

  function onEditHandler(e) {
    e.preventDefault()

    setModalShow(true)
    setModalType('edit')
  }

  return (
    <Media>
      <Media.Body>
        <div className="d-flex border rounded mb-4">
          <div className="px-3 py-2 d-flex align-items-center justify-content-center border-right bg-light user-id">{props.id}</div>
          <div className="px-3 py-2 d-flex align-items-center justify-content-between w-100">
            <div>
              <Button variant="link" onClick={e => onWatchHandler(e)}>{props.name}</Button>
            </div>
            <div>
              <Button variant="link" onClick={e => onEditHandler(e)}>Edit</Button>
              <Button variant="link" onClick={e => removeUserHandler(e)}>Remove</Button>
            </div>
          </div>
        </div>
      </Media.Body>
      <VerticalModal 
        show={modalShow} 
        onHide={() => setModalShow(false)} 
        type={modalType}
        editUser={editUserHandler}
        id={props.id}
        name={props.name}
        username={props.username}
        email={props.email}
        street={props.street}
        suite={props.suite}
        city={props.city}
        zipcode={props.zipcode}
        lat={props.lat}
        lng={props.lng}
        phone={props.phone}
        website={props.website}
        companyName={props.name}
        catchPhrase={props.catchPhrase}
        bs={props.bs} 
      />
    </Media>
  )
}

export default User