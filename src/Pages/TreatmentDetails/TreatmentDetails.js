import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useTreatments from '../../hooks/useTreatments/useTreatments';

const TreatmentDetails = () => {
    const [treatments] = useTreatments()
    const { treatmentdetailsId } = useParams()
    // console.log(treatmentdetailsId);
    const matchTreatment = treatments.find(treatment => treatment.id === treatmentdetailsId)
    console.log(matchTreatment);
    return (
        <div>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default TreatmentDetails;