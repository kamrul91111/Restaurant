import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);    
    const [errorMessage, SetErrorMessage] = useState(''); 

    const searchApi = async (searchTerm) => {
        try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm, //took the name from  yelp fusion page term 
                location: 'Sydney'
            }
        });
        setResults(response.data.businesses);
            } catch (err) {
                SetErrorMessage('Something went wrong');
            }
    };

    //call searchAPI when component is first rendered
    // searchApi('pasta'); this does repetative search, BAD CODE!!!!!

    useEffect(() => {
        searchApi('pasta');
    }, [] );   //this only does the default api request once

    return [searchApi, results, errorMessage];
};