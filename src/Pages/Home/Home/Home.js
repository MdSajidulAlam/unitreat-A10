import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Treatments from '../Treatments/Treatments';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Treatments></Treatments>
            <Footer></Footer>
        </div>
    );
};

export default Home;