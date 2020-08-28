import React, { useState } from 'react';
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import "./Search.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from 'react-date-range';

function Search() {

    const [startDate, setStartDate] = useState(new Date ());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className="search">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/>
            <h2>Number of Hour(s)</h2>
            <PeopleIcon />
            <input min={0} defaultValue={1} type="number" />
            <Button>Search TutorNet</Button>
        </div>
    )
}

export default Search