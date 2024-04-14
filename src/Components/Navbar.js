import logo from '../assets/logo.svg'
import Button from './button';

import { Link } from 'react-router-dom';

const Navbar = () => {
    const renderNavBarItem = ({ label, link }) => (
        <Link className="text-white text-xl text-al" to={link}>
            {label}
        </Link>
    )

    return (
        <div className="w-full z-40 sticky top-0">
            <div
                className="
                    px-4
                    py-2
                    md:px-8
                    flex
                    flex-row
                    items-center
                    justify-between
                    tranition
                    duration-900
                    bg-primary-medium
                    max-lg:hidden
                "
            >
                <img src={logo} alt="logo"/>
                {renderNavBarItem({ link: '/home', label: 'Home'})}
                {renderNavBarItem({ link: '/gustavo-carvalho', label: 'Gustavo Carvalho'})}
                {renderNavBarItem({ link: '/areas-de-atuação', label: 'Áreas de Atuação'})}
                {renderNavBarItem({ link: '/mini', label: 'Minilaparoscopia'})}
               <Button variant="medium">
                    Fale conosco
               </Button>
            </div>
            {/* <div className='bg-primary-high'>
                    rtea
            </div> */}
        </div>
)};

export default Navbar;
