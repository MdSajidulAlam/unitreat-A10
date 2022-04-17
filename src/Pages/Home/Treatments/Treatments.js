import React, { useEffect, useState } from 'react';
import Treatment from '../Treatment/Treatment';

const Treatments = () => {
    const [treatments, setreatments] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setreatments(data))
    }, [])
    return (
        <div id='treatments'>
            <div className=" container mx-auto mt-5 text-center">
                <h4>WHAT I OFFER FOR YOU</h4>
                <h1>Therapies & Treatments</h1>
                <div className='row w-100 mx-auto'>
                    {
                        treatments.map(treatment => <Treatment
                            key={treatment.id}
                            treatment={treatment}
                        ></Treatment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Treatments;