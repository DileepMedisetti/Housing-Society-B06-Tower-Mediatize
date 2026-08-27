import "../css/Amenities.css";

const amenities = [
  {
    name: "Gym",
    icon: "fa-dumbbell",
  },
  {
    name: "Yoga",
    icon: "fa-person-praying",
  },
  {
    name: "Pool",
    icon: "fa-person-swimming",
  },
  {
    name: "Walking Area",
    icon: "fa-person-walking",
  },
  {
    name: "Conference Room",
    icon: "fa-door-open",
  },
  {
    name: "EV Charging",
    icon: "fa-charging-station",
  },
  {
    name: "Creche",
    icon: "fa-child",
  },
  {
    name: "Auditorium",
    icon: "fa-couch",
  },
  {
    name: "Garden",
    icon: "fa-tree",
  },
  {
    name: "Car Parking",
    icon: "fa-car",
  },
];

const Amenities = () => {
  return (
    <section className="amenities-section">

      <h2 className="amenities-title">
        Extra Fun, More Happiness
      </h2>

      <p className="amenities-description">
        Extra fun for children & alike starts the moment you are on the
        elevation at the grand floor. Designated blocks have their own areas
        for children so that they don’t have to move far from the block once
        they come down. Adventurous ones in an extra proactive area for
        growing and sweating out — swing over or slide & glide, you sure are
        in for extra fun here!
      </p>

      <div className="amenities-grid">
        {amenities.map((amenity, index) => (
          <div className="amenity-item" key={index}>

            <div className="amenity-icon">
              <i className={`fa-solid ${amenity.icon}`}></i>
            </div>

            <span className="amenity-name">
              {amenity.name}
            </span>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Amenities;