import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const AboutUs = () => {
    return (
        <div>
            <Header></Header>
            <h2 className='text-center text-green-900 text-xl font-bold mt-5'>About Us</h2>
            <div className='text-center mt-10 flex-col items-center justify-center'>
                <p>We are dedicated to helping communities in drought-prone areas manage their water resources efficiently through cutting-edge IoT technology. Our solutions provide real-time data, predictive analytics, and smart infrastructure to ensure sustainable water management.</p>
                <p>Founded in 2024, our mission is to empower farmers and communities to thrive even in challenging environmental conditions by providing them with the tools and knowledge they need to conserve water and optimize its use.</p>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;
