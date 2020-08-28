import React from 'react'
import "./SearchPage.css";
import SearchResult from "./SearchResult";
import { Button } from "@material-ui/core";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>20 Tutors - 29 August to 30 August - 1 student</p>
                <h1>Tutors nearby</h1>

                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of Tutor</Button>
                <Button variant="outlined">Price Range</Button>
                <Button variant="outlined">In Person or Virtual</Button>
                <Button variant="outlined">More Filters</Button>
                <SearchResult 
                    src=""
                    location=""
                    tutor=""
                    description=""
                    subject=""
                    star=""
                    price=""
                    total=""
                />
            </div>
        </div>
    )
}

export default SearchPage