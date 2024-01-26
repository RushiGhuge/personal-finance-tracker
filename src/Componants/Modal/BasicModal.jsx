import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { db } from '../../FireBase/firebase';
import { addTransition } from '../../Redux/Reducers/AccountDataSlice';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '1rem'
};


const tagsOptions = [
    'Others',
    'Shoping',
    'Freelancing',
    'Share Market',
    'Rent',
    'Insurance',
    'Fuel',
    'Entertainment',
    'Food'
]


export default function BasicModal({ open, setOpen, handleOpen, isCredit }) {

    const defaultFromData = {
        name: '', amount: '', tag: 'Others', date: '', type: isCredit ? "Credit" : "Debit"
    }
    const [formData, setFormData] = useState(defaultFromData)
    const { user } = useSelector((s) => s.User);
    const dispatch = useDispatch();
    const handleClose = () => setOpen(false);

    const handelSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
        addTransaction({ ...formData, createdAt: Number(new Date()) })
        // await setDoc(doc(db, "users", user.uid), formData);

        // set to empty
        setFormData(defaultFromData)
        handleClose();
    }

    async function addTransaction(formdata) {
        try {
            const docRef = await addDoc(
                collection(db, `users/${user.uid}/transactions`), formdata
            )
            let frankDocRef = doc(db, `users/${user.uid}/transactions/${docRef.id}`);
            await updateDoc(frankDocRef, {
                id:docRef.id
            });

            toast.success('Transaction Success!')
            dispatch(addTransition());
        } catch (e) {
            toast.error('Transaction Faild')
        }
    }

    const handelChange = (e, name) => {
        setFormData({ ...formData, [name]: e.target.value })
    }


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="bg-slate-200 dark:bg-slate-800" >

                    <Typography className=" text-slate-900 dark:text-slate-100 pb-4" id="modal-modal-title" variant="h6" component="h2">
                        {isCredit ? 'Add Incomes and Credits' : 'Add Expence and Debits'}
                    </Typography>

                    <form onSubmit={handelSubmit} className='flex flex-col gap-4'>
                        <TextField value={formData.name} name='name' onChange={(e) => { handelChange(e, e.target.name) }} fullWidth label="Name" variant="standard" />
                        <TextField value={formData.amount} name='amount' onChange={(e) => { handelChange(e, e.target.name) }} type='number' fullWidth label="Amount" variant="standard" />
                        <TextField value={formData.date} name='date' onChange={(e) => { handelChange(e, e.target.name) }} type='date' fullWidth label=" " variant="standard" />
                        {/* <TextField value={formData.tag} name='tag' onChange={(e) => { handelChange(e, e.target.name) }} fullWidth label="Tags" variant="standard" /> */}

                        <Autocomplete size='small'
                            fullWidth
                            freeSolo
                            disablePortal
                            id="combo-box-demo"
                            options={tagsOptions}
                            getOptionLabel={(option) => option}
                            // sx={{ width: 300 }}
                            value={formData.tag}
                            onChange={(e, newValue) => {
                                console.log(newValue, e);
                                setFormData({ ...formData, 'tag': newValue })
                            }}
                            renderInput={(params) => <TextField
                                fullWidth variant="standard"
                                onChange={(e) => {
                                    setFormData({ ...formData, 'tag': e.target.value });
                                    console.log(e.target.value)
                                }
                                }
                                {...params} label="Tags" />}
                        />

                        <div className='flex w-full items-center justify-between mt-10'>
                            <Button className='text-slate-900 dark:text-slate-100' onClick={handleClose} variant="outline">Cancel</Button>
                            <Button className='text-slate-900 dark:text-slate-100' type='submit'>Add</Button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
