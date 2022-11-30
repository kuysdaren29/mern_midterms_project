import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUpPage from './components/SignUp/SignUpPage';
import SignInPage from './components/SignIn/SignInPage';
import DashPage from './components/DashPage/DashPage';
import { useAuthContext } from './hooks/useAuthContext';

const theme = createTheme({
  palette:{
   primary:{
    main: '#00838f'
   },
   secondary: {
    main: '#24c0dc'
   }, 
  }
})

function App() {

  const {user} = useAuthContext()

  return (
    <ThemeProvider theme={theme}>
    <Router>
        <Routes>
            <Route path='/' element={!user ? <SignInPage/> : <Navigate to ='/dashboard' />}> </Route>
            <Route path='/Sign-up' element={!user ? <SignUpPage/> : <Navigate to='/' />}> </Route>
            <Route path='/dashboard' element={user ? <DashPage/> : <Navigate to ='/' />}> </Route>
        </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
