import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { NavLink } from 'react-router-dom';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './firebase.config';

const Signup = () => {
    const { createUser } = useContext(AuthContext)
    const handleSignup = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const name = e.target.name.value
        const password = e.target.password.value
        console.log(email, name, password)

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                e.target.reset()
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }

    const provider = new GoogleAuthProvider()
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
        <div className=''>
            <div className="">
                <h1 className="font-bold">
                    Please Register
                </h1>
            </div>
            <form onSubmit={handleSignup}>
                <input
                    type="email"
                    placeholder="Email"
                    name='email'
                    className="input input-bordered input-primary w-full max-w-xs" /> <br />
                <input
                    type="text"
                    placeholder="Name"
                    name='name'
                    className="input input-bordered input-primary w-full max-w-xs" /> <br />
                <input
                    type="Password"
                    placeholder="Password"
                    name='password'
                    className="input input-bordered input-primary w-full max-w-xs" /> <br />
                <button type='submit' className="btn btn-accent">Submit</button>
            </form>
            <div className="">
                <div className="">
                    <button onClick={handleGoogle} className="btn btn-accent">Continue With Google</button>
                </div>
                <h1 className="">
                    <NavLink to='/signin'><button className=''>Already Have an Account?</button></NavLink>
                </h1>
            </div>
        </div>
    );
};

export default Signup;