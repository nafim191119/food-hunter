
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/Navbar/NavBar';

const Main = () => {
    const location = useLocation();
    console.log(location);
    const isHeaderFooter = location.pathname.includes('login');
    return (
        <div>
            { isHeaderFooter|| <NavBar></NavBar>}
            <Outlet></Outlet>
            { isHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;