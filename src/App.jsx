import './App.css'
import Navbar from './Componants/Navbar/Navbar'
import Dashbord from './Pages/Dashbord/Dashbord'
import LogIn from './Pages/LogIn/LogIn'
import SignIn from './Pages/SignIn/Signin'
import { Route, Routes, } from 'react-router-dom'
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux'



function App() {

  const theme = useTheme();
  const colorMode = useSelector((state) => state.Theme.theme);
  const newTheme = createTheme({ palette: { mode: colorMode || 'light' } });

  return (
    <ThemeProvider theme={newTheme}>
      <Routes>
        <Route path='/' element={<> <Navbar /> <SignIn /> </>} />
        <Route path='/login' element={<> <Navbar /> <LogIn /> </>} />
        <Route path='/dashbord' element={<Dashbord />} />
      </Routes>
    </ThemeProvider>

  )
}

export default App
