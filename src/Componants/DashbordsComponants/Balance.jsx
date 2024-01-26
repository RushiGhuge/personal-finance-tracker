import React from 'react'
import { useSelector } from 'react-redux'
import FormatedNumber from '../../Functions/FormatedNumber'
const Balance = () => {

    const totalBalance = useSelector((s) => s.accountData.totalBalance)

    return (
        <div >
            <span className="text-slate-50 font-bold">Balance</span>
            <h1 className="font-bold text-3xl italic text-slate-50 ">₹ {FormatedNumber(totalBalance)}</h1>

            <div className='mt-10 text-gray-100'>
                <span>1234 1234 1234 ****</span>
                <span>27/8</span>
            </div>
        </div>

    )
}

export default Balance