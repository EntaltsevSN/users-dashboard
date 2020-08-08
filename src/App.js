import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Dashboard from './components/Dashboard'
import LoginPage from './components/LoginPage'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './redux/actions';

function App() {
  const dispatch = useDispatch()
  
  React.useEffect(() => {
    function loadUsers() {
      dispatch(fetchUsers())
    }

    loadUsers()
  }, [dispatch])

  const isLoggedIn = useSelector(state => state.loginReducer)
  
  return (
    <>
      {
        isLoggedIn ? <Dashboard/> : <LoginPage/>
      }
    </>
  );
}

export default App;
