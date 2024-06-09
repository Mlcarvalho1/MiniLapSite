import { createBrowserRouter } from 'react-router-dom';

import Root from '../Root';
import Home from '../Pages/Home'
import Gustavo from '../Pages/Gustavo';
import Video from '../Pages/Video';
import Mini from '../Pages/Mini';
import Treatments from '../Pages/Treatments';

export const createRouter = () => createBrowserRouter([{
	path: '/',
	element: <Root />,
	children: [{
		path: '/',
		index: true,
		element: <Home />
	}, {
		path: '/gustavo-carvalho',
		element: <Gustavo />
	}, {
		path: '/videolaparoscopia',
		element: <Video/>
	}, {
		path: '/minilaparoscopia',
		element: <Mini/>
	}, {
		path: '/areas-de-atuacao',
		element: <Treatments/>
	}]
}]);
