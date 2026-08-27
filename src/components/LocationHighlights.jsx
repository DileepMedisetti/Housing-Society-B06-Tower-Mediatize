import { useState } from "react";
import "../css/LocationHighlights.css";

const LocationHighlights = () => {
  const [activeCategory, setActiveCategory] = useState("SCHOOLS");

  const locations = {
    SCHOOLS: [
      {
        name: "Urban International School",
        distance: "1.9 KM",
      },
      {
        name: "Geetanjali Concept School",
        distance: "2.6 KM",
      },
      {
        name: "Tatva Global School",
        distance: "2.6 KM",
      },
      {
        name: "Bachpan A Play School",
        distance: "3.0 KM",
      },
      {
        name: "Orchids The International School",
        distance: "3.2 KM",
      },
    ],

    HOSPITALS: [
      {
        name: "Lifespan Super Speciality Hospital",
        distance: "2.3 KM",
      },
      {
        name: "Malla Reddy Narayana Multispeciality Hospital",
        distance: "3.3 KM",
      },
      {
        name: "Usha Mullapudi Cardiac Centre Shapur",
        distance: "3.6 KM",
      },
      {
        name: "Lifespan Super Speciality Hospital",
        distance: "3.8 KM",
      },
    ],

    TRANSPORT: [
      {
        name: "Jeedimetla Bus Depot",
        distance: "1.2 KM",
      },
      {
        name: "KPHB Metro Station",
        distance: "7.4 KM",
      },
      {
        name: "Kukatpally Metro Station",
        distance: "8.3 KM",
      },
    ],

    MALLS: [
      {
        name: "TRENDS",
        distance: "2.9 KM",
      },
      {
        name: "TNR Northcity Mall & Multiplex",
        distance: "8.3 KM",
      },
      {
        name: "LULU Mall",
        distance: "9.1 KM",
      },
      {
        name: "Nexus Mall",
        distance: "10.5 KM",
      },
      {
        name: "Manjeera Majestic Commercial",
        distance: "8.8 KM",
      },
    ],

    "EDUCATIONAL INSTITUTIONS": [
      {
        name: "Malla Reddy Engineering College",
        distance: "6.7 KM",
      },
      {
        name: "St. Peter’s Engineering College",
        distance: "7.6 KM",
      },
      {
        name: "APJ Abdul Kalam Junior College",
        distance: "3.6 KM",
      },
      {
        name: "Capital Degree & PG College",
        distance: "3.7 KM",
      },
    ],

    PARKS: [
      {
        name: "Prashantha Vanam",
        distance: "3.2 KM",
      },
      {
        name: "Pranavayu Urban Forest Park",
        distance: "2.7 KM",
      },
      {
        name: "Children's Park",
        distance: "2.6 KM",
      },
    ],
  };

  const categories = [
    "SCHOOLS",
    "HOSPITALS",
    "TRANSPORT",
    "MALLS",
    "EDUCATIONAL INSTITUTIONS",
    "PARKS",
  ];

  return (
    <section className="location-highlights-section">

      {/* Heading */}
      <h2 className="location-highlights-title">
        Location Highlights
      </h2>

      {/* Category Tabs */}
      <div className="location-tabs">

        {categories.map((category) => (
          <button
            key={category}
            className={`location-tab ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}

      </div>

      {/* Location List */}
      <div className="location-list">

        {locations[activeCategory].map((location, index) => (
          <div
            className="location-item"
            key={`${location.name}-${index}`}
          >

            <div className="location-name">
              <span className="location-arrow">→</span>

              <span>{location.name}</span>
            </div>

            <div className="location-distance">
              {location.distance}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default LocationHighlights;