import React, { useState } from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';
import Search from "./Search";
import { Link, useHistory } from "react-router-dom";

function Banner() {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className="banner">
            <div className="banner__search">
                
                <Button onClick={() => setShowSearch(!showSearch)} className="banner__searchButton" variant="outline">{showSearch ? "Hide": "Search Dates"}</Button>
                {showSearch && <Search />}
            </div>

            <div className="banner__info">
            
                <h1>Get out and strech your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Link to="/student/signin">
                <Button variant="outlined">Get Tutor</Button>
                </Link>
            </div>
        </div>
    )
}

export default Banner
