import './index.css'
import { onSnapshot, query, collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../../FireBase/firebase';
import { addTransition } from '../../Redux/Reducers/AccountDataSlice';
import { lazy, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { parse, unparse } from 'papaparse';
import { toast } from 'react-toastify';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const EmptyHistory = lazy(() => import('./EmptyHistory'))
const TableHistory = lazy(() => import('./TableHistory'))



const History = () => {

  const [input, setInput] = useState('');
  const [typeInput, setTypeInput] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('None');


  // console.log(typeInput);
  const dispatch = useDispatch();
  const { user } = useSelector((s) => s.User);
  const transitionData = useSelector((s) => s.accountData.allTransitionData);



  async function fetchData() {
    // console.log('hi');
    const q = query(collection(db, `users/${user.uid}/transactions`));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      // let arr = SortByTime(data);
      dispatch(addTransition(data))
    });
  }


  useEffect(() => {
    if (user) {
      fetchData()
    }
    return () => { }
  }, [user])

  const filterdData = transitionData.filter((ele) => ele.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()) && ele.type.includes(typeInput))

  const sortedData = [...filterdData].sort((a, b) => {
    if (selectedFilter === 'Oldest to Newest') {
      return new Date(a.date) - new Date(b.date);
    }
    else if (selectedFilter === 'Newest to Oldest') {
      return new Date(b.date) - new Date(a.date);
    }
    else if (selectedFilter === 'amountIncreasingOrder') {
      return Number(a.amount) - Number(b.amount)
    }
    else if (selectedFilter === 'amountDecreasingOrder') {
      return Number(b.amount) - Number(a.amount)
    }
    else {
      return;
    }
  })


  const handleChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const exportToCsv = () => {
    // Specifying fields and data explicitly
    var csv = unparse({
      fields: ["name", "type", "tag", "date", "amount"],
      data: filterdData
    });

    var data = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    var csvURL = window.URL.createObjectURL(data);
    const tempLink = document.createElement('a');
    tempLink.href = csvURL;
    tempLink.setAttribute('download', 'transactions.csv');
    tempLink.click();
  }

  const importFromCsv = (event) => {
    event.preventDefault();
    try {
      parse(event.target.files[0], {
        header: true,
        complete: async function (result) {
          for (let i = 0; i < result.data.length; i++) {
            const docRef = await addDoc(collection(db, `users/${user.uid}/transactions`), result.data[i])
            let frankDocRef = doc(db, `users/${user.uid}/transactions/${docRef.id}`);
            await updateDoc(frankDocRef, {
              id: docRef.id
            });
          }
          toast.success('Transaction Success!')
          dispatch(addTransition());
        }
      })
    }
    catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <main className='w-full flex flex-col gap-4  bg-slate-100 dark:bg-slate-900 p-6 max-sm:p-3'>

      <div className='flex justify-between'>
        <h1 className='text-slate-700 dark:text-slate-200 font-bold text-2xl'>History Transitions</h1>
      </div>

      <div className='flex gap-4 max-sm:flex-col'>

        <form className="flex w-full gap-4 rounded-md px-3  bg-slate-50 text-slate-900 dark:text-slate-50 dark:bg-slate-700">
          <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className="w-full pl-2 outline-none rounded-full bg-transparent" placeholder='Search' />
          <Button>Search</Button>
        </form>

        <div className="w-32">
          <FormControl variant="outlined" fullWidth size='small'>
            <InputLabel id="Transition-type">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={typeInput}
              label="Age"
              onChange={(e) => setTypeInput(e.target.value)}
            >
              <MenuItem value={''}>All</MenuItem>
              <MenuItem value={'Credit'}>Credits</MenuItem>
              <MenuItem value={'Debit'}>Debits</MenuItem>
            </Select>
          </FormControl>
        </div>

      </div>

      <div className="flex justify-end items-center gap-3 pt-3 max-sm:justify-center max-sm:flex-col">

        <div>
          <FormControl variant="outlined" fullWidth size='small'>
            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedFilter}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={'None'}>None</MenuItem>
              <MenuItem value={'Oldest to Newest'}>Oldest to Newest</MenuItem>
              <MenuItem value={'Newest to Oldest'}>Newest to Oldest</MenuItem>
              <MenuItem value={'amountIncreasingOrder'}>Amount Increasing Order</MenuItem>
              <MenuItem value={'amountDecreasingOrder'}>Amount Decreasing Order</MenuItem>

            </Select>
          </FormControl>
        </div>

        <div className='flex gap-2  max-sm:flex-row'>
          <Button onClick={exportToCsv} variant="outlined">Export To CSV</Button>
          <Button variant="contained">
            <label htmlFor="file">
              Import From CSV
            </label>
          </Button>
          <input onChange={importFromCsv} type="file" id='file' className="hidden" />
        </div>
      </div>



      {/* <SearchHistory /> */}

      {filterdData.length <= 0 ?
        <EmptyHistory />
        :
        <TableHistory transitionData={sortedData} />
      }



    </main>
  )
}

export default History