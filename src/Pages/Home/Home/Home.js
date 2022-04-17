import React from 'react';
import Banner from '../Banner/Banner';
import Treatment from '../Treatment/Treatment';
import Treatments from '../Treatments/Treatments';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Treatment></Treatment> */}
            <Treatments></Treatments>
        </div>
    );
};

export default Home;