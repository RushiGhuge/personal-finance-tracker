import { Backdrop, Button, CircularProgress, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db, provider } from '../../FireBase/firebase';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { AddUser } from '../../Redux/Reducers/UserSlice';
import { useDispatch } from 'react-redux';
import { themeSwitcher } from '../../Redux/Reducers/ThemeSlice';


const SignIn = () => {

    const dispatch = useDispatch();


    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        conformPassword: ''
    }); // set the users data...


    const handelChange = (event, name) => {
        setUser({ ...user, [name]: event.target.value })
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        if (user.name == '' && user.email == '') {
            toast.error('Fill Correct Data!')
            return
        }
        if (user.password.length < 6) {
            toast.error('Password Length Shoud me More that 6')
            return
        }
        if (user.password !== user.conformPassword) {
            toast.error('Password Shoud me Match')
            return
        }
        // check all the details & fill data correct...
        setIsLoading(true)
        // Athenticate The User
        // const auth = getAuth();
        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                setIsLoading(false)
                toast.success("User Login Successfuly ✅");
                dispatch(AddUser(user))
                navigate('/dashbord')
                createDoc(user)
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

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.classList.add('dark')
            dispatch(themeSwitcher('dark'))
        }
    }, [])

    return (
        <div>
            <div className='flex flex-col gap-10 justify-center items-center h-full w-full'>
                <h1 className="text-3xl font-bold dark:text-slate-200">🤑 Sign Up On Financely 💸</h1>

                <form onSubmit={handelSubmit} className="flex flex-col w-96 items-center shadow-xl p-5 gap-3 rounded-lg bg-white  dark:bg-black/25">
                    <TextField name={'name'} value={user.name} fullWidth label="Name" variant="standard" onChange={(e) => { handelChange(e, e.target.name) }} />
                    <TextField name={'email'} value={user.email} fullWidth label="Email" variant="standard" onChange={(e) => { handelChange(e, e.target.name) }} />
                    <TextField name={'password'} value={user.password} fullWidth type='password' label="Password" variant="standard" onChange={(e) => { handelChange(e, e.target.name) }} />
                    <TextField name={'conformPassword'} value={user.conformPassword} fullWidth type='password' label="Conform Password" variant="standard" onChange={(e) => { handelChange(e, e.target.name) }} />

                    <div className="w-full flex flex-col items-center pt-8 gap-2">
                        <Button type='submit' fullWidth variant="outlined">Signup With Email</Button>
                        <span >or</span>
                        <Button onClick={signInWithGooglePopUp} fullWidth variant="contained">Signup With Google</Button>

                        <p className='mt-2'>Alredy Have Account, <Link to={'/login'} className='text-blue-600 font-bold underline'>Log In</Link></p>

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

export default SignIn