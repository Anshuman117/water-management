import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Dashboard = () => {
    const [waterFlow, setWaterFlow] = useState(0);
    const [soilMoisture, setSoilMoisture] = useState(0);
    const [weatherStatus, setWeatherStatus] = useState("Sunny");
    const [expectedRainfall, setExpectedRainfall] = useState(0);
    const [suggestion, setSuggestion] = useState("");

    useEffect(() => {
        // Simulate real-time data fetching
        setWaterFlow(50);
        setSoilMoisture(70);
        setWeatherStatus("Cloudy");
        setExpectedRainfall(15);
        setSuggestion("Consider reducing irrigation to conserve water.");
    }, []);

    return (
        <div>
            <Header />
            <section className="dashboard">
                <h2>Dashboard</h2>
                <div className="realtime-data">
                    <h3>Real-Time Data</h3>
                    <p>Water Flow: {waterFlow} L/s</p>
                    <p>Soil Moisture: {soilMoisture}%</p>
                </div>
                <div className="suggestions">
                    <h3>Suggestions Based on Data</h3>
                    <p>{suggestion}</p>
                </div>
                <div className="weather">
                    <h3>Real-Time Weather Updates</h3>
                    <p>Weather Status: {weatherStatus}</p>
                    <p>Expected Rainfall: {expectedRainfall} mm</p>
                </div>
            </section>
            <section className="sms-updates">
                <h3>SMS Updates</h3>
                <p>Receive SMS updates with strategies for rainwater harvesting based on real-time data.</p>
                <button className="btn">Subscribe to SMS Updates</button>
            </section>
            <Footer />
        </div>
    );
}

export default Dashboard;
