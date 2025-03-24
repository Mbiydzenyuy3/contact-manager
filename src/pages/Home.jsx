import { Link } from "react-router-dom";
import { SparklesIcon } from "@heroicons/react/outline";
import style from "../components/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={style.landingPage}>
        {/* <h2 className={style.headerTitle}>
          <span className="logo">MEL</span>
          <div className="dot"></div>Contacts
        </h2> */}

        <header className={style.heroSection}>
          <div className={style.heroContainer}>
            <div className={style.animatefadeIn}>
              <h1 className={style.heroHeading}>
                <span className={style.gradientText}>
                  Organize Your Connections
                </span>
                <p className={style.subHeading}>
                  Welcome to MEL Contacts, where we keep your connections saved
                  and organized. <br /> Create lasting connections today, get
                  started by clicking on the button get started
                </p>
              </h1>

              <div className={style.buttonGroup}>
                <Link to="/contact" className={style.primaryButton}>
                  <span className="start-free">Get Started</span>
                  <SparklesIcon className={style.iconSpacing} />
                </Link>
              </div>
            </div>
          </div>
        </header>
        <footer className="footer">
          <div className="footer-item">
            <p className="text footer-text">
              © 2024 MEL Contacts. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
