import { Button, IconButton, Pagination, Tooltip } from '@mui/material';
import FormatedNumber from '../../Functions/FormatedNumber';
import { useState } from 'react';
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../../FireBase/firebase';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import ModalForUpdation from '../Modal/ModalForUpdation';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TableHistory = ({ transitionData }) => {

    const [page, setPage] = useState(1);
    const { user } = useSelector((s) => s.User);
    const [updateTransition, setUpdateTransition] = useState(null);
    const [openModal, setOpenModal] = useState(false);


    console.log(transitionData);
    const data = transitionData.slice((page - 1) * 10, (page - 1) * 10 + 10)


    const deleteTransition = async (id) => {
        try {
            let frankDocRef = doc(db, `users/${user.uid}/transactions/${id}`);
            await deleteDoc(frankDocRef);
            toast.success('Delete Successful 👍')
        }
        catch (e) {
            toast.error(e.message)
        }
    }

    // const updateTransition = async (id) => {
    //     try {
    //         let frankDocRef = doc(db, `users/${user.uid}/transactions/${id}`);
    //         await updateDoc(frankDocRef, {
    //             name: 'Ambani',
    //             tag: 'Fule',
    //             amount: '101010'
    //         });
    //         toast.success('Update Successful 👍')
    //     }
    //     catch (e) {
    //         toast.error(e.message)
    //     }
    // }

    return (
        <main className='pt-10 overflow-x-auto'>
            <table className="rounded-md w-full text-left histroy-table text-slate-900 dark:text-slate-50 bg-slate-50 dark:bg-slate-800">

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
                            <tr key={id}>
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
                                        <IconButton onClick={() => deleteTransition(transaction.id)}><DeleteIcon /></IconButton>
                                    </Tooltip>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div className='flex mt-10 justify-center    '>
                <Pagination count={transitionData.length / 10} page={page} variant="outlined" shape="rounded" onChange={(e, value) => setPage(value)} />
            </div>

            <ModalForUpdation open={openModal} setOpen={setOpenModal} uid={user.uid} setUpdateTransition={setUpdateTransition} transition={updateTransition} />

        </main>
    )
}

export default TableHistory