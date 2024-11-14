import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { signOut } from "firebase/auth";

const Nav = () => {
    const { users, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => {
                alert("Logout SuccessFull")
            }).catch((error) => {
                // An error happened.
            });
    }

    return (
        <div className="p-4">
            {/* Container for "Book Vibe" and other items */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-center">
                {/* Book Vibe */}
                <h1 className="text-3xl mb-4 sm:mb-0">Book Vibe</h1>

                {/* Navigation and Buttons */}
                <div className="flex flex-col sm:flex-row sm:gap-8 items-center">
                    {/* Routes */}
                    <div className="flex gap-4 mb-4 sm:mb-0 sm:mr-4">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            <button className="btn btn-outline btn-accent">Home</button>
                        </NavLink>
                        <NavLink
                            to="/listedbooks"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "color:red"
                            }
                        >
                            <button className="btn btn-outline btn-accent">Listed Books</button>
                        </NavLink>
                        <NavLink
                            to="/pagestoread"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            <button className="btn btn-outline btn-accent">Pages to Read</button>
                        </NavLink>
                    </div>

                    {/* Sign Up and Sign In Buttons */}
                    <div className="flex gap-4">
                        {
                            users ? <span>
                                {
                                    users.email
                                }
                                <button onClick={handleLogout} className="btn btn-accent">Logout</button>
                            </span> : <span>
                                <NavLink to='signup' ><button className="btn btn-secondary">Register</button>
                                </NavLink>
                                <NavLink to='signin' ><button className="btn btn-accent">LogIn</button></NavLink>
                            </span>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
