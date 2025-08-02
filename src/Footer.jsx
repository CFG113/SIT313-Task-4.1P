import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#3b8b8b",
        color: "black",
        padding: "2rem 1rem",
        fontFamily: "'Courier New', monospace",
      }}
    >
      {/* Top row: Columns */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Explore */}
        <div>
          <h3 style={{ fontWeight: "bold" }}>Explore</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>Home</li>
            <li>Questions</li>
            <li>Articles</li>
            <li>Tutorials</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 style={{ fontWeight: "bold" }}>Support</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>FAQs</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Stay connected */}
        <div>
          <h3 style={{ fontWeight: "bold" }}>Stay connected</h3>
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
            <img
              src="https://img.icons8.com/ios-filled/32/000000/facebook-new.png"
              alt="Facebook"
            />
            <img
              src="https://img.icons8.com/ios-filled/32/000000/twitter.png"
              alt="Twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/32/000000/instagram-new.png"
              alt="Instagram"
            />
          </div>
        </div>
      </div>

      {/* Bottom: Centered branding and legal links */}
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h3 style={{ fontWeight: "bold" }}>DEV@Deakin 2022</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginTop: "1rem",
            flexWrap: "wrap",
          }}
        >
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Code of Conduct</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
