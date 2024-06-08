import Navbar from "./Components/Navbar";
import { Outlet } from 'react-router-dom';

const Root = () => {

	return (
		<div className="overflow-y-scroll max-w-[100vw]">
			<Navbar/>
			<div className="flex-1">
				<Outlet />
			</div>
		</div>
	);
}


export default Root;
