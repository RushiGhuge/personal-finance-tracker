import './index.css'
import React, {lazy, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../FireBase/firebase'
import { AddUser } from '../../Redux/Reducers/UserSlice'
import SkeletonComponant from '../../Componants/Skeleton/Skeleton'
import DashbordNavbar from '../../Componants/DashbordNavbar/DashbordNavbar'

const Balance = lazy(() => import('../../Componants/DashbordsComponants/Balance'))
const Income = lazy(() => import('../../Componants/DashbordsComponants/Income'))
const Expenses = lazy(() => import('../../Componants/DashbordsComponants/Expenses'))
const Statistics = lazy(() => import('../../Componants/DashbordsComponants/Statistics'))
const AllExpenses = lazy(() => import('../../Componants/DashbordsComponants/AllExpenses'))
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

        <section className='w-3'>
          <SideNavbar />
        </section>

        <section className="w-full p-0 ">
          <div>
            <DashbordNavbar />
          </div>

          <main className='grid dashbord rounded-lg   text-white dark:bg-slate-900 dark:text-white  grid-cols-3 h-full gap-6 p-6 max-lg:grid-cols-2 max-sm:grid-cols-1 pt-16 ml-8 max-sm:p-3 max-sm:pt-14 max-sm:gap-3'>

            <div className="shadow-2xl balance-container rounded-xl p-6 max-lg:col-span-2 max-sm:col-span-1">
              <Balance />
            </div>

            <div className="shadow-lg  text-slate-900 bg-slate-50   dark:text-white rounded-xl p-6 dark:bg-black/25">
              <Income />
            </div>

            <div className="shadow-lg   text-slate-900 bg-slate-50  dark:bg-black/25 dark:text-white rounded-xl p-6">
              <Expenses />
            </div>


            <div className="shadow-lg   text-slate-900 bg-slate-50  dark:bg-black/25 dark:text-white rounded-xl p-6 col-span-2 max-sm:col-span-1">
              <Statistics />
            </div>

            <div className="shadow-lg   text-slate-900 bg-slate-50  dark:bg-black/25 dark:text-white rounded-xl p-6 max-lg:col-span-2 max-sm:col-span-1">
              <AllExpenses />
            </div>
          </main>
        </section>

      </section>

      <div className='ml-8  pt-14 p-8 bg-slate-100 dark:bg-slate-900'>
        <History />
      </div>

    </div>
  )
}

export default Dashbord