import { Link } from "react-router-dom";
import {
  SparklesIcon,
  UserGroupIcon,
  PhoneIcon,
  ChartBarIcon,
} from "@heroicons/react/outline";
import "../components/Home.module.css";

export default function Home() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-container">
          <div className="animate-fade-in">
            <h1 className="hero-heading">
              <span className="gradient-text">Organize Your Connections</span>
              <span className="subheading">Elevate Your Relationships</span>
            </h1>

            <div className="button-group">
              <a href="/contact" className="primary-button">
                Get Started Free
                <SparklesIcon className="icon-spacing" />
              </a>
            </div>
          </div>

          {/* App Preview */}
          <div className="app-preview">
            <div className="preview-container">
              {/* ... rest of the preview container JSX ... */}
            </div>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="feature-grid grid">
        <div className="grid1">
          <h2 className="feature-heading">Why Choose ContactFlow?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: UserGroupIcon,
                title: "Smart Organization",
                description: "Auto-categorize contacts with AI-powered tagging",
              },
              {
                icon: PhoneIcon,
                title: "Cross-Platform Sync",
                description: "Access contacts anywhere, anytime",
              },
              {
                icon: ChartBarIcon,
                title: "Interaction Analytics",
                description: "Track engagement and strengthen relationships",
              },
              {
                icon: SparklesIcon,
                title: "Automated Follow-ups",
                description: "Never miss important connections",
              },
            ].map((feature, idx) => (
              <div key={idx} className="feature-icon">
                <feature.icon className="icon" />
                <h3 className="heading-text">{feature.title}</h3>
                <p className="text">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-item">
          <p className="text footer-text">
            © 2024 ContactFlow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
