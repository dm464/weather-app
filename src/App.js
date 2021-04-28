import './App.css';
import { Today, Week } from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar } from './components';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" render={() => <Today />} exact />
          <Route path="/week" render={() => <Week />} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;