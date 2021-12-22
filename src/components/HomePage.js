import React from 'react';
import Logo from '../images/logo.png';
import '../styles.css';

const HomePage = () => {
    return (
        <div className="App">
            <img src={Logo} alt="Pokemon" className="img-responsive" width="50%"></img>
            <h1>Welcome to Pokemon World</h1>
        </div>
    );
}

export default HomePage;