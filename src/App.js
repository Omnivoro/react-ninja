import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
	<Router>
    	<div className="App">
	  		<Navbar />
			<Switch>
				<Route path="/">
					<Home />
				</Route>		
			</Switch>		
    	</div>
    </Router>
  );
}

export default App;
