import React, { useRef } from 'react';
import { IconButton, Pagination, Tooltip } from '@mui/material';
import FormatedNumber from '../../Functions/FormatedNumber';
import { lazy, useState } from 'react';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../../FireBase/firebase';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';




const ModalForUpdation = lazy(() => import('../Modal/ModalForUpdation'))


const TableHistory = ({ transitionData }) => {

    const [page, setPage] = useState(1);
    const { user } = useSelector((s) => s.User);
    const [updateTransition, setUpdateTransition] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [openDeleteModel, setOpenDeleteModel] = useState(false);
    let currentIdForDelete = useRef(null);

    const handleClickOpen = (id) => {
        currentIdForDelete.current = id;
        setOpenDeleteModel(true);
    };

    const handleClose = () => {
        setOpenDeleteModel(false);
    };

    const data = transitionData.slice((page - 1) * 10, (page - 1) * 10 + 10)

    const deleteTransition = async (id) => {
        handleClose()
        try {

            let frankDocRef = doc(db, `users/${user.uid}/transactions/${id}`);
            await deleteDoc(frankDocRef);
            toast.success('Delete Successful 👍')

        }
        catch (e) {
            toast.error(e.message)
        }
    }



    return (
        <main className='pt-10 overflow-x-auto'>
            <table className="rounded-md w-full text-left histroy-table text-slate-900 dark:text-slate-50 bg-slate-50 dark:bg-black/10  ">

                <thead>
                    <tr className="">
                        <th>Name</th>
                        <th>Credit/Debit</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Tag</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((transaction, id) => {

                        const formattedDate = new Date(transaction.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        });

                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.name}</td>
                                <td >
                                    <span className={`${transaction.type === 'Credit' ? 'bg-green-300 text-green-950' : 'bg-red-300 text-red-950'} px-2 py-1 rounded-md`}>
                                        {transaction.type}
                                    </span>
                                </td>
                                <td>₹{FormatedNumber(Number(transaction.amount))}</td>
                                <td>{formattedDate}</td>
                                <td>{transaction.tag}</td>
                                <td className='flex gap-1'>

                                    <Tooltip title="Edit" arrow>
                                        <IconButton onClick={() => {
                                            setUpdateTransition(transaction)
                                            setOpenModal(true)
                                        }}><EditIcon /></IconButton>
                                    </Tooltip>

                                    <Tooltip title="Delete" arrow>
                                        <IconButton onClick={() => handleClickOpen(transaction.id)}><DeleteIcon /></IconButton>
                                    </Tooltip>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div className='flex mt-10 justify-center    '>
                <Pagination count={Math.ceil(transitionData.length / 10)} page={page} variant="outlined" shape="rounded" onChange={(e, value) => setPage(value)} />
            </div>

            <ModalForUpdation open={openModal} setOpen={setOpenModal} uid={user.uid} setUpdateTransition={setUpdateTransition} transition={updateTransition} />

            <React.Fragment>
                <Dialog
                    open={openDeleteModel}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    className="backdrop-blur-sm"
                >
                    <DialogTitle id="alert-dialog-title" >
                        {"Are you sure you want to delete this transaction?"}
                    </DialogTitle>

                    <DialogActions >
                        <Button size='small' onClick={handleClose}>Cancel</Button>
                        <Button size='small' color="error" onClick={() => deleteTransition(currentIdForDelete.current)} autoFocus>
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>

        </main>
    )
}

export default TableHistory