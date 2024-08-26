import React from 'react';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Header from '../components/Header';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <section className="  hero text-center">
                <h2>Efficient Water Management for Drought-Prone Areas</h2>
                <p>Our IoT-based solutions ensure sustainable water usage, leak detection, and real-time updates.</p>
            </section>
            <a href="/signup" className="btn flex text-center pl-[750px]">Get Started</a>

            <Features className="mt-11 " />
            <Footer></Footer>
        </div>
    );
}

export default Home;
