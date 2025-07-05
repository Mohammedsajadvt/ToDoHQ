import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";

const ProtectedRoute = () => {
    const { user } = useAppSelector((state) => state.auth);
    return user ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectedRoute;