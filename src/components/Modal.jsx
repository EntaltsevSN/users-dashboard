import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

function VerticalModal(props) {
  const [id, setId] = useState(props.type === 'add' ? '' : props.id)
  const [name, setName] = useState(props.type === 'add' ? '' : props.name)
  const [username, setUsername] = useState(props.type === 'add' ? '' : props.username)
  const [email, setEmail] = useState(props.type === 'add' ? '' : props.email)
  const [street, setStreet] = useState(props.type === 'add' ? '' : props.street)
  const [suite, setSuite] = useState(props.type === 'add' ? '' : props.suite)
  const [city, setCity] = useState(props.type === 'add' ? '' : props.city)
  const [zipcode, setZipcode] = useState(props.type === 'add' ? '' : props.zipcode)
  const [lat, setLat] = useState(props.type === 'add' ? '' : props.lat)
  const [lng, setLng] = useState(props.type === 'add' ? '' : props.lng)
  const [phone, setPhone] = useState(props.type === 'add' ? '' : props.phone)
  const [website, setWebsite] = useState(props.type === 'add' ? '' : props.website)
  const [companyName, setCompanyName] = useState(props.type === 'add' ? '' : props.companyName)
  const [catchPhrase, setCatchPhrase] = useState(props.type === 'add' ? '' : props.catchPhrase)
  const [bs, setBs] = useState(props.type === 'add' ? '' : props.bs)

  console.log(props.id)

  function onChangeHandler(e) {
    switch(e.target.name) {
      case 'name': setName(e.target.value)
        break
      case 'username': setUsername(e.target.value)
        break
      case 'email': setEmail(e.target.value)
        break
      case 'street': setStreet(e.target.value)
        break
      case 'suite': setSuite(e.target.value)
        break
      case 'city': setCity(e.target.value)
        break
      case 'zipcode': setZipcode(e.target.value)
        break
      case 'lat': setLat(e.target.value)
        break
      case 'lng': setLng(e.target.value)
        break
      case 'phone': setPhone(e.target.value)
        break
      case 'website': setWebsite(e.target.value)
        break
      case 'companyName': setCompanyName(e.target.value)
        break
      case 'catchPhrase': setCatchPhrase(e.target.value)
        break
      case 'bs': setBs(e.target.value)
        break
      default: 
        break
    }
  }

  function onSubmitChanges() {
    const data = {
      name,
      username,
      email,
      street,
      suite,
      city,
      zipcode,
      lat,
      lng,
      phone,
      website,
      companyName,
      catchPhrase,
      bs
    }

    props.type === 'add'
      ? props.addUser(data)
      : props.editUser({...data, id })

    setName('')
    setUsername('')
    setEmail('')
    setStreet('')
    setSuite('')
    setCity('')
    setZipcode('')
    setLat('')
    setLng('')
    setPhone('')
    setWebsite('')
    setCompanyName('')
    setCatchPhrase('')
    setBs('')

    props.onHide()
  }

  function undoChanges() {
    setName(props.name)
    setUsername(props.username)
    setEmail(props.email)
    setStreet(props.street)
    setSuite(props.suite)
    setCity(props.city)
    setZipcode(props.zipcode)
    setLat(props.lat)
    setLng(props.lng)
    setPhone(props.phone)
    setWebsite(props.website)
    setCompanyName(props.companyName)
    setCatchPhrase(props.catchPhrase)
    setBs(props.bs)
    props.onHide()
  }

  return (
    <Modal
      show={props.show}
      type={props.type}
      id={props.id}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {
            props.type === 'add' ? `Add user` : props.type === 'edit' ? `Edit user` : props.name
          }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      { props.type !== 'watch' ? <Form.Group>
        
        <Form.Control type="text" name="name" value={name} placeholder="Name" onChange={e => onChangeHandler(e)} />
        <br />
        <Form.Control type="text" name="username" value={username} placeholder="Username" onChange={e => onChangeHandler(e)} />
        <br />
        <Form.Control type="email" name="email" value={email} placeholder="Email" onChange={e => onChangeHandler(e)} />
        <br />
        <Form.Control type="text" name="street" value={street} placeholder="Street" onChange={e => onChangeHandler(e)} />
        <br />
        <Form.Control type="text" name="suite" value={suite} placeholder="Suite" onChange={e => onChangeHandler(e)} />
        <br />
        <Form.Control type="text" name="city" value={city} placeholder="City" onChange={e => onChangeHandler(e)} />
        <br />
        <Form.Control type="text" name="zipcode" value={zipcode} placeholder="Zipcode (using as a password to login)" onChange={e => onChangeHandler(e)} />
        <br />
        <Form.Control type="text" name="lat" value={lat} placeholder="Geo lat" onChange={e => onChangeHandler(e)} />
        <br />
        <Form.Control type="text" name="lng" value={lng} placeholder="Geo lng" onChange={e => onChangeHandler(e)} />
        <br />
        <Form.Control type="tel" name="phone" value={phone} placeholder="Phone" onChange={e => onChangeHandler(e)} />
        <br />
        <Form.Control type="text" name="website" value={website} placeholder="Website" onChange={e => onChangeHandler(e)} />
        <br />
        <Form.Control type="text" name="companyName" value={companyName} placeholder="Company name" onChange={e => onChangeHandler(e)} />
        <br />
        <Form.Control type="text" name="catchPhrase" value={catchPhrase} placeholder="Catch phrase" onChange={e => onChangeHandler(e)} />
        <br />
        <Form.Control type="text" name="bs" value={bs} placeholder="Bs" onChange={e => onChangeHandler(e)} />
      </Form.Group>
      : <>
        <p><strong>Username:</strong> {username}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Address(street):</strong> {street}</p>
        <p><strong>Address(suite):</strong> {suite}</p>
        <p><strong>Address(city):</strong> {city}</p>
        <p><strong>Address(zipcode):</strong> {zipcode}</p>
        <p><strong>Address(geo-lat):</strong> {lat}</p>
        <p><strong>Address(geo-lng):</strong> {lng}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Website:</strong> {website}</p>
        <p><strong>Company(name):</strong> {companyName}</p>
        <p><strong>Company(catchPhrase):</strong> {catchPhrase}</p>
        <p><strong>Company(BS):</strong> {bs}</p>
      </>}
      </Modal.Body>
      <Modal.Footer>
        { 
          props.type !== 'add' 
            ? <Button variant="outline-primary" onClick={() => undoChanges()}>{props === 'edit' ? `Undo changes` : `Close`}</Button>
            : ``
        }
        { props !== 'watch' ? <Button onClick={() => onSubmitChanges()}>
          { props.type === 'add' ? `Add user` : `Save changes` }
        </Button> : `` }
      </Modal.Footer>
    </Modal>
  );
}

export default VerticalModal