import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Users from './Users';
import Header from './Header';
import Title from './Title';

function Dashboard() {
  const [query, setQuery] = useState('')

  function getSearchQuery(newQuery) {
    setQuery(newQuery)
  }

  return (
    <>
      <Header/>
      <Container className="p-4 bg-white">
        <Title search={getSearchQuery} />
        <Users query={query} />
      </Container>
    </>
  )
}

export default Dashboard