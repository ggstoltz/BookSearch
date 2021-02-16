import React from 'react';
import'../../App.css';
import HeroSection from '../HeroSection';
import SearchBar from '../SearchBar';
import SearchPage from '../Searchpage';
import ResultsList from '../ResultsList';

function Home () {
    return (
        <>
        <HeroSection />
        <SearchBar />
        <SearchPage />
        <ResultsList />
        </>
    );
}

export default Home;