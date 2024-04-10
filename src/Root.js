import Navbar from "./Components/Navbar";
import { Outlet } from 'react-router-dom';

const Root = () => {

	return (
		<div className="overFlow-scroll">
			<Navbar/>
			<div className="flex-1">
				<Outlet />
			</div>
			<Navbar/>

		</div>
	);
}


export default Root;
