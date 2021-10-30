import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Catagory from './Catagory/Catagory';
import Story from './Story/Story';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <Story></Story>
            <Services></Services>
        </div>
    );
};

export default Home;