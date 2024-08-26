import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SignUpPage = () => {
    return (
        <div>
            <Header />
            <section className="signup">
                <h2 className='text-center text-xl  text-green-600 font-bold'>Sign Up</h2>
                <form action="/client" method="post">
                    <label for="fullname">Full Name</label>
                    <input type="text" id="fullname" name="fullname" required />
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required />
                    <button type="submit" className="btn">Sign Up</button>
                </form>
                <p className='text-center'>Already have an account? <a href="/login">Login here</a>.</p>
            </section>
            <Footer />
        </div>
    );
}

export default SignUpPage;