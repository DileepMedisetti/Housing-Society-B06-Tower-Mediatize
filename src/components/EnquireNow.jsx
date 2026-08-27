import "../css/EnquireNow.css";

function EnquireNow() {
  const handleClick = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button
      type="button"
      className="enquire-now"
      onClick={handleClick}
    >
      ENQUIRE NOW
    </button>
  );
}

export default EnquireNow;