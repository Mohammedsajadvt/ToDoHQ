import './App.css'
import { Routes, Route } from "react-router-dom";
import LoginPage from './features/auth/pages/LoginPage';
import SignupPage from './features/auth/pages/SignupPage';
import AppLayout from './app-layout/AppLayout';
import NotFound from './app-layout/NotFound';
import DashboardPage from './features/dashboard/pages/DashboardPage';
import Settings from './features/dashboard/pages/Settings';
import VitalTaskPage from './features/dashboard/pages/VitalTask';
import MyTaskPage from './features/dashboard/pages/MyTask';
import TaskCategoriesPage from './features/dashboard/pages/TaskCategories';
import SettingsPage from './features/dashboard/pages/Settings';
import HelpPage from './features/dashboard/pages/Help';


function App() {

  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<SignupPage />} />
      <Route path='/dashboard' element={<AppLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path='vitaltask' element={< VitalTaskPage />} />
        <Route path="my-task" element={<MyTaskPage />} />
        <Route path="task-categories" element={<TaskCategoriesPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="help" element={<HelpPage />} />
      </Route>
      <Route path="*" element={< NotFound />} />
    </Routes>
  )
}

export default App
