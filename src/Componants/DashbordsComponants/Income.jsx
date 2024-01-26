import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import BasicModal from '../Modal/BasicModal';
import { useSelector } from 'react-redux';
import FormatedNumber from '../../Functions/FormatedNumber';


const Income = () => {


  const totalIncome = useSelector((s) => s.accountData.totalIncome)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const { user } = useSelector((s) => s.User);

  return (
    <div className='flex flex-col justify-between h-full'>

      <div className='flex justify-between'>
        <h1>Income</h1>
        <div>
        <Tooltip title="Add Income">
          <IconButton onClick={handleOpen} className='text-slate-600 dark:text-slate-50'> <AddIcon /> </IconButton>
        </Tooltip>

        <Tooltip title="More">
          <IconButton className='text-slate-600 dark:text-slate-50'> <MoreHorizIcon /> </IconButton>
        </Tooltip>
        </div>
      </div>

      <div>
        <h1 className='text-3xl font-bold italic  '>₹{FormatedNumber(totalIncome)}</h1>
        <div className='flex justify-between'>
          <span className='text-gray-500'>this week's Income</span>
          <span className='bg-red-300 px-2 rounded-full text-red-900'>-12%</span>
        </div>
      </div>

      <BasicModal open={open} setOpen={setOpen} handleOpen={handleOpen} isCredit={true} />

    </div>
  )
}

export default Income