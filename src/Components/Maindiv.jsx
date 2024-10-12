import Nav from './Nav';
import { Outlet } from 'react-router-dom';

const Maindiv = () => {
    return (
        <div className=''>

            <Nav></Nav>
            <Outlet></Outlet>

        </div>
    );
};

export default Maindiv;