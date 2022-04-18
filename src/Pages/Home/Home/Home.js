import React from 'react';
import Banner from '../Banner/Banner';
import Treatments from '../Treatments/Treatments';
import Catagories from './Catagories/Catagories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagories></Catagories>
            <Treatments></Treatments>
        </div>
    );
};

export default Home;