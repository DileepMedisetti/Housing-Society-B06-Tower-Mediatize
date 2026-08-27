import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">

      <div className="footer-content">

        {/* Copyright */}
        <p className="footer-copyright">
          © 2026 | <strong>Housingsociety.net</strong> — All Rights Reserved.
        </p>

        {/* Powered By */}
        <p className="footer-powered">
          <i>Powered by</i> <strong>CFO</strong>
        </p>

      </div>

    </footer>
  );
};

export default Footer;