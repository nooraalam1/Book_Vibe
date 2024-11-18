import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './firebase.config';

const Signin = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const { loginUser } = useContext(AuthContext)
    const handleSignin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

        loginUser(email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                alert("Success")
                e.target.reset()
                navigate(location?.state ? location.state : '/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("error")

            });


    }

    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const handleGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user

            })
            .catch((error) => {
                console.log(error)
            })

    }


    return (
        <div>
            <div className="">
                <h1 className="font-bold">
                    Please Login
                </h1>
            </div>
            <form onSubmit={handleSignin}>
                <input
                    type="email"
                    name='email'
                    placeholder="Email"
                    className="input input-bordered input-primary w-full max-w-xs" /> <br />

                <input
                    type="Password"
                    name='password'
                    placeholder="Password"
                    className="input input-bordered input-primary w-full max-w-xs" /> <br />
                <button type='submit' className="btn btn-accent">Submit</button>
            </form>
            <div className="">
                <div className="">
                    <button onClick={handleGoogle} className="btn btn-accent">Continue With Google</button>
                </div>
                <h1 className="">
                    <NavLink to='/signin'><button className=''>Don't Have an Account?</button></NavLink>
                </h1>
            </div>
        </div>
    );
};

export default Signin;