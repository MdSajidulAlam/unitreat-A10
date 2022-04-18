import React from 'react';
import useTreatments from '../../../hooks/useTreatments/useTreatments';
import Treatment from '../Treatment/Treatment';
import './Treatments.css'

const Treatments = () => {
    const [treatments] = useTreatments()


    return (
        <div id='treatments' className='treatments-container mt-5'>
            <div className=" container mx-auto mt-5 text-center">
                <div className='p-3'>
                    <h4>WHAT I OFFER FOR YOU</h4>
                    <h1 >Therapies & Treatments</h1>
                </div>
                <div className='border-bottom w-25 mx-auto mt-3'></div>
                <div className='row w-100 mx-auto mt-5'>
                    {
                        treatments.map(treatment => <Treatment
                            key={treatment.id}
                            treatment={treatment}
                        // displayTreatmentDetails={displayTreatmentDetails}
                        ></Treatment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Treatments;