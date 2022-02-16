import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from './searchSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchVal, setSearchVal] = useState('');

    const handleChange = (e) => {
        setSearchVal(e.target.value);
        dispatch(setSearchQuery(e.target.value));
    }

    return (
        <div className = "search-bar">
            <input
                type = "text"
                value = {searchVal}
                onChange = {handleChange}
                placeholder = 'Search...'
            />
            <FontAwesomeIcon icon = {faSearch} />
        </div>
    )
}

export default SearchBar;
