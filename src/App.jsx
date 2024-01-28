import './App.css'
import Navbar from './Componants/Navbar/Navbar'
import { Route, Routes, } from 'react-router-dom'
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux'
import { Suspense, lazy } from 'react'
import SkeletonComponant from './Componants/Skeleton/Skeleton';
const LogIn = lazy(() => import('./Pages/LogIn/LogIn'))
const SignIn = lazy(() => import('./Pages/SignIn/Signin'))
const Dashbord = lazy(() => import('./Pages/Dashbord/Dashbord'))





function App() {

  const theme = useTheme();
  const colorMode = useSelector((state) => state.Theme.theme);
  const newTheme = createTheme({ palette: { mode: colorMode || 'light' } });

  return (
    <main>
      <Suspense fallback={<SkeletonComponant />}>
        <ThemeProvider theme={newTheme}>
          <Routes>
            <Route path='/' element={<> <Navbar /> <SignIn /> </>} />
            <Route path='/login' element={<> <Navbar /> <LogIn /> </>} />
            <Route path='/dashbord/*' element={<Dashbord />} />
          </Routes>
        </ThemeProvider>
      </Suspense>
    </main>
  )
}

export default App
