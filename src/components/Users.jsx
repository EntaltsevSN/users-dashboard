import React from 'react'
import User from './User'
import { useSelector } from 'react-redux'
import Loader from './Loader'

function Users({query}) {
  const loaderStatus = useSelector(state => state.loaderReducer)
  const users = useSelector(state => state.usersReducer)

  console.log(query)
  
  return (
    <>
      { users.length > 0 
        ? users.filter(user => user.name.toLowerCase().includes(query)).map(user => <User 
          key={user.id}
          id={user.id}
          name={user.name}
          username={user.username}
          email={user.email}
          street={user.address.street}
          suite={user.address.suite}
          city={user.address.city}
          zipcode={user.address.zipcode}
          lat={user.address.geo.lat}
          lng={user.address.geo.lng}
          phone={user.phone}
          website={user.website}
          companyName={user.company.name}
          catchPhrase={user.company.catchPhrase}
          bs={user.company.bs} 
        /> )
        : loaderStatus ? <Loader/> : `There are no users`
      }
    </>
  )
}

export default Users