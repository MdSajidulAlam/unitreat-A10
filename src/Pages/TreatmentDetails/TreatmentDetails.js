import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useTreatments from '../../hooks/useTreatments/useTreatments';

const TreatmentDetails = () => {
    const [treatments] = useTreatments()
    const { treatmentdetailsId } = useParams()
    const [target, setTarget] = useState({})

    useEffect(() => {
        if (treatments.length > 0) {
            const matchTreatment = treatments.find(treatment => treatment.id === treatmentdetailsId)
            setTarget(matchTreatment)
        }
    }, [treatments])
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