import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import BasicModal from '../Modal/BasicModal';
import { useSelector } from 'react-redux';
import FormatedNumber from '../../Functions/FormatedNumber';


const Expenses = () => {

  const { totalExpence, expencesArray } = useSelector((s) => s.accountData)


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);


  const calculatePercentage = () => {
    const latestTransaction = expencesArray[expencesArray.length - 1]
    
    if (latestTransaction) {
      const percentage = (latestTransaction.amount / totalExpence) * 100;
      return percentage.toFixed(2); // Limit to two decimal places
    }

    return 0;
  };

  const persentage = calculatePercentage();



  return (
    <div className='flex flex-col justify-between h-full'>

      <div className='flex justify-between'>
        <h1>Expenses</h1>
        <div>
          <Tooltip title="Add Expence">
            <IconButton className='text-slate-600 dark:text-slate-50' onClick={handleOpen}> <AddIcon /> </IconButton>
          </Tooltip>

          <Tooltip title="More">
            <IconButton className='text-slate-600 dark:text-slate-50'> <MoreHorizIcon /> </IconButton>
          </Tooltip>
        </div>
      </div>

      <div>
        <h1 className='text-3xl font-bold italic'>₹{FormatedNumber(totalExpence)}</h1>
        <div className='flex justify-between'>
          <span className='text-gray-500'>this week's Income</span>
          <span className={` px-2 rounded-full ${persentage < 0 ? 'text-red-900 bg-red-300' : 'text-green-900 bg-green-300'} `}>{persentage}%</span>
        </div>
      </div>

      <BasicModal open={open} setOpen={setOpen} handleOpen={handleOpen} isCredit={false} />
    </div>

  )
}

export default Expenses