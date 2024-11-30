import React, { useEffect, useState } from 'react';
import './Header.css';

const Navbar = () => {
    const [showTentangKami, setShowTentangKami] = useState(false);
    const [showAkademik, setShowAkademik] = useState(false);
    const [username, setUsername] = useState(localStorage.getItem('username') || null);

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        setUsername(storedUsername);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('username');
        setUsername(null);
    };

    return (
        <header className="sticky-navbar">
            <div>
                <span>PhysicsUnveiled</span>
            </div>
            <nav>
                <ul>
                    <li><a href="/menuhome">Beranda</a></li>
                    <li
                        onMouseEnter={() => setShowTentangKami(true)}
                        onMouseLeave={() => setShowTentangKami(false)}
                    >
                        <a href="/menubook">Materi</a>
                    </li>
                    <li><a href="/quiz">Latihan</a></li>
                    <li><a href="/kalkulator">Kalkulator</a></li>
                    <li><a href="/BankSoal2">Bank Soal</a></li>
                    <li><a href="#">Kontak</a></li>
                    <div className="auth-section">
                        <a href="/login" className="sign-in-link">Sign In</a>
                        <a href="/daftar" className="cta-button">Sign Up</a>
                    </div>

                    {/* <li>
                        {username ? (
                            <div onClick={handleLogout}>
                                {username}
                            </div>
                        ) : (
                            <div
                                className="account-icon"
                                onMouseEnter={() => setShowAkademik(true)}
                                onMouseLeave={() => setShowAkademik(false)}
                            >
                                <img src="" alt="Account Icon" />
                                {showAkademik && (
                                    <ul>
                                        <li><a href="/login">Login</a></li>
                                        <li><a href="/daftar">Register</a></li>
                                    </ul>
                                )}
                            </div>
                        )}
                    </li> */}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
