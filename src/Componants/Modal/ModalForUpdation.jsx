import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Autocomplete, TextField } from '@mui/material';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../FireBase/firebase';
import { toast } from 'react-toastify';

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


const ModalForUpdation = ({ open, setOpen, transition, uid, setUpdateTransition }) => {


    console.log(transition, uid);

    if(transition === null ) return;

    const [formData, setFormData] = useState(transition)

    const handleClose = () => setOpen(false);

    const handelSubmit = async (e) => {
        e.preventDefault();
        setOpen(false)
        try {
            let frankDocRef = doc(db, `users/${uid}/transactions/${formData.id}`);
            await updateDoc(frankDocRef, formData);
            toast.success('Update Successful 👍')
            setUpdateTransition(null)
            // setFormData(defaultFromData)
        }
        catch (e) {
            toast.error(e.message)
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
                        Update
                    </Typography>

                    <form onSubmit={handelSubmit} className='flex flex-col gap-4'>
                        <TextField value={formData.name} name='name' onChange={(e) => { handelChange(e, e.target.name) }} fullWidth label="Name" variant="standard" />
                        <TextField value={formData.amount} name='amount' onChange={(e) => { handelChange(e, e.target.name) }} type='number' fullWidth label="Amount" variant="standard" />
                        <TextField value={formData.date} name='date' onChange={(e) => { handelChange(e, e.target.name) }} type='date' fullWidth label=" " variant="standard" />

                        <Autocomplete size='small'
                            fullWidth
                            freeSolo
                            disablePortal
                            id="combo-box-demo"
                            options={tagsOptions}
                            getOptionLabel={(option) => option}

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
    )
}

export default ModalForUpdation