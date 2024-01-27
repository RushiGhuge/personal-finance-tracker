import { PieChart, pieArcLabelClasses } from '@mui/x-charts'
import React from 'react'
import { useSelector } from 'react-redux'

const sizing = {
  margin: { right: 1, bottom: 10 },
  legend: {
    direction: 'row',
    position: { vertical: 'bottom', horizontal: 'left' },
    padding: 10,
  },
};

const AllExpenses = () => {

  const expenceArr = useSelector(((state) => state.accountData.expencesArray))



  const map = new Map();
  expenceArr.forEach((ele, ind) => {
    const { tag, amount } = ele;
    if (map.has(tag)) {
      map.set(tag, map.get(tag) + amount)
    }
    else {
      map.set(tag, amount)
    }
  })


  const data = [];
  map.forEach((amount, tag) => {
    console.log(amount, tag);
    data.push(
      { id: tag, value: amount, label: tag },
    )
  })

  


  return (
    <div>

      <h1>AllExpenses</h1>

      <div>
        <PieChart
          series={[
            {
              data: data,
              innerRadius: 0,
              outerRadius: 100,
              paddingAngle: 0,
              cornerRadius: 3,
              startAngle: -180,
              endAngle: 180,
              cx: 120,
              cy: 120,
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            },

          ]}

          height={350}
          {...sizing}
        />
      </div>

    </div>
  )
}

export default AllExpenses