import React from 'react'
import Statistics from '../../Componants/DashbordsComponants/Statistics'
import AllExpenses from '../../Componants/DashbordsComponants/AllExpenses'

const Charts = () => {
    return (
        <div className='p-6 flex flex-col gap-14'>
            <div>
                <Statistics fullscreen={true} />
            </div>

            <div className="w-full">
                <AllExpenses fullscreen={true} />
            </div>

        </div>
    )
}

export default Charts