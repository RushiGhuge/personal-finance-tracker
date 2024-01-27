import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../FireBase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AddUser } from '../../Redux/Reducers/UserSlice';
import { useDispatch } from 'react-redux';



const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      dispatch(AddUser(user))
      navigate('/dashbord')
    }
  }, [user])

  return (
    <nav className="w-full p-3 mb-10 bg-blue-400 dark:bg-blue-500/30 flex justify-between text-white font-bold">
      <h1>Financly.</h1>
      <Link to={'/dashbord'}>Dashbord</Link>
    </nav>
  )
}

export default Navbar