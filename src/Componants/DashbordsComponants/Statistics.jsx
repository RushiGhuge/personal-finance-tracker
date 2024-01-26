import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import { useSelector } from 'react-redux';


const Statistics = () => {

  const { expencesArray, incomesArray, datesArray } = useSelector((state) => state.accountData)


  // console.log(expencesArray, incomesArray, datesArray);

  // convert the object into numbers
  const expenceArr = expencesArray.map((ele) => ele.amount);

  // const xLabels = [
  //   1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16
  // ];

  const datesArrayConverted = datesArray.map((date) => {
    const formattedDate = new Date(date * 1000).toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' });
    return formattedDate;
  })

  return (
    <div>
      <h1>Statistics</h1>

      <div className='text-red-900'>
        <LineChart
          color="inherit"
          height={400}
          margin={{
            left: 60,
            right: 40,
            top: 70,
            bottom: 40,
          }}
          sx={{
            '.MuiLineElement-root': {
              strokeWidth: 3,
            },
            '.MuiMarkElement-root': {
              // stroke: '#8884d8',
              scale: '0.6',
              fill: '#fff',
              strokeWidth: 5,
              zIndex:100
            },
          }}
          series={[
            { data: expenceArr, label: 'Expenses', color: '#e15759' },
            { data: incomesArray, label: 'Income', color: '#59a14f' },
          ]}
          xAxis={[{ scaleType: 'point', data: datesArrayConverted }]}
        />
      </div>

    </div>
  )
}

export default Statistics