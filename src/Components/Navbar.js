import logo from '../assets/logo.svg'
import Button from './button';

const Navbar = () => {
    const renderNavBarItem = ({ label }) => (
        <div className="text-white text-xl text-al">
            {label}
        </div>
    )

    return (
        <div className="w-full z-40">
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
                {renderNavBarItem({ label: 'Home'})}
                {renderNavBarItem({ label: 'Gustavo Carvalho'})}
                {renderNavBarItem({ label: 'Áreas de Atuação'})}
                {renderNavBarItem({ label: 'Minilaparoscopia'})}
               <Button variant="medium">
                    Fale conosco
               </Button>
            </div>
        </div>
)};

export default Navbar;
