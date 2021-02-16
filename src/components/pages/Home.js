import React from 'react';
import'../../App.css';
import HeroSection from '../HeroSection';
import Searchbar from '../Searchbar';
import SearchPage from '../SearchPage';
import Results from '../ResultsList';

function Home () {
    return (
        <>
        <HeroSection />
        <Searchbar />
        <SearchPage />
        <Results />
        </>
    );
}

export default Home;