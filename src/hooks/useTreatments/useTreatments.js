import { useEffect, useState } from 'react';

const useTreatments = () => {
    const [treatments, seTreatments] = useState([])

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => seTreatments(data))
    }, [])
    return [treatments, seTreatments]
};

export default useTreatments;