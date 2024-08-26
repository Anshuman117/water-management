import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LoginPage = () => {
    return (
        <div>
            <Header />
            <section className="login">
                <h2 className='text-center text-xl text-green-600 font-bold'>Login</h2>
                <form action="/client" method="post">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required />
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required />
                    <button type="submit" className="btn">Login</button>
                </form>
                <p className='text-center'>Don't have an account? <a href="/signup">Sign Up here</a>.</p>
            </section>
            <Footer />
        </div>
    );
}

export default LoginPage;