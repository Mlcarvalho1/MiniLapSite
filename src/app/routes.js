import { createBrowserRouter } from 'react-router-dom';

import Root from '../Root';
import Home from '../Pages/Home'
import Gustavo from '../Pages/Gustavo';

export const createRouter = () => createBrowserRouter([{
	path: '/',
	element: <Root />,
	children: [{
		path: '/home',
		index: true,
		element: <Home />
	}, {
		path: '/gustavo-carvalho',
		element: <Gustavo />
	}]
}]);
