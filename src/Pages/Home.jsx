import React from "react";
import "../css/framework.css";
import "../css/theme.css";
import Footer from "../component/Footer";
const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Jumbotron Section */}
      <section className="jumbotron" style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
        <img
          src="../src/img/Seattle.jpg"
          alt="Jumbotron"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className="jumbotron-text align--center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', textShadow: '0px 0px 5px rgba(0,0,0,0.5)' }}>
          <h1>Welcome to Our Platform</h1>
          <p>Connecting you with the best services around.</p>
        </div>
      </section>

      {/* Service Description and Process Section */}
      <section className="services-section" style={{ padding: "2rem 1rem" }}>
        <h2 className="align--center heading--large">How It Works</h2>
        <p className="align--center" style={{ padding: "0 2rem" }}>
          We connect you with the best service providers around. Our platform makes it easy for you to find and book the services you need in just a few steps.
        </p>

        <div className="grid grid--three-column" style={{ gap: "2rem", margin: "2rem 0" }}>
          {/* Card 1: Sign Up */}
          <div className="card align--center">
            <h3 className="heading--medium">1. Sign Up</h3>
            <p>Register on our platform and get started. It's free and easy!</p>
          </div>

          {/* Card 2: Search for Services */}
          <div className="card align--center">
            <h3 className="heading--medium">2. Search for Services</h3>
            <p>Browse through various service providers and find the one that fits your needs.</p>
          </div>

          {/* Card 3: Book and Sign Up */}
          <div className="card align--center">
            <h3 className="heading--medium">3. Book and Enjoy</h3>
            <p>Book the service, sit back, and relax. Let us take care of the rest.</p>
          </div>
        </div>

        <div className="align--center" style={{ marginTop: "2rem" }}>
          <button className="button button--blue">Sign In Now</button>
        </div>
      </section>

      {/* Vendor Description and Call to Action Section */}
      <section className="vendor-section" style={{ backgroundColor: "#f5f5f5", padding: "2rem 1rem", marginTop: "2rem" }}>
        <h2 className="align--center heading--large">Are You a Vendor?</h2>
        <p className="align--center" style={{ padding: "0 2rem" }}>
          Join our platform to reach new customers and grow your business. We make it easy for you to list your services and connect with people who need them.
        </p>

        <div className="align--center" style={{ marginTop: "2rem" }}>
          <button className="button button--blue">List Your Service</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
