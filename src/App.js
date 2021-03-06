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
    const [loc, setLocation] = useState('07424');
    const { weather, fetchWeather } = useWeather(loc);
    if (weather) {
        console.log(weather);
    }
    return (
        <>
            {weather &&
                <ThemeProvider theme={theme}>
                    <Router>
                        <div className="App">
                            <Navbar handleLocationChange={setLocation} fetchWeather={fetchWeather} loc={loc} />
                            <Switch>
                                <Route path="/" render={() => <Today today={weather.current} />} exact />
                                <Route path="/week" render={() => <Week today={weather.current} week={weather.daily} />} exact />
                            </Switch>
                        </div>
                    </Router>
                </ThemeProvider >
            }
        </>
    );
}

export default App;