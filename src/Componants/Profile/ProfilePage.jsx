import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Balance from '../DashbordsComponants/Balance';
import { Avatar } from '@mui/material';
import { doc, deleteDoc } from "firebase/firestore";
import { auth, db } from '../../FireBase/firebase';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



// Remove the 'capital' field from the document


const ProfilePage = ({ profileOpen, setProfileOpen, user }) => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const { allTransitionData } = useSelector((state) => state.accountData)


    useEffect(() => {
        if (profileOpen) {
            handleClickOpen()
        }
    }, [profileOpen])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setProfileOpen()
    };

    const logOut = () => {
        const logOutFlag = window.confirm('Are you sure you want to log out?')
        if (logOutFlag) {
            signOut(auth).then(() => {
                // Sign-out successful.
                navigate('/login')
            }).catch((error) => {
                // An error happened.
            });
        }

    }

    const clearAllHistory = async () => {
        try {

            if (window.confirm('Are You Sure To Clear Your All History')) {
                if (window.confirm('It Will Clear Your All History')) {
                    for (let transition of allTransitionData) {
                        let frankDocRef = doc(db, `users/${user.uid}/transactions/${transition.id}`);
                        await deleteDoc(frankDocRef);
                    }
                    toast.success('All History is cleared!')
                }
            }
        }
        catch (e) {
            console.log(e.message);
            toast.error(e.message)
        }
    }

    return (
        <>

            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                // sx={{ background: 'blue' }}
                className="backdrop-blur-sm bg-transparent"
            >
                <div className='bg-slate-100 dark:bg-slate-900    text:slate-900 backdrop-sm w-screen h-screen'>

                    <AppBar sx={{ position: 'relative' }} className='bg-slate-900 dark:bg-slate-200'>
                        <Toolbar className='bg-slate-800 w-full dark:bg-slate-800'>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>

                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Finance 💰
                            </Typography>

                            <Button autoFocus variant='contained' color="error" onClick={logOut}>
                                Logout
                            </Button>
                        </Toolbar>
                    </AppBar>

                    <main className='p-6'>


                        <div className='flex flex-col gap-5'>
                            <div className='flex items-center gap-3'>
                                <Avatar sx={{ width: '35px', height: '35px' }} alt={user.email} src={user.photoURL} />
                                <h1 className='text-xl font-bold'>{user.displayName}</h1>
                            </div>

                            <div className='flex flex-col gap-2 '>
                                <p>Email : {user.email}</p>
                                <p>Phone : {user.phoneNumber}</p>
                                <p className={`${user.emailVerified ? 'text-green-600' : "text-red-700"}`}>{user.emailVerified ? 'Email Is Verified! ✅' : 'Email Is Nor Verified! ❌ '}</p>
                            </div>

                            <div className="shadow-2xl balance-container rounded-xl p-6 max-lg:col-span-2 max-sm:col-span-1">
                                <Balance />
                            </div>

                            <div>
                                <Button variant='contained' color='error' onClick={clearAllHistory}>Clear All History</Button>
                            </div>

                        </div>
                    </main>
                </div>
            </Dialog>
        </>
    );
}

export default ProfilePage