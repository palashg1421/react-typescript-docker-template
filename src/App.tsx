import MyRoutes from './routing';
import Favicon from './Assets/images/logo.svg';

const App = () => {

	document.title = 'ReactTS';
	document.querySelector("link[rel~='icon']")!.setAttribute('href', Favicon);
	document.querySelector("meta[name~='theme-color']")!.setAttribute('content', '#dc143c');

	return (<MyRoutes />);
}

export default App;
