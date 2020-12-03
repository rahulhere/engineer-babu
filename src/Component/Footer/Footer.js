import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import clutch from "./../../Assets/svgs/footer-clutch.svg";
import star from "./../../Assets/svgs/star.svg";
import compImg1 from "./../../Assets/images/footer-rating1.webp";
import compImg2 from "./../../Assets/images/footer-rating2.webp";
import compImg3 from "./../../Assets/svgs/footer-rating3.svg";
import fb from "./../../Assets/svgs/footer-fb.svg";
import yt from "./../../Assets/svgs/footer-yt.svg";
import insta from "./../../Assets/svgs/footer-insta.svg";
import linkedin from "./../../Assets/svgs/footer-linkedin.svg";
import pin from "./../../Assets/images/footer-pintrest.webp";
import twitter from "./../../Assets/images/footer-twitter.webp";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.LinkDiv}>
        <div>
          <h4>Hire Developers</h4>
          <Link to="footer-link">Hire PHP Developers</Link>
          <Link to="footer-link">Hire AngularJS Developers</Link>
          <Link to="footer-link">Hire Python Developers</Link>
          <Link to="footer-link">Hire NodeJS Developers</Link>
          <Link to="footer-link">Hire IOS Developers</Link>
          <Link to="footer-link">Hire ReactJS Developers</Link>
          <Link to="footer-link">Hire Android Developers</Link>
          <Link to="footer-link">Hire Flutter Developers</Link>
          <Link to="footer-link">Hire MERN Stack Development</Link>
          <Link to="footer-link">Hire Laravel Development</Link>
        </div>
        <div>
          <h4 className={styles.HireDev2heading}> </h4>
          <Link to="footer-link">Hire WordPress Developers</Link>
          <Link to="footer-link">Hire Machine Learning Experts</Link>
          <Link to="footer-link">Hire Golang Developers</Link>
          <Link to="footer-link">Hire Data Scientists</Link>
          <Link to="footer-link">Hire React Native Developers</Link>
          <Link to="footer-link">Hire Mobile App Developers</Link>
          <Link to="footer-link">Hire MEAN Stack Developers</Link>
          <Link to="footer-link">Hire Full Stack Development</Link>
          <Link to="footer-link">Hire DevOps Development</Link>
        </div>
        <div>
          <h4>Industries Experience</h4>
          <Link to="footer-link">Healthcare</Link>
          <Link to="footer-link">Food & Restaurant</Link>
          <Link to="footer-link">LMS & eLearning</Link>
          <Link to="footer-link">Finance & Banking</Link>
          <Link to="footer-link">e-Commerce</Link>
          <Link to="footer-link">Logistics & Supply Chain</Link>
          <Link to="footer-link">Carpooling</Link>
        </div>
        <div>
          <h4>Contact Us</h4>
          <Link to="footer-link">India: +91-8225007007</Link>
          <Link to="footer-link">mayank@engineerbabu.com</Link>
          <Link to="footer-link">careers@engineerbabu.com</Link>
        </div>
      </div>

      <div className={styles.compRatingsMediaCont}>
        <div className={styles.CompRatings}>
          <div className={styles.Ratings}>
            <div className={styles.Main}>
              <span>Reviewed on</span>
              <img src={clutch} alt="Clutch Logo" />
            </div>
            <div className={styles.StarsRev}>
              <div className={styles.stars}>
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
              </div>
              <span>26 reviews</span>
            </div>
          </div>
          <div className={styles.CompImageDiv}>
            <img src={compImg1} alt="Company" />
            <img src={compImg2} alt="Company" />
            <img src={compImg3} alt="Company" />
          </div>
        </div>

        <div className={styles.media}>
          <div>
            <img src={fb} alt="Social Media Handles" />
          </div>
          <div>
            <img src={yt} alt="Social Media Handles" />
          </div>
          <div>
            <img src={insta} alt="Social Media Handles" />
          </div>
          <div>
            <img src={linkedin} alt="Social Media Handles" />
          </div>
          <div>
            <img src={pin} alt="Social Media Handles" />
          </div>
          <div>
            <img src={twitter} alt="Social Media Handles" />
          </div>
        </div>
      </div>
      <div className={styles.NavCopyrightCont}>
        <div className={styles.copyRight}>
          <p>Copyrights © 2020 engineerbabu</p>
        </div>
        <div className={styles.navigation}>
          <ul>
            <li>
              <Link to="asfd">Home</Link>
            </li>
            <li>
              <Link to="fsfs">Available Jobs</Link>
            </li>
            <li>
              <Link to="sdfss">Pricing</Link>
            </li>
            <li>
              <Link to="adf">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
