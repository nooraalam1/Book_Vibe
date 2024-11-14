import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { NavLink } from 'react-router-dom';

const Signin = () => {

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
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("error")

            });


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
                <h1 className="">
                    <NavLink to='/signin'><button className=''>Don't Have an Account?</button></NavLink>
                </h1>
            </div>
        </div>
    );
};

export default Signin;