
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/Navbar/NavBar';

const Main = () => {
    const location = useLocation();
    console.log(location);
    const isHeaderFooterLog = location.pathname.includes('login') || location.pathname.includes('signup');
    
    return (
        <div>
            {isHeaderFooterLog || <NavBar></NavBar>}
            <Outlet></Outlet>
            {isHeaderFooterLog || <Footer></Footer>}
            
        </div>
    );
};

export default Main;