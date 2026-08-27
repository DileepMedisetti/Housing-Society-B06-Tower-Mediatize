import { useState } from "react";
import "../css/SitePlan.css";

function SitePlan() {
  const [activeTab, setActiveTab] = useState("site");

  const tabData = {
    site: {
      label: "Site Layout",
      image: "/images/site-layout.png",
      alt: "Site Layout",
    },
    floor: {
      label: "Floor Plan",
      image: "/images/floor-plan.jpg",
      alt: "Floor Plan",
    },
    map: {
      label: "Map Location",
      image: "/images/map-location.jpg",
      alt: "Map Location",
    },
  };

  return (
    <section className="site-plan-section" id="floor-plans">

      {/* Heading */}
      <h2 className="site-plan-title">
        Site Layout &amp; Floor Plans
      </h2>

      {/* Tabs */}
      <div className="site-plan-tabs">

        <button
          className={`site-plan-tab ${
            activeTab === "site" ? "active" : ""
          }`}
          onClick={() => setActiveTab("site")}
        >
          Site Layout
        </button>

        <button
          className={`site-plan-tab ${
            activeTab === "floor" ? "active" : ""
          }`}
          onClick={() => setActiveTab("floor")}
        >
          Floor Plan
        </button>

        <button
          className={`site-plan-tab ${
            activeTab === "map" ? "active" : ""
          }`}
          onClick={() => setActiveTab("map")}
        >
          Map Location
        </button>

      </div>

      {/* Image */}
      <div className="site-plan-image-container">
        <img
          src={tabData[activeTab].image}
          alt={tabData[activeTab].alt}
          className={`site-plan-image ${
            activeTab === "floor" ? "floor-plan-image" : ""
          }`}
        />
      </div>

    </section>
  );
}

export default SitePlan;