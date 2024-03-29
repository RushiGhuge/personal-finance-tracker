import React, { lazy } from 'react'
import History from '../../Componants/History/History'

const Balance = lazy(() => import('../../Componants/DashbordsComponants/Balance'))
const Income = lazy(() => import('../../Componants/DashbordsComponants/Income'))
const Expenses = lazy(() => import('../../Componants/DashbordsComponants/Expenses'))
const Statistics = lazy(() => import('../../Componants/DashbordsComponants/Statistics'))
const AllExpenses = lazy(() => import('../../Componants/DashbordsComponants/AllExpenses'))


const MainContainer = () => {
    return (
        <main>
            <div >
                <h1 className="text-2xl font-bold pl-6">Dashbord</h1>
            </div>
            <div className='grid dashbord rounded-lg   text-white dark:bg-slate-900 dark:text-white  grid-cols-3 h-full gap-6 p-6 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:p-3 max-sm:gap-3'>

                <div className="shadow-2xl balance-container rounded-xl p-6 max-lg:col-span-2 max-sm:col-span-1">
                    <Balance />
                </div>

                <div className=" shadow-lg text-slate-900 bg-slate-50   dark:text-white rounded-xl p-6 dark:bg-black/25">
                    <Income />
                </div>

                <div className=" shadow-lg  text-slate-900 bg-slate-50  dark:bg-black/25 dark:text-white rounded-xl p-6">
                    <Expenses />
                </div>


                <div className=" shadow-lg  text-slate-900 bg-slate-50  dark:bg-black/25 dark:text-white rounded-xl p-6 col-span-2 max-sm:col-span-1">
                    <Statistics />
                </div>

                <div className=" shadow-lg  text-slate-900 bg-slate-50  dark:bg-black/25 dark:text-white rounded-xl p-6 max-lg:col-span-2 max-sm:col-span-1">
                    <AllExpenses />
                </div>
            </div>

            <div>
                <History />
            </div>
        </main>


    )
}

export default MainContainer