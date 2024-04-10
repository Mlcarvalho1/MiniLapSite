import { createBrowserRouter } from 'react-router-dom';

import Root from '../Root';
import Home from '../Pages/Home'

export const createRouter = () => createBrowserRouter([{
	path: '/',
	element: <Root />,
	children: [{
		path: '/home',
		index: true,
		element: <Home />
	}]
}]);
