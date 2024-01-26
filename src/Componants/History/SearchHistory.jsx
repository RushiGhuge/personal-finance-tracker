import { Button, ButtonGroup } from '@mui/material'
import React from 'react'

const SearchHistory = () => {



  return (
    <main>
      <div className="flex justify-center mt-5">
        <ButtonGroup
          size="small"
          variant="contained">
          <Button >Sort by Date</Button>
          <Button>Sort By Amount</Button>
          <Button>Submit</Button>
        </ButtonGroup>
      </div>
    </main>
  )
}

export default SearchHistory