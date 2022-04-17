import React from 'react';
import useTreatments from '../../../hooks/useTreatments/useTreatments';
import Treatment from '../Treatment/Treatment';

const Treatments = () => {
    const [treatments] = useTreatments()


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
                        // displayTreatmentDetails={displayTreatmentDetails}
                        ></Treatment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Treatments;