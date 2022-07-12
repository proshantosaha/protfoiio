import React from 'react';
// import GlobalStyle from './component/styles/GlobalStyle';

import ReactDOM from 'react-dom';
import App from './Component/App';
import {BrowserRouter} from "react-router-dom"


ReactDOM.render(
    <>
    {/* <GlobalStyle/> */}

    <BrowserRouter>
        <App/>
    </BrowserRouter> 
    </>,
    
document.getElementById('root'));


