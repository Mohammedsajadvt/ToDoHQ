import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";


const GuestRoute = () => {

    const { user } = useAppSelector((state) => state.auth);
    return user ? <Navigate to="/dashboard" replace /> : <Outlet />
}

export default GuestRoute;
