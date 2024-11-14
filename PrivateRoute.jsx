import { useContext } from "react";
import { AuthContext } from "./src/Components/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { users } = useContext(AuthContext)
    if (users) {
        return children;
    }


    return <Navigate to='/signup'></Navigate>;

};

export default PrivateRoute;