import { Backdrop, Button, CircularProgress, TextField } from '@mui/material'
import React, { useState } from 'react'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db, provider } from '../../FireBase/firebase';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddUser } from '../../Redux/Reducers/UserSlice';

const LogIn = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({
        email: '',
        password: '',
    }); // set the users data...


    const handelChange = (event, name) => {
        setUser({ ...user, [name]: event.target.value })
    }

    const handelSubmit = (e) => {
        e.preventDefault()

        if (user.name == '' && user.email == '') {
            toast.error('Fill the correct Data!')
            return
        }
        // check all the details & fill data correct...
        setIsLoading(true)
        // Athenticate The User
        // const auth = getAuth();
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                setIsLoading(false)
                toast.success("User Login Successfuly ✅");
                navigate('/dashbord')

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setIsLoading(false)
                toast.error(errorMessage);
                // ..
            });
    }


    function signInWithGooglePopUp() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user);
                createDoc(user);
                dispatch(AddUser(user))
                toast.success("User LogIn Successfully 😄")
                navigate('/dashbord')

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage)
                // The email of the user's account used.
                // const email = error.customData.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    async function createDoc(user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
            try {
                await setDoc(doc(db, "users", user.uid), {
                    email: user.email,
                    photoURL: user.photoURL,
                    createdAt: new Date(),
                    displayName: user.displayName
                });
                toast.success('Doc Created')
            } catch (e) {
                toast.error(e.message)
            }
        }
        else {
            toast.error('Doc Exists!')
        }
    }

    return (
        <div className="">

            <div className='flex flex-col gap-10 justify-center items-center h-full w-full'>
                <h1 className="text-3xl font-bold">🤑 Log In On Financely 💸</h1>

                <form onSubmit={handelSubmit} className="flex flex-col w-96 items-center border-2 p-5 gap-3 rounded-lg bg-slate-100">

                    <TextField name={'email'} value={user.email} fullWidth label="Email" variant="standard" onChange={(e) => { handelChange(e, e.target.name) }} />
                    <TextField name={'password'} value={user.password} fullWidth type='password' label="Password" variant="standard" onChange={(e) => { handelChange(e, e.target.name) }} />

                    <div className="w-full flex flex-col items-center pt-8 gap-2">

                        <Button type='submit' fullWidth variant="outlined">Log In</Button>
                        <span >or</span>
                        <Button onClick={signInWithGooglePopUp} fullWidth variant="contained">Log In With Google</Button>

                        <p className='mt-6'>If You Don't Have Account, <Link to={'/'} className='text-blue-600 font-bold underline'>New User?</Link></p>
                    </div>
                </form>
            </div>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>

    )
}

export default LogIn