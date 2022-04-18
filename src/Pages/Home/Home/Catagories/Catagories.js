import React from 'react';
import './Catagories.css'

const Catagories = () => {
    return (
        <div className='row mt-5 w-100'>
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className='col-lg-4 col-sm-12 adults-catagory'>
                <div className='text-white p-5'>
                    <h1>For Adults</h1>
                    <p>You can me if your child, teenager or family is going through difficulties.</p>
                    <p>ANXIETY</p>
                    <p>DEPRESSION</p>
                    <p>BIPOLAR DISORDER</p>
                    <p>ADHD</p>
                    <p>A – Z OF ISSUES</p>
                </div>
            </div>
            <div data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom" className='col-lg-4 col-sm-12 children-catagory'>

                <div className='text-white p-5'>
                    <h1 >For Children</h1>
                    <p>You can me if your child, teenager or family is going through difficulties.</p>
                    <p>ADHD</p>
                    <p>ASPERGERS AND AUTISM</p>
                    <p>DEPRESSION</p>
                    <p>ANXIETY DISORDER</p>
                    <p>A – Z OF ISSUES</p>
                </div>
            </div>
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className='col-lg-4 col-sm-12 business-catagory'>
                <div className='text-white p-5'>
                    <h1>For Business</h1>
                    <p>You can me if your child, teenager or family is going through difficulties.</p>
                    <p>MEDICO LEGAL REPORTS</p>
                    <p>OCCUPATIONAL HEALTH</p>
                    <p>LUCAMS AND STAFFING</p>
                    <p>NEUROPSYCHOLOGICAL ASSESSMENTS</p>
                    <p>MENTAL CAPACITY ASSESSMETNS</p>
                </div>
            </div>

        </div>
    );
};

export default Catagories;