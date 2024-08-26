import React from 'react';

const Features = () => {
    return (
        <section className="features flex-col ">
            <h3 className='text-center text-green-800 mb-10  mt-4'>Our Features and Services</h3>
            <div className='flex text-center justify-center items-center'>
                <div className="feature-item ">
                    <h4>Real-Time Monitoring</h4>
                    <p>Monitor water usage and detect leaks in real time.</p>
                </div>
                <div className="feature-item">
                    <h4>Weather Forecast</h4>
                    <p>Get real-time weather updates to optimize water use.</p>
                </div>
                <div className="feature-item">
                    <h4>IoT Infrastructure</h4>
                    <p>We provide a complete IoT infrastructure for seamless integration.</p>
                </div>
            </div>
        </section>
    );
}

export default Features;
