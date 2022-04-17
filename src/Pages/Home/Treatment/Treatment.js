import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Treatment = ({ treatment, displayTreatmentDetails }) => {
    const { name, price, picture, about, id } = treatment
    const navigate = useNavigate()

    const navigateToTreatmentDetail = (id) => {
        navigate(`/treatmentdetails/${id}`)

    }
    return (
        <Card className='col-4' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {about}
                </Card.Text>
                <Card.Text>
                    Price: {price}
                </Card.Text>
                <Button onClick={() => navigateToTreatmentDetail(id)} variant='primary'>Book Now</Button>
            </Card.Body>
        </Card>
    );
};

export default Treatment;