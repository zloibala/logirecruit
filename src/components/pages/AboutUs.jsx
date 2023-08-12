import React from "react";

const AboutUs = () => {
  return (
    <div className="about--us">
      <h1> About Us</h1>
      <p>
        We've assisted over 100+ drivers in finding suitable companies across
        different states. Our team is fluent in English, Russian, Kyrgyz, and
        Turkish. We collaborate with trucking companies of all sizes, including
        those that adhere to halal certifications.
      </p>
      <p>
        No matter if you're a new or a seasoned pro with over 40 years in the
        field, we're here to help you secure a great job anywhere in the
        country. Benefit from valuable perks that come with these positions,
        ensuring a successful career journey.
      </p>
      <section className="benefit--section">
        <h3>Unlock the Power of Wellness with Our Exclusive Benefits:</h3>
        <p>
          Experience the healing touch with discounted rates at over 20 top-tier
          clinics, offering a range of services including massages, therapy
          sessions, and specialized treatments for back pain relief. Your
          well-being is our priority, and our partnerships ensure you receive
          the care you deserve, all while enjoying substantial savings.
        </p>
      </section>
      <section className="why-us">
        <h3> Why Us?</h3>
        <div className="why--us--parts">
          <h4> Career Development:</h4>
          <p>
            Beyond just job placements, your agency offers resources and support
            for drivers' career growth. This could include training,
            certifications, and guidance for advancement within the logistics
            field.
          </p>
          <h4> Long-Term Relationships:</h4>
          <p>
            Your agency aims to build lasting relationships with drivers,
            assisting them not only in finding their next job but also
            throughout their entire career journey.
          </p>
          <h4> Quality Opportunities:</h4>
          <p>
            You focus on connecting drivers with reputable logistics companies
            that offer safe working conditions, competitive pay, and
            opportunities for advancement.
          </p>
          <h4>Vast Network: </h4>
          <p>
            Your extensive network of logistics companies and employers means
            that drivers have access to a wide range of job openings and
            potential employers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
