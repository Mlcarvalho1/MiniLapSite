import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Outlet } from 'react-router-dom';

const Root = () => {

	return (
		<div className="max-w-[100vw]">
			<Navbar/>
			<div className="flex-1">
				<Outlet />
			</div>
			<Footer/>
		</div>
	);
}


export default Root;
