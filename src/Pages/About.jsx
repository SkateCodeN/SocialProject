import React from "react";
import "../css/framework.css";
import "../css/theme.css";

const AboutUs = () => {
  return (
    <div className="card card--full-width">
      {/* About Us Section */}
      <section className="about-section" style={{ padding: "2rem" }}>
        <h2 className="align--center heading--large">About Us</h2>
        <p style={{ padding: "1rem 2rem", lineHeight: "1.6rem", textAlign: "center" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan tortor. 
          Integer pretium metus non tortor facilisis, nec consectetur leo fermentum. 
          Curabitur vehicula tincidunt augue vel tempus. Aliquam erat volutpat. 
          Praesent eu justo libero. Cras vehicula bibendum nulla at aliquam. 
          Duis volutpat leo nec risus euismod, at ornare erat sagittis.
        </p>
        <p style={{ padding: "1rem 2rem", lineHeight: "1.6rem", textAlign: "center" }}>
          Donec luctus, nisl a volutpat euismod, mauris ex congue ex, id bibendum orci lectus sit amet est. 
          Integer eget augue nec dui gravida convallis. Suspendisse potenti. 
          Fusce vulputate consectetur lorem. Aenean non orci ultricies, pharetra sapien vel, semper dui.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section" style={{ backgroundColor: "#f5f5f5", padding: "2rem", marginTop: "2rem" }}>
        <h2 className="align--center heading--medium">Join Us Today!</h2>
        <p className="align--center" style={{ padding: "1rem 2rem", lineHeight: "1.6rem" }}>
          Whether you're a **vendor** looking to list your event or a **subscriber** seeking the latest happenings, we've got you covered!
        </p>

        <div className="grid grid--two-column" style={{ gap: "2rem", margin: "2rem 0" }}>
          {/* Vendors CTA */}
          <div className="card align--center">
            <h3 className="heading--medium">For Vendors</h3>
            <p style={{ padding: "1rem" }}>
              List your events on our platform and reach a larger audience. 
              It's easy to get started and we're here to help you grow!
            </p>
            <button className="button button--blue" style={{ margin: "1rem 0" }}>
              List Your Event
            </button>
          </div>

          {/* Subscribers CTA */}
          <div className="card align--center">
            <h3 className="heading--medium">For Subscribers</h3>
            <p style={{ padding: "1rem" }}>
              Stay up to date with the latest events. Sign up now and never miss out on exciting happenings near you!
            </p>
            <button className="button button--blue" style={{ margin: "1rem 0" }}>
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
