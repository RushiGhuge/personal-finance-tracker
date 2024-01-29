import React from 'react'
import Statistics from '../../Componants/DashbordsComponants/Statistics'
import AllExpenses from '../../Componants/DashbordsComponants/AllExpenses'

const Charts = () => {
    return (
        <div className='p-6 pt-0'>
            <h1 className='font-bold text-2xl pb-3'>Charts</h1>

            <div className=' flex flex-col gap-14'>
                <div>
                    <Statistics fullscreen={true} />
                </div>

                <div className="w-full">
                    <AllExpenses fullscreen={true} />
                </div>

            </div>
        </div>
    )
}

export default Charts