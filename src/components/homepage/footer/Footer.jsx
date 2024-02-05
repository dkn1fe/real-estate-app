import "./Footer.scss";
import logo from "../../../img/logo.png";
import Facebook from "../../../img/Facebook.png";
import LinkedIn from "../../../img/LinkedIn.png";
import Twitter from "../../../img/Twitter.png";
import YouTube from "../../../img/YouTube.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="data">
          <div className="data-items">
            <img src={logo} alt="" />
            <p>Estatein</p>
          </div>
          <div className="user-input">
            <input
              type="text"
              className="user-email"
              placeholder="Enter Your Email"
            />
          </div>
        </div>

        <nav className="description-block">
          <ul className="description-block-item">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Hero Section</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Properties</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">FAQ's</a>
            </li>
          </ul>

          <ul className="description-block-item">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Our Works</a>
            </li>
            <li>
              <a href="#">How It Works</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Our Clients</a>
            </li>
          </ul>

          <ul className="description-block-item">
            <li>
              <a href="#">Properties</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
          </ul>

          <ul className="description-block-item">
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Valuation Mastery</a>
            </li>
            <li>
              <a href="#">Strategic Marketing</a>
            </li>
            <li>
              <a href="#">Negotiation Wizardry</a>
            </li>
            <li>
              <a href="#">Closing Success</a>
            </li>
            <li>
              <a href="#">Property Management</a>
            </li>
          </ul>

          <ul className="description-block-item">
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Contact Form</a>
            </li>
            <li>
              <a href="#">Our Offices</a>
            </li>
          </ul>
        </nav>
      </footer>

      <footer className="second-footer">
        <nav className="second-footer-nav">
          <ul className="rules">
            <li>
              <a href="#">@2023 Estatein. All Rights Reserved.</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>

          <div className="list-of-links">
            <a href="#">
              <img src={Facebook} alt="" />
            </a>
            <a href="#">
              <img src={LinkedIn} alt="" />
            </a>
            <a href="#">
              <img src={Twitter} alt="" />
            </a>
            <a href="#">
              <img src={YouTube} alt="" />
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
