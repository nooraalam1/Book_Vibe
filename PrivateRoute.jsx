import { useContext } from "react";
import { AuthContext } from "./src/Components/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { users, loading } = useContext(AuthContext)
    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if (users) {
        return children;
    }


    return <Navigate state={location.pathname} to='/signin'></Navigate>;

};

export default PrivateRoute;