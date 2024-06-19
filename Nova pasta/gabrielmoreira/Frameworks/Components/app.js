import React from "react";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './index.css';
import { func } from "prop-types";

function app(){
    return(
        <div className="App"> 
        <Header />
        <Main />
        <Footer />
        </div>
    );
}

export default app;