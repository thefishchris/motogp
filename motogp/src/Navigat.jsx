//a navigation bar that we can add to the top of app.jsx
//this is a stateless component
//we can use this.props.children to pass in the children of this component

import React from 'react';
import { Link } from 'react-router-dom';

function Navigat() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/schedule">Schedule</Link>
            <Link to="/standings">Standings</Link>
            <Link to="/stats">Stats</Link>
        </nav>
    );
}

export default Navigat;
