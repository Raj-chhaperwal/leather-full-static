import React from "react";
import AppNavbar from "../Components/Navbar";
import pic1 from '../assets/img/a.png'

const ContactPage = () => {
    return (
        <div>
            <AppNavbar />
            <div className="container" style={{ marginTop: "7rem" }}>
                <div className="container mt-5 first-container text-center">
                    <label
                        className="mt-4"
                        style={{
                            letterSpacing: "0.3rem",
                            fontSize: "3rem",
                            fontFamily: "'Libre Baskerville', serif",
                        }}
                    >
                        Leather Product
                    </label>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="profile-image">
                                <img src={pic1} alt="Profile" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-8 mt-5">
                            <div className="profile-details mt-4 ms-md-5 text-start">
                                <div className="detail mb-4">
                                    <h2
                                        style={{
                                            letterSpacing: "0.3rem",
                                            fontSize: "2rem",
                                            fontFamily: "'Libre Baskerville', serif",
                                        }}
                                    >
                                        Tarun Chhaperwal
                                    </h2>
                                </div>

                                <div className="detail mb-4">
                                    <h2
                                        style={{
                                            fontSize: "1.5rem",
                                            fontFamily: "'Libre Baskerville', serif",
                                        }}
                                    >
                                        Mobile: +91 9460251528
                                    </h2>
                                </div>

                                <div className="detail mb-4">
                                    <h2
                                        style={{
                                            fontSize: "1.5rem",
                                            fontFamily: "'Libre Baskerville', serif",
                                        }}
                                    >
                                        Email: TarunChhaperwal@gmail.com
                                    </h2>
                                </div>

                                <div className="detail mb-4">
                                    <h2
                                        style={{
                                            fontSize: "1.5rem",
                                            fontFamily: "'Libre Baskerville', serif",
                                        }}
                                    >
                                        Address: Udaipur (Rajasthan) India
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
