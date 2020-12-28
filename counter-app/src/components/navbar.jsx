import React, { Component } from 'react';

// stateless functional component (sfc)
const Navbar = ({ totalCounters }) => {
        return (
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar
                <span m-2 className="badge badge-pill badge-secondary">{totalCounters}</span></a>
            </nav>
          );
    };


 
export default Navbar;

