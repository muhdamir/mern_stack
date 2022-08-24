import React from 'react';
import { Link } from 'react-router-dom';

function MenuComponent() {
    // link when you click the link you go to certain route
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/friends" className="nav-link">Friends</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/help" className='nav-link'>Help</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default MenuComponent;