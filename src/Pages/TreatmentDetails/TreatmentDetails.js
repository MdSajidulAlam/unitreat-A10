import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useTreatments from '../../hooks/useTreatments/useTreatments';

const TreatmentDetails = () => {
    const [treatments] = useTreatments()
    const { treatmentdetailsId } = useParams()
    const [targetTreatment, setTargetTreatment] = useState({})

    useEffect(() => {
        if (treatments.length > 0) {
            const matchTreatment = treatments.find(treatment => treatment.id === treatmentdetailsId)
            setTargetTreatment(matchTreatment)
        }
    }, [treatments])
    return (
        <div className='container'>
            <div className='text-center mt-5 row'>

                <div className='col-lg-6 col-sm-12'>
                    <img src={targetTreatment.picture} alt="" />
                    <h4>Name of service: {targetTreatment.name}</h4>
                    <p>Description : {targetTreatment.about}</p>
                    <p className='fw-bold'>Price :{targetTreatment.price}</p>
                </div>
                <div className='w-50 mx-auto col-lg-6 col-sm-12'>
                    <h3>Fill the form</h3>
                    <Form.Control className='my-3 p-2' type="text" placeholder="Your Name" />
                    <Form.Control className='my-3 p-2' type="text" placeholder="Your address" />
                    <Form.Control className='my-3 p-2' type="number" placeholder="Your Number" />
                    <Link to='/checkout'>
                        <button className='btn btn-primary'>Proceed Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TreatmentDetails;