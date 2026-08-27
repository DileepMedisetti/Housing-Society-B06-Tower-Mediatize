import { useState } from "react";
import "../css/Contact.css";

function Contact() {
  const countries = [
    {
      code: "+91",
      name: "India",
      flag: "https://flagcdn.com/w40/in.png",
    },
    {
      code: "+1",
      name: "United States",
      flag: "https://flagcdn.com/w40/us.png",
    },
    {
      code: "+44",
      name: "United Kingdom",
      flag: "https://flagcdn.com/w40/gb.png",
    },
    {
      code: "+61",
      name: "Australia",
      flag: "https://flagcdn.com/w40/au.png",
    },
    {
      code: "+971",
      name: "United Arab Emirates",
      flag: "https://flagcdn.com/w40/ae.png",
    },
    {
      code: "+65",
      name: "Singapore",
      flag: "https://flagcdn.com/w40/sg.png",
    },
    {
      code: "+60",
      name: "Malaysia",
      flag: "https://flagcdn.com/w40/my.png",
    },
    {
      code: "+81",
      name: "Japan",
      flag: "https://flagcdn.com/w40/jp.png",
    },
    {
      code: "+49",
      name: "Germany",
      flag: "https://flagcdn.com/w40/de.png",
    },
    {
      code: "+33",
      name: "France",
      flag: "https://flagcdn.com/w40/fr.png",
    },
    {
      code: "+94",
      name: "Sri Lanka",
      flag: "https://flagcdn.com/w40/lk.png",
    },
    {
      code: "+880",
      name: "Bangladesh",
      flag: "https://flagcdn.com/w40/bd.png",
    },
    {
      code: "+92",
      name: "Pakistan",
      flag: "https://flagcdn.com/w40/pk.png",
    },
    {
      code: "+977",
      name: "Nepal",
      flag: "https://flagcdn.com/w40/np.png",
    },
    {
      code: "+7",
      name: "Russia",
      flag: "https://flagcdn.com/w40/ru.png",
    },
    {
      code: "+39",
      name: "Italy",
      flag: "https://flagcdn.com/w40/it.png",
    },
    {
      code: "+34",
      name: "Spain",
      flag: "https://flagcdn.com/w40/es.png",
    },
    {
      code: "+351",
      name: "Portugal",
      flag: "https://flagcdn.com/w40/pt.png",
    },
    {
      code: "+31",
      name: "Netherlands",
      flag: "https://flagcdn.com/w40/nl.png",
    },
    {
      code: "+32",
      name: "Belgium",
      flag: "https://flagcdn.com/w40/be.png",
    },
    {
      code: "+41",
      name: "Switzerland",
      flag: "https://flagcdn.com/w40/ch.png",
    },
    {
      code: "+43",
      name: "Austria",
      flag: "https://flagcdn.com/w40/at.png",
    },
    {
      code: "+46",
      name: "Sweden",
      flag: "https://flagcdn.com/w40/se.png",
    },
    {
      code: "+47",
      name: "Norway",
      flag: "https://flagcdn.com/w40/no.png",
    },
    {
      code: "+45",
      name: "Denmark",
      flag: "https://flagcdn.com/w40/dk.png",
    },
    {
      code: "+358",
      name: "Finland",
      flag: "https://flagcdn.com/w40/fi.png",
    },
    {
      code: "+353",
      name: "Ireland",
      flag: "https://flagcdn.com/w40/ie.png",
    },
    {
      code: "+30",
      name: "Greece",
      flag: "https://flagcdn.com/w40/gr.png",
    },
    {
      code: "+90",
      name: "Turkey",
      flag: "https://flagcdn.com/w40/tr.png",
    },
    {
      code: "+972",
      name: "Israel",
      flag: "https://flagcdn.com/w40/il.png",
    },
    {
      code: "+20",
      name: "Egypt",
      flag: "https://flagcdn.com/w40/eg.png",
    },
    {
      code: "+27",
      name: "South Africa",
      flag: "https://flagcdn.com/w40/za.png",
    },
    {
      code: "+234",
      name: "Nigeria",
      flag: "https://flagcdn.com/w40/ng.png",
    },
    {
      code: "+254",
      name: "Kenya",
      flag: "https://flagcdn.com/w40/ke.png",
    },
    {
      code: "+55",
      name: "Brazil",
      flag: "https://flagcdn.com/w40/br.png",
    },
    {
      code: "+52",
      name: "Mexico",
      flag: "https://flagcdn.com/w40/mx.png",
    },
    {
      code: "+54",
      name: "Argentina",
      flag: "https://flagcdn.com/w40/ar.png",
    },
    {
      code: "+64",
      name: "New Zealand",
      flag: "https://flagcdn.com/w40/nz.png",
    },
    {
      code: "+82",
      name: "South Korea",
      flag: "https://flagcdn.com/w40/kr.png",
    },
    {
      code: "+86",
      name: "China",
      flag: "https://flagcdn.com/w40/cn.png",
    },
    {
      code: "+66",
      name: "Thailand",
      flag: "https://flagcdn.com/w40/th.png",
    },
    {
      code: "+62",
      name: "Indonesia",
      flag: "https://flagcdn.com/w40/id.png",
    },
    {
      code: "+63",
      name: "Philippines",
      flag: "https://flagcdn.com/w40/ph.png",
    },
    {
      code: "+84",
      name: "Vietnam",
      flag: "https://flagcdn.com/w40/vn.png",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [countryOpen, setCountryOpen] = useState(false);

  const selectedCountry = countries.find(
    (country) => country.code === formData.countryCode
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleCountrySelect = (country) => {
    setFormData((previous) => ({
      ...previous,
      countryCode: country.code,
    }));

    setCountryOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      countryCode: "+91",
      phone: "",
      location: "",
      message: "",
    });

    setCountryOpen(false);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-about">

          <img
            src="/images/housing_society-logo.png"
            alt="Housing Society"
            className="contact-logo"
          />

          <h2 className="contact-about-title">
            ABOUT B06 TOWER
          </h2>

          <p className="contact-about-text">
            Sahira Township, Gajularamaram is a large residential
            community in North Hyderabad. Spread over 35 acres, it offers
            3 BHK apartments with modern amenities like a gym, power
            backup, and play areas. Located near major roads, schools,
            and hospitals, it provides great connectivity and is ideal for
            both living and investment.
          </p>

          {/* ADDRESS */}

          <div className="contact-address" id="contact">

            <div className="contact-location-icon">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21C12 21 19 14.5 19 8.5C19 4.91 15.87 2 12 2C8.13 2 5 4.91 5 8.5C5 14.5 12 21 12 21Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <circle
                  cx="12"
                  cy="8.5"
                  r="2.5"
                  stroke="currentColor"
                  strokeWidth="2"
                />

              </svg>

            </div>

            <div className="contact-address-text">

              <strong>
                Housingsociety.net
              </strong>

              <br />

              B06 Tower, Sahira Township,

              <br />

              Gajularamaram, Hyderabad,

              <br />

              Telangana 500055

            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}

        <div className="contact-form-area">

          <h2 className="contact-title">
            GET IN TOUCH
          </h2>

          <p className="contact-intro">
            Want to know more about Sahira Township? Fill out the contact
            form below, and our team will reach out to you soon.
          </p>

          <h3 className="contact-form-title">
            Contact
          </h3>


          {/* FORM */}

          <form onSubmit={handleSubmit}>

            {/* NAME */}

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />


            {/* EMAIL */}

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />


            {/* PHONE */}

            <div className="phone-input">

              {/* COUNTRY SELECTOR */}

              <div className="country-selector">

                <button
                  type="button"
                  className="country-selector-button"
                  onClick={() =>
                    setCountryOpen(!countryOpen)
                  }
                >

                  <img
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    className="country-flag"
                  />

                  <span className="country-code">
                    {selectedCountry.code}
                  </span>

                  <span className="country-arrow">
                    ▾
                  </span>

                </button>


                {/* COUNTRY DROPDOWN */}

                {countryOpen && (
                  <div className="country-dropdown">

                    {countries.map((country) => (
                      <button
                        type="button"
                        key={country.code}
                        className={`country-option ${
                          formData.countryCode === country.code
                            ? "selected"
                            : ""
                        }`}
                        onClick={() =>
                          handleCountrySelect(country)
                        }
                      >

                        <img
                          src={country.flag}
                          alt={country.name}
                          className="country-option-flag"
                        />

                        <span className="country-option-name">
                          {country.name}
                        </span>

                        <span className="country-option-code">
                          {country.code}
                        </span>

                      </button>
                    ))}

                  </div>
                )}

              </div>


              {/* PHONE NUMBER */}

              <input
                type="tel"
                name="phone"
                placeholder="9999999999"
                value={formData.phone}
                onChange={handleChange}
                required
              />

            </div>


            {/* LOCATION */}

            <input
              type="text"
              name="location"
              placeholder="Enter your location"
              value={formData.location}
              onChange={handleChange}
              required
            />


            {/* MESSAGE */}

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />


            {/* AUTHORIZATION */}

            <label className="authorization">

              <input
                type="checkbox"
                required
              />

              <span>
                I authorize Housingsociety.net to contact me via Email, SMS,
                WhatsApp, and Call. This will override DND/DNDC preferences.
              </span>

            </label>


            {/* SUBMIT */}

            <button
              type="submit"
              className="contact-submit"
            >
              Submit
            </button>

          </form>

        </div>

      </div>


      {/* SUCCESS MESSAGE */}

      {submitted && (
        <div className="success-message">

          <span className="success-icon">
            ✓
          </span>

          Enquiry sent successfully!

          <button
            onClick={() => setSubmitted(false)}
            className="success-close"
          >
            ×
          </button>

        </div>
      )}

    </section>
  );
}

export default Contact;