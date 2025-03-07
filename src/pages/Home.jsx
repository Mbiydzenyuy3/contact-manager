import { Link } from "react-router-dom";
import { SparklesIcon } from "@heroicons/react/outline";
import style from "../components/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={style.landingPage}>
        <header className={style.heroSection}>
          <div className={style.heroContainer}>
            <div className={style.animatefadeIn}>
              <h1 className={style.heroHeading}>
                <span className={style.gradientText}>
                  Organize Your Connections
                </span>
                <span className={style.subHeading}>
                  Add your contacts and let us do the rest for you. Create
                  lasting <br /> connections today, get started by clicking on
                  <br />
                  the button get started for free
                </span>
              </h1>

              <div className={style.buttonGroup}>
                <Link to="/contact" className={style.primaryButton}>
                  Get Started Free
                  <SparklesIcon className={style.iconSpacing} />
                </Link>
              </div>
            </div>
          </div>
        </header>
        <footer className="footer">
          <div className="footer-item">
            <p className="text footer-text">
              © 2024 MEL Contact Manager. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
