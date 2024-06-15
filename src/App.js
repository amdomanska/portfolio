import './styles/App.scss';
import {Main} from './components/main'
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import ScrollToAnchor from "./components/scroll-to-anchor";

function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToAnchor />
                <Routes>
                    <Route exact path="/portfolio" element={<Main/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
