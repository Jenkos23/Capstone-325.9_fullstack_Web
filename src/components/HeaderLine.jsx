import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import '../styles/headerline.css'

export default function HeaderLine() {
    // State to toggle visibility of the subscription form
    const [showForm, setShowForm] = useState(false);
    const [email, setEmail] = useState('');
    const [showLoginForm, setShowLoginForm] = useState(false); // Track visibility of the login form
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if the user is logged in
    const [error, setError] = useState(null); // Track error messages



    const navigate = useNavigate(); // Initialize useNavigate


    // Handle email input change for subscription button
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Subscribed with email: ${email}`);
        setShowForm(false); // Hide form after submission
    };

    // LOGIN FORM
    // Toggle the visibility of the login form
    const handleLoginClick = () => {
        setShowLoginForm(true); // Show the login form when login icon is clicked
    };

    const handleLogout = () => {
        setIsLoggedIn(false); // Log out the user
        setShowLoginForm(false); // Hide the login form when logged out
    };


    // After a successful login, redirect to the home page
    const handleSuccessfulLogin = () => {
        setIsLoggedIn(true); // Set the user as logged in
        setShowLoginForm(false); // Hide the login form
        navigate('/'); // Redirect to the home page
    };

    return (
        <div className='header'>
            <h1>JOKÉNE</h1>
            <div>
                <button onClick={() => setShowForm(!showForm)} className="subscribe-btn">
                    Subscribe
                </button>

                {/* Show subscription form when showForm is true */}
                {showForm && (
                    <form onSubmit={handleSubmit} className="subscription-form">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                )}

                {/* Show the login icon if the user is not logged in */}
                {!isLoggedIn ? (
                    <img 
                        src="https://cdn-icons-png.flaticon.com/128/12500/12500060.png" 
                        alt="sign-logo"
                        onClick={handleLoginClick} // Trigger showing the login form when the icon is clicked
                    />
                ) : (
                    <button onClick={handleLogout} className="logout-btn">
                        Logout
                    </button>
                )}

                {/* Conditionally render the login form if showLoginForm is true and user is not logged in */}
                {showLoginForm && !isLoggedIn && (
                    <LoginForm
                        setIsLoggedIn={setIsLoggedIn}
                        setShowLoginForm={setShowLoginForm}
                        setError={setError}
                        handleSuccessfulLogin={handleSuccessfulLogin} // Pass the redirect function as a prop
                    />
                )}

                {/* Display error message if any */}
                {error && <div className="error-message">{error}</div>}

                <a href="#">
                    <img src="https://cdn-icons-png.flaticon.com/128/2811/2811790.png" alt="search-logo"/>
                </a>
            </div>
        </div>
    );
}