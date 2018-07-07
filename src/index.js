import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes';

// Style
import './Components/Global/Static/index.css'

render(
    <Router>
        <Routes />
    </Router>,
    document.getElementById('root')
)