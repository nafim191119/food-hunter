import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../../Providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(Authcontext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className="navbar fixed z-10 bg-black text-white bg-opacity-30 max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/order/salad">Order Food</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Food Hunter</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/order/salad">Order Food</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-8">
                    <a className=""><Link to="/login">Log in</Link></a>
                    <a className=""><Link to="/signup">Sign up</Link></a>
                    {
                        user ? <button onClick={handleLogOut} className="btn btn-outline">Default</button> :
                            <>
                                <a className=""><Link to="/login">Log in</Link></a>
                                <a className=""><Link to="/signup">Sign up</Link></a>
                            </>
                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;