import React, { useState } from 'react';
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
import useWeather from './hooks/useWeather';


function App() {
    const [loc, setLocation] = useState('new york');
    const { weather, fetchWeather } = useWeather(loc);
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className="App">
                    <Navbar handleLocationChange={setLocation} fetchWeather={fetchWeather} loc={loc} />
                    <Switch>
                        <Route path="/" render={() => <Today weather={weather} />} exact />
                        <Route path="/week" render={() => <Week />} exact />
                    </Switch>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;