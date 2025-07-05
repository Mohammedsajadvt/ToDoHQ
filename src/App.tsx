import './App.css'
import { Routes, Route } from "react-router-dom";
import LoginPage from './features/auth/LoginPage';
import SignupPage from './features/auth/SignupPage';
import AppLayout from './app-layout/AppLayout';
import NotFound from './app-layout/NotFound';
import DashboardPage from './features/dashboard/DashboardPage';
import VitalTaskPage from './features/dashboard/VitalTask';
import MyTaskPage from './features/dashboard/MyTask';
import TaskCategoriesPage from './features/dashboard/TaskCategories';
import SettingsPage from './features/dashboard/Settings';
import HelpPage from './features/dashboard/Help';
import GuestRoute from './components/route/GuestRoute';
import ProtectedRoute from './components/route/ProtectedRoute';


function App() {

  return (
    <Routes>
      <Route element={<GuestRoute />}>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<SignupPage />} />
      </Route>
     <Route element={<ProtectedRoute />}>
        <Route path='/dashboard' element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path='vitaltask' element={<VitalTaskPage />} />
          <Route path='my-task' element={<MyTaskPage />} />
          <Route path='task-categories' element={<TaskCategoriesPage />} />
          <Route path='settings' element={<SettingsPage />} />
          <Route path='help' element={<HelpPage />} />
        </Route>
      </Route>
      <Route path="*" element={< NotFound />} />
    </Routes>
  )
}

export default App
