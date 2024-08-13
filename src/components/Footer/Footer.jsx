import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
    <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p> lorem ipsum is simply dummy text of the printing and typesetting industry. lorem is a good boy lorem ipsum is simply dummy text of the printing and typesetting industry. lorem is a good boylorem ipsum is simply dummy text of the printing and typesetting industry. lorem is a good boy</p>
        <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt=""/>
            <img src={assets.twitter_icon} alt=""/>
            <img src={assets.linkedin_icon} alt=""/>
        </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
             <h2> GET IN TOUCH</h2>
             <ul>+234-913-711-8577</ul>
             <ul>contact@emmip.com</ul>
        </div>
    </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 | Emmip.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
