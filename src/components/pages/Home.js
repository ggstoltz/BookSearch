import React from 'react';
import'../../App.css';
import HeroSection from '../HeroSection';
import Searchbar from '../Searchbar';
import Search from '../Search';
import Results from '../Results';

function Home () {
    return (
        <>
        <HeroSection />
        <Searchbar />
        <Search />
        <Results />
        </>
    );
}

export default Home;