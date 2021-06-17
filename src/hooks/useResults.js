import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, SetErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState('Paramatta, AU')

  // setTimeout(() => {
  //   setLocation('Auburn, AU')
  // }, 5000);

  // //let suburb = 'Blacktown, AU'
  // const suburb = 1

  // if (suburb === 1) {
  //   setLocation('Blacktown')
  // }
  // else {
  //   setLocation('Newtown')
  // }



  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm, //took the name from  yelp fusion page term
          location: `${location}`,
        },
      });
      setResults(response.data.businesses);
      setLoading(false);
    } catch (err) {
      SetErrorMessage("Something went wrong");
    }
  };

  //call searchAPI when component is first rendered
  // searchApi('pasta'); this does repetative search, BAD CODE!!!!!

  useEffect(() => {
    searchApi("Chinese");
  }, []); //this only does the default api request once

  return [searchApi, results, errorMessage, loading];
};
