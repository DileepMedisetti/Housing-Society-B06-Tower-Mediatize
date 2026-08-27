import "../css/Location.css";

const Location = () => {
  return (
    <section className="location-section">

      <h2 className="location-title">
        Location
      </h2>

      <p className="location-description">
        Find us at Rajiv Swagruha Township, Mettakanigudem, Hyderabad, Telangana 500055
      </p>

      <div className="location-map">
        <iframe
          title="Rajiv Swagruha Township Location"
          src="https://www.google.com/maps?q=Rajiv%20Swagruha%20Township%2C%20Mettakanigudem%2C%20Hyderabad%2C%20Telangana%20500055&output=embed"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </section>
  );
};

export default Location;