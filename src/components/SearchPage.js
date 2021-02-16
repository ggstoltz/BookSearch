import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ResultsList from './ResultsList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [resultsListDefault, setResultsListDefault] = useState();
  const [resultsList, setResultsList] = useState();

  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
        setResultsList(data) 
        setResultsListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = resultsListDefault.filter(book => {
      return book.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setResultsList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>Book Results</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <ResultsList resultsList={resultsList}/>
    </>
   );
}

export default SearchPage;