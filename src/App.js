import './App.css';
import { Today, Week } from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Navbar } from './components';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" render={() => <Today />} exact />
            <Route path="/week" render={() => <Week />} exact />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;