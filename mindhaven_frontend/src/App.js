import React, { useState } from "react";
import "./App.css";

// Sample royalty-free Unsplash/Pexels image URLs for feature
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"; // Calm, nature
const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=350&q=80"; // Gentle portrait
const DASHBOARD_IMAGE =
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=700&q=80"; // Abstract peace
const FEATURE_ICONS = {
  "ADHD Test":
    "🧠",
  "Anxiety Test":
    "😰",
  "Depression Test":
    "🌧️",
  "Stress Test":
    "💡",
  "PTSD Screening":
    "🛡️",
  "Personality Test":
    "🗝️",
  "Emotional Intelligence Test":
    "🧩",
  "AI Therapist Chat":
    "💬",
  "View Past Test Results":
    "📈",
};

// Minimal CSS for custom theme in addition to App.css root
const colors = {
  primary: "#4CAF50",
  secondary: "#F9FAFB",
  accent: "#FF9800",
  text: "#222",
  bg: "#F9FAFB",
};
const fontFamily =
  "'Poppins', 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Helvetica Neue', Arial, sans-serif";

const featureList = [
  {
    name: "ADHD Test",
    description: "Self-assessment test to screen for symptoms of ADHD.",
    isEnabled: true,
  },
  {
    name: "Anxiety Test",
    description: "Self-assessment test to evaluate anxiety levels.",
    isEnabled: true,
  },
  {
    name: "Depression Test",
    description: "Self-assessment test to screen for symptoms of depression.",
    isEnabled: true,
  },
  {
    name: "Stress Test",
    description: "Self-assessment test to measure stress levels.",
    isEnabled: true,
  },
  {
    name: "PTSD Screening",
    description: "Self-assessment test to screen for symptoms of PTSD.",
    isEnabled: true,
  },
  {
    name: "Personality Test",
    description: "Test to help users understand their personality traits.",
    isEnabled: true,
  },
  {
    name: "Emotional Intelligence Test",
    description: "Test to assess emotional intelligence.",
    isEnabled: true,
  },
  {
    name: "AI Therapist Chat",
    description:
      "Chat feature that allows users to interact with an AI Therapist for support and guidance.",
    isEnabled: true,
  },
  {
    name: "View Past Test Results",
    description: "Users can view their previous test results stored locally.",
    isEnabled: true,
  },
];

function scrollToId(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// PUBLIC_INTERFACE
function App() {
  // Fake routing for minimal login/dashboard page switching
  const [route, setRoute] = useState("home");
  // States for contact form (minimal, no backend)
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [login, setLogin] = useState({ email: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);

  // Minimal fake authentication: just demonstrate navigation
  function handleLoginSubmit(e) {
    e.preventDefault();
    setLoggedIn(true);
    setRoute("dashboard");
  }
  function handleContactSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setContact({ name: "", email: "", message: "" });
  }
  function handleLogout() {
    setLoggedIn(false);
    setRoute("home");
  }

  // The sticky header navigation
  function Navbar() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <span className="logo-symbol" aria-label="InnerEase logo">
              <svg width={19} height={19} viewBox="0 0 19 19"><circle cx={9.5} cy={9.5} r={9.5} fill={colors.primary}/><circle cx={9.5} cy={9.5} r={5.5} fill={colors.accent} fillOpacity="0.13"/></svg>
            </span>
            InnerEase
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <button
              className="navlink"
              onClick={() => {
                setRoute("home");
                scrollToId("hero");
              }}
              tabIndex={0}
            >
              Home
            </button>
            <button
              className="navlink"
              onClick={() => scrollToId("about")}
              tabIndex={0}
            >
              About
            </button>
            <button
              className="navlink"
              onClick={() => scrollToId("vision")}
              tabIndex={0}
            >
              Our Mission
            </button>
            <button
              className="navlink"
              onClick={() => scrollToId("contact")}
              tabIndex={0}
            >
              Contact
            </button>
            {!loggedIn && (
              <button
                className="navlink btn btn-accent"
                onClick={() => setRoute("login")}
                tabIndex={0}
                style={{ marginLeft: 8 }}
              >
                Login
              </button>
            )}
            {loggedIn && (
              <button
                className="navlink"
                onClick={handleLogout}
                tabIndex={0}
                style={{
                  fontWeight: 500,
                  borderRadius: 20,
                  padding: "5px 18px",
                  border: "1px solid #eee",
                  marginLeft: 8,
                  background: "#fff",
                  transition: "box-shadow 0.2s"
                }}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    );
  }

  // The landing/marketing main page
  function HomePage() {
    return (
      <main>
        {/* Hero Section */}
        <section id="hero" className="hero">
          <div className="container">
            <h2 className="subtitle">Caring. Confidential. Free.</h2>
            <h1 className="title">
              Explore Your Mind, <br /> Embrace Your Well-being
            </h1>
            <div className="description">
              MindHaven brings together self-assessment tests and AI-powered guidance for your mental wellness journey — all in a warm, safe, and friendly digital space.
            </div>
            <button
              className="btn btn-large"
              onClick={() => scrollToId("features")}
              tabIndex={0}
              style={{ marginTop: 28, width: "fit-content" }}
            >
              Get Started
            </button>
          </div>
          <div aria-hidden="true" style={{ zIndex: 1, margin: "0 0 10px 0" }}>
            <img
              src={HERO_IMAGE}
              alt="Relaxing nature, calming atmosphere"
              className="hero-img"
              loading="lazy"
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section" tabIndex={-1}>
          <div className="container">
            <div aria-hidden="true" style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: 8 }}>
              <img
                src={ABOUT_IMAGE}
                alt="Warm welcoming face, representation of mental well-being"
                className="about-img"
                loading="lazy"
              />
            </div>
            <div className="about-content">
              <h2 className="about-title">About InnerEase</h2>
              <p className="about-p">
                InnerEase is a free online platform dedicated to supporting your mental health and self-discovery. Take scientifically validated assessments for ADHD, anxiety, depression, and more — or talk to our AI Therapist chat for immediate support. No stigma, no pressure: just a place of understanding and growth.
              </p>
            </div>
          </div>
        </section>

        {/* Vision and Mission */}
        <section id="vision" className="vision-section">
          <div className="container">
            <h2 className="vision-title">Vision &amp; Mission</h2>
            <p className="vision-p">
              <b>Our Vision:</b> A world where every individual can access mental wellness tools and support with dignity, privacy, and ease.
            </p>
            <p className="vision-p">
              <b>Our Mission:</b> To empower people with science-backed tests, AI-guided support, and practical insights — making mental health resources accessible to everyone, everywhere, for free.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features-section">
          <div className="container">
            <h2 className="features-title">
              Features &amp; Self-Assessments
            </h2>
            <div className="features-grid" aria-label="test and chat feature cards">
              {featureList.map(
                (feat, i) =>
                  feat.isEnabled && (
                    <div
                      key={feat.name}
                      className="feature-card"
                      tabIndex={0}
                      aria-label={feat.name}
                      onClick={
                        feat.name === "AI Therapist Chat"
                          ? () => {
                              setRoute("dashboard");
                            }
                          : undefined
                      }
                      style={{
                        cursor: feat.name === "AI Therapist Chat" ? "pointer" : "default"
                      }}
                    >
                      <span
                        style={{
                          filter:
                            feat.name === "AI Therapist Chat"
                              ? "drop-shadow(0 1.5px 6px #FF980037)"
                              : "drop-shadow(0 1.5px 4px #4caf5017)"
                        }}
                        aria-label={feat.name + " icon"}
                        title={feat.name}
                      >
                        {FEATURE_ICONS[feat.name]}
                      </span>
                      <div
                        className="feature-name"
                        style={{
                          color: feat.name === "AI Therapist Chat"
                            ? "#FF9800"
                            : "#4CAF50"
                        }}
                      >
                        {feat.name}
                      </div>
                      <div className="feature-desc">
                        {feat.description}
                      </div>
                    </div>
                  )
              )}
            </div>
            <div style={{ marginTop: 26 }}>
              <span style={{
                fontWeight: 500,
                fontSize: "1rem",
                color: "#222"
              }}>
                All features are free and private — your results are only stored on your device.
              </span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <h2 className="contact-title">Contact Us</h2>
            <form onSubmit={handleContactSubmit} autoComplete="off">
              <input
                required
                autoComplete="off"
                type="text"
                name="name"
                placeholder="Your name"
                value={contact.name}
                onChange={e => setContact({ ...contact, name: e.target.value })}
                disabled={submitted}
              />
              <input
                required
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Your email"
                value={contact.email}
                onChange={e =>
                  setContact({ ...contact, email: e.target.value })
                }
                disabled={submitted}
              />
              <textarea
                required
                autoComplete="off"
                name="message"
                placeholder="How can we help?"
                value={contact.message}
                onChange={e =>
                  setContact({ ...contact, message: e.target.value })
                }
                disabled={submitted}
              />
              <button
                type="submit"
                className="btn btn-accent"
                style={{
                  fontWeight: 500,
                  fontSize: "1.11rem",
                  marginTop: 10,
                  minWidth: 110,
                  padding: "12px 26px"
                }}
                disabled={submitted}
              >
                {submitted ? "Sent!" : "Send"}
              </button>
            </form>
            {submitted && (
              <div style={{ color: "#4CAF50", marginTop: 14 }}>
                Thank you! We'll be in touch.
              </div>
            )}
          </div>
        </section>
      </main>
    );
  }

  // The minimal login page
  function LoginPage() {
    return (
      <div style={{
        minHeight: "100vh",
        background: "var(--bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div
          style={{
            background: "#fff",
            borderRadius: 22,
            boxShadow: "0 2px 24px #0001",
            padding: "44px 34px 32px 34px",
            minWidth: 310,
            maxWidth: 370,
            marginTop: 56,
            animation: "fadein 0.6s"
          }}
        >
          <h2 style={{
            color: "#4CAF50",
            fontWeight: 700,
            fontSize: "1.35rem",
            margin: 0,
            marginBottom: 18,
            letterSpacing: ".01em",
          }}>
            Sign In to InnerEase
          </h2>
          <form onSubmit={handleLoginSubmit} autoComplete="off">
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="username"
              value={login.email}
              onChange={e => setLogin(current => ({
                ...current,
                email: e.target.value
              }))}
              disabled={loggedIn}
            />
            <input
              required
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              value={login.password}
              onChange={e => setLogin(current => ({
                ...current,
                password: e.target.value
              }))}
              disabled={loggedIn}
            />
            <button
              className="btn btn-large"
              type="submit"
              style={{
                marginTop: 18,
                width: "100%"
              }}
              disabled={loggedIn}
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  }

  // The minimal dashboard page
  function DashboardPage() {
    return (
      <div className="dashboard-section">
        <div className="container">
          <div className="dashboard-header-row">
            <img
              src={DASHBOARD_IMAGE}
              alt="Calm abstract, peaceful dashboard"
              className="dashboard-img"
              loading="lazy"
            />
            <div className="dashboard-header-content">
              <h2 className="dashboard-title">Welcome to Your Dashboard</h2>
              <p className="dashboard-p">
                Take assessments, chat with our AI Therapist, or view your past test results — all in one calm, private place.
              </p>
            </div>
          </div>
          <div className="dashboard-cards">
            {featureList.map(
              feat =>
                feat.isEnabled && (
                  <div
                    key={feat.name}
                    className="dashboard-feature-card"
                  >
                    <span
                      style={{
                        filter:
                          feat.name === "AI Therapist Chat"
                            ? "drop-shadow(0 1.5px 6px #FF980037)"
                            : "drop-shadow(0 1.5px 4px #4caf5017)"
                      }}
                      aria-label={feat.name + " icon"}
                      title={feat.name}
                    >
                      {FEATURE_ICONS[feat.name]}
                    </span>
                    <div
                      className="dashboard-feature-name"
                      style={{
                        color: feat.name === "AI Therapist Chat"
                          ? "#FF9800"
                          : "#4CAF50"
                      }}
                    >
                      {feat.name}
                    </div>
                    <div className="dashboard-feature-desc">
                      {feat.description}
                    </div>
                    <button
                      className="dashboard-card-btn"
                      style={{
                        background:
                          feat.name === "AI Therapist Chat"
                            ? "#FF9800"
                            : "#4CAF50",
                        color: "#fff"
                      }}
                      tabIndex={0}
                      aria-label={`Open ${feat.name}`}
                    >
                      {feat.name === "AI Therapist Chat" ? "Open Chat" : "Take Test"}
                    </button>
                  </div>
                )
            )}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: "1.06rem",
              color: "#666",
              fontWeight: 400,
              textAlign: "center"
            }}
          >
            Your past test results are stored privately in your browser.
          </div>
        </div>
      </div>
    );
  }

  // The footer with links
  function Footer() {
    return (
      <footer>
        <div className="container">
          <div style={{ color: "#4CAF50", fontWeight: 700, letterSpacing: 0.1 }}>
            © {new Date().getFullYear()} InnerEase
          </div>
          <div style={{ display: "flex", gap: 22 }}>
            <a
              href="#privacy"
              tabIndex={0}
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              tabIndex={0}
            >
              Terms
            </a>
          </div>
        </div>
      </footer>
    );
  }
  // Simple input style for re-use
  const contactInputStyle = {
    fontFamily,
    fontSize: "1.07rem",
    border: "1px solid #d8e3d3",
    borderRadius: 15,
    padding: "12px 16px",
    marginBottom: 14,
    outline: "none",
    background: "#fcfcfd",
    width: "100%",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  // Basic page routing logic
  let pageContent;
  if (route === "login") {
    pageContent = (
      <>
        <Navbar />
        <LoginPage />
        <Footer />
      </>
    );
  } else if (route === "dashboard" && loggedIn) {
    pageContent = (
      <>
        <Navbar />
        <DashboardPage />
        <Footer />
      </>
    );
  } else {
    pageContent = (
      <>
        <Navbar />
        <HomePage />
        <Footer />
      </>
    );
  }

  // Top level app container
  return <div className="app" style={{ background: colors.bg }}>{pageContent}</div>;
}

export default App;