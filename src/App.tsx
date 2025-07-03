import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './features/auth/pages/LoginPage';
import SignupPage from './features/auth/pages/SignupPage';



function App() {

  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<SignupPage />} />
    </Routes>
  )
}

export default App
