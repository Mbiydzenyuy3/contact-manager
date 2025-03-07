import { Link } from "react-router-dom";
import {
  SparklesIcon,
  UserGroupIcon,
  PhoneIcon,
  ChartBarIcon,
} from "@heroicons/react/outline";
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
                  Add your contacts and let MEL Contact Manager do the rest for
                  you.
                  <br /> Create lasting connections today, get started by
                  clicking on
                  <br />
                  the button get started for free
                </span>
              </h1>

              <div className={style.buttonGroup}>
                <a href="/contact" className={style.primaryButton}>
                  Get Started Free
                  <SparklesIcon className={style.iconSpacing} />
                </a>
              </div>
            </div>
          </div>
        </header>
        <footer className="footer">
          <div className="footer-item">
            <p className="text footer-text">
              © 2024 ContactFlow. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
