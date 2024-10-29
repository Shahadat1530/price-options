import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { RiCloseLargeLine } from "react-icons/ri";
const NavBar = () => {
    const [open, setOpen]= useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Login', path: '/login' }
    ];


    return (
        <nav>
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <RiCloseLargeLine></RiCloseLargeLine> :
                    <HiMenuAlt1 className=""></HiMenuAlt1>
                }
            </div>
            
            <ul className="md:flex">
                {
                    routes.map(route =>
                        <Link
                            key={route.id}
                            route={route}
                        ></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;