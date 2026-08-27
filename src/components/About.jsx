import "../css/about.css";

function About() {
  return (
    <section className="about-section">

      <h2>About Housing Society</h2>

      <p className="about-description" id="tower">
        HousingSociety.net is a platform created to promote real estate projects
        — including apartments, plots, and townships — that are affordable and
        value-driven. Our goal is to help people find reliable, low-cost housing
        options that fit their budget. With a focus on transparency and
        accessibility, we aim to connect communities with genuine,
        budget-friendly projects, making property ownership easier and more
        attainable for everyone.
      </p>

      <div className="about-image-container">
        <img
          src="public/images/house-society.jpg"
          alt="Housing Society Buildings"
        />
      </div>

    </section>
  );
}

export default About;