import './index.css'
import React, { lazy, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../FireBase/firebase'
import { AddUser } from '../../Redux/Reducers/UserSlice'
import SkeletonComponant from '../../Componants/Skeleton/Skeleton'
import DashbordNavbar from '../../Componants/DashbordNavbar/DashbordNavbar'
import { Route, Routes } from 'react-router-dom'
import MainContainer from '../GirdContainer/MainContainer'
import Charts from '../Charts/Charts'

const SideNavbar = lazy(() => import('../../Componants/SideNavbar/SideNavbar'))
const History = lazy(() => import('../../Componants/History/History'))

const Dashbord = () => {

  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const userDetails = useSelector((s) => s.User)

  useEffect(() => {
    if (user) {
      dispatch(AddUser(user))
    }
  }, [user])


  if (userDetails.user == null) {
    return <SkeletonComponant />
  }


  return (
    <div className='w-full'>
      <section className='flex w-full'>

        <section className='w-12'>
          <SideNavbar />
        </section>

        <section className="w-full p-0 overflow-hidden">
          <div className="fixed top-0 left-0 right-0 z-30">
            <DashbordNavbar />
          </div>

          <div className="pt-12">
            <Routes>
              <Route path='/' element={<MainContainer />}></Route>
              <Route path='/history' element={<History />}></Route>
              <Route path='/charts' element={<Charts />}></Route>
            </Routes>
          </div>

        </section>

      </section>


    </div>
  )
}

export default Dashbord