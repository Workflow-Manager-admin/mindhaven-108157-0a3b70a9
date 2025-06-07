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
      <nav
        className="navbar"
        style={{
          background: "#fff",
          color: colors.primary,
          borderBottom: `1px solid #e0e0e0`,
          fontFamily,
          fontWeight: 500,
          fontSize: "1rem",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 8,
            paddingBottom: 8,
            maxWidth: 1040,
            margin: "0 auto",
          }}
        >
          <div
            className="logo"
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: 700,
              color: colors.primary,
              fontSize: "1.4rem",
              letterSpacing: "0.01em",
              gap: 8,
            }}
          >
            <span
              style={{
                background: colors.primary,
                color: "#fff",
                borderRadius: "50%",
                width: 32,
                height: 32,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 8,
                fontSize: 18,
                fontWeight: 600,
                fontFamily,
              }}
              aria-label="InnerEase logo"
            >
              <svg width={19} height={19} viewBox="0 0 19 19"><circle cx={9.5} cy={9.5} r={9.5} fill={colors.primary}/><circle cx={9.5} cy={9.5} r={5.5} fill={colors.accent} fillOpacity="0.13"/></svg>
            </span>
            InnerEase
          </div>
          <div
            style={{
              display: "flex",
              gap: 16,
            }}
          >
            <button
              className="navlink"
              onClick={() => {
                setRoute("home");
                scrollToId("hero");
              }}
            >
              Home
            </button>
            <button
              className="navlink"
              onClick={() => scrollToId("about")}
            >
              About
            </button>
            <button
              className="navlink"
              onClick={() => scrollToId("vision")}
            >
              Our Mission
            </button>
            <button
              className="navlink"
              onClick={() => scrollToId("contact")}
            >
              Contact
            </button>
            {!loggedIn && (
              <button
                className="navlink btn btn-accent"
                style={{
                  color: "#fff",
                  background: colors.accent,
                  borderRadius: 20,
                  padding: "5px 20px",
                  fontWeight: 600,
                  marginLeft: 8,
                }}
                onClick={() => setRoute("login")}
              >
                Login
              </button>
            )}
            {loggedIn && (
              <button
                className="navlink"
                onClick={handleLogout}
                style={{
                  color: colors.primary,
                  fontWeight: 500,
                  borderRadius: 20,
                  padding: "5px 18px",
                  border: "1px solid #eee",
                  marginLeft: 8,
                  background: "#fff",
                  transition: "box-shadow 0.2s",
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
      <main
        style={{
          background: colors.bg,
          minHeight: "100vh",
          fontFamily,
          color: colors.text,
          transition: "background 0.2s",
          lineHeight: 1.7,
        }}
      >
        <section
          id="hero"
          className="hero"
          style={{
            background: colors.secondary,
            paddingTop: 120,
            paddingBottom: 56,
            animation: "fadein 1s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            minHeight: 380,
            gap: "48px",
          }}
        >
          <div
            className="container"
            style={{
              maxWidth: "520px",
              margin: "0 auto",
              padding: 0,
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              zIndex: 2,
            }}
          >
            <h2
              className="subtitle"
              style={{
                color: colors.primary,
                fontSize: "1.21rem",
                fontWeight: 500,
                marginBottom: 16,
                letterSpacing: ".04em",
                textAlign: "left"
              }}
            >
              Caring. Confidential. Free.
            </h2>
            <h1
              className="title"
              style={{
                fontFamily,
                fontWeight: 700,
                fontSize: "2.8rem",
                margin: "16px 0",
                lineHeight: 1.16,
                textAlign: "left",
              }}
            >
              Explore Your Mind, <br /> Embrace Your Well-being
            </h1>
            <div
              className="description"
              style={{
                color: "#333",
                maxWidth: "500px",
                fontSize: "1.18rem",
                margin: "24px 0 0 0",
                textAlign: "left"
              }}
            >
              MindHaven brings together self-assessment tests and AI-powered guidance for your mental wellness journey — all in a warm, safe, and friendly digital space.
            </div>
            <button
              className="btn btn-large"
              style={{
                background: colors.primary,
                color: "#fff",
                borderRadius: 40,
                fontFamily,
                fontSize: "1.12rem",
                padding: "15px 40px",
                boxShadow: "0 4px 32px #00000009",
                fontWeight: 600,
                letterSpacing: ".03em",
                marginTop: 28,
                width: "fit-content",
              }}
              onClick={() => scrollToId("features")}
            >
              Get Started
            </button>
          </div>
          <div
            aria-hidden="true"
            style={{
              flex: "1 1 320px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: 260,
              minHeight: 260,
              zIndex: 1,
              marginRight: 30,
              marginTop: 10,
              marginBottom: 10,
              overflow: "visible"
            }}
          >
            <img
              src={HERO_IMAGE}
              alt="Relaxing nature, calming atmosphere"
              style={{
                width: "320px",
                maxWidth: "100%",
                borderRadius: "38px",
                boxShadow: "0 2px 28px #4caf501a, 0 1.5px 12px #1111",
                objectFit: "cover",
                border: "2.2px solid #e3f7ec"
              }}
              loading="lazy"
            />
          </div>
        </section>

        <section
          id="about"
          style={{
            background: "#ffffff",
            padding: "60px 0 40px 0",
            animation: "fadein-up 0.7s",
          }}
        >
          <div
            className="container"
            style={{
              maxWidth: 900,
              margin: "0 auto",
              color: "#222",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: 38,
              textAlign: "left",
              flexWrap: "wrap",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                flex: "0 0 180px",
                maxWidth: 220,
                alignSelf: "center",
                display: "flex",
                justifyContent: "center",
                paddingTop: "8px"
              }}
            >
              <img
                src={ABOUT_IMAGE}
                alt="Warm welcoming face, representation of mental well-being"
                style={{
                  width: "180px",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "40px",
                  boxShadow: "0 1.5px 14px #4caf5013",
                  border: "1.5px solid #bde5d4"
                }}
                loading="lazy"
              />
            </div>
            <div style={{minWidth: 270, flex: 1}}>
              <h2 style={{
                color: colors.primary,
                fontWeight: 600,
                fontSize: "2rem",
                marginBottom: 24
              }}>
                About InnerEase
              </h2>
              <p style={{
                fontSize: "1.12rem",
                color: "#222",
                marginBottom: 12
              }}>
                InnerEase is a free online platform dedicated to supporting your mental health and self-discovery. Take scientifically validated assessments for ADHD, anxiety, depression, and more — or talk to our AI Therapist chat for immediate support. No stigma, no pressure: just a place of understanding and growth.
              </p>
            </div>
          </div>
        </section>

        <section
          id="vision"
          style={{
            background: colors.secondary,
            padding: "46px 0 36px 0",
            animation: "fadein-up 0.9s",
          }}
        >
          <div
            className="container"
            style={{
              maxWidth: 850,
              margin: "0 auto",
              color: "#222",
              textAlign: "left",
            }}
          >
            <h2 style={{ color: colors.primary, fontWeight: 600, fontSize: "2rem", marginBottom: 17 }}>
              Vision &amp; Mission
            </h2>
            <p style={{ fontSize: "1.08rem", color: "#222", marginBottom: 5 }}>
              <b>Our Vision:</b> A world where every individual can access mental wellness tools and support with dignity, privacy, and ease.
            </p>
            <p style={{ fontSize: "1.08rem", color: "#222" }}>
              <b>Our Mission:</b> To empower people with science-backed tests, AI-guided support, and practical insights — making mental health resources accessible to everyone, everywhere, for free.
            </p>
          </div>
        </section>

        <section
          id="features"
          style={{
            background: "#fff",
            padding: "60px 0 52px 0",
            transition: "background 0.1s",
            animation: "fadein-up 1.1s",
          }}
        >
          <div
            className="container"
            style={{
              maxWidth: 950,
              margin: "0 auto",
              color: "#222",
              textAlign: "left",
            }}
          >
            <h2 style={{
              color: colors.primary,
              fontWeight: 600,
              fontSize: "2rem",
              marginBottom: 18,
              letterSpacing: ".01em"
            }}>
              Features &amp; Self-Assessments
            </h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 30,
                marginTop: 28,
                marginBottom: 12,
              }}
              aria-label="test and chat feature cards"
            >
              {featureList.map(
                (feat, i) =>
                  feat.isEnabled && (
                    <div
                      key={feat.name}
                      className="feature-card"
                      style={{
                        background: colors.secondary,
                        borderRadius: 20,
                        boxShadow: "0 2px 16px #0001",
                        padding: "28px 26px 23px 26px",
                        margin: "0 0 4px 0",
                        minWidth: 220,
                        maxWidth: 290,
                        flex: "1 1 240px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 5,
                        transition: "transform 0.19s, box-shadow 0.19s",
                        outline: 0,
                        border: "none",
                        fontFamily,
                        animation: "fadein-up .6s",
                        cursor: feat.name === "AI Therapist Chat" ? "pointer" : "default",
                        alignItems: "flex-start"
                      }}
                      tabIndex={0}
                      aria-label={feat.name}
                      onClick={
                        feat.name === "AI Therapist Chat"
                          ? () => {
                              setRoute("dashboard");
                            }
                          : undefined
                      }
                    >
                      <span
                        style={{
                          fontSize: "2.15rem",
                          marginBottom: 5,
                          lineHeight: 1,
                          display: "inline-block",
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
                        style={{
                          fontWeight: 600,
                          fontSize: "1.08rem",
                          color:
                            feat.name === "AI Therapist Chat"
                              ? colors.accent
                              : colors.primary,
                          marginBottom: 3,
                        }}
                      >
                        {feat.name}
                      </div>
                      <div
                        style={{
                          fontSize: "0.97rem",
                          color: "#444",
                          marginTop: 2,
                        }}
                      >
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
                color: colors.text
              }}>
                All features are free and private — your results are only stored on your device.
              </span>
            </div>
          </div>
        </section>

        <section
          id="contact"
          style={{
            background: "#f6f8fa",
            padding: "56px 0 56px 0",
            borderTop: `1.5px solid #eee`,
            animation: "fadein-up 1.3s",
          }}
        >
          <div
            className="container"
            style={{
              maxWidth: 540,
              margin: "0 auto",
              color: "#222",
              textAlign: "left",
            }}
          >
            <h2 style={{
              color: colors.primary,
              fontWeight: 600,
              fontSize: "1.64rem",
              marginBottom: 15
            }}>
              Contact Us
            </h2>
            <form onSubmit={handleContactSubmit} autoComplete="off">
              <input
                required
                autoComplete="off"
                type="text"
                name="name"
                placeholder="Your name"
                value={contact.name}
                style={contactInputStyle}
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
                style={contactInputStyle}
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
                style={{ ...contactInputStyle, minHeight: 90, resize: "vertical" }}
                onChange={e =>
                  setContact({ ...contact, message: e.target.value })
                }
                disabled={submitted}
              />
              <button
                type="submit"
                className="btn"
                style={{
                  background: colors.accent,
                  color: "#fff",
                  borderRadius: 20,
                  fontWeight: 500,
                  fontSize: "1.11rem",
                  marginTop: 10,
                  minWidth: 110,
                  cursor: "pointer",
                  padding: "12px 26px",
                  boxShadow: "0 1px 14px #e87a410d",
                }}
                disabled={submitted}
              >
                {submitted ? "Sent!" : "Send"}
              </button>
            </form>
            {submitted && (
              <div style={{ color: colors.primary, marginTop: 14 }}>
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
      <div
        style={{
          minHeight: "100vh",
          background: colors.bg,
          fontFamily,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 22,
            boxShadow: "0 2px 24px #0001",
            padding: "44px 34px 32px 34px",
            minWidth: 310,
            maxWidth: 370,
            marginTop: 56,
            animation: "fadein 0.6s",
          }}
        >
          <h2
            style={{
              color: colors.primary,
              fontFamily,
              fontWeight: 700,
              fontSize: "1.35rem",
              margin: 0,
              marginBottom: 18,
              letterSpacing: ".01em",
            }}
          >
            Sign In to InnerEase
          </h2>
          <form onSubmit={handleLoginSubmit} autoComplete="off">
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              style={contactInputStyle}
              autoComplete="username"
              value={login.email}
              onChange={e =>
                setLogin(current => ({
                  ...current,
                  email: e.target.value,
                }))
              }
              disabled={loggedIn}
            />
            <input
              required
              type="password"
              name="password"
              placeholder="Password"
              style={contactInputStyle}
              autoComplete="current-password"
              value={login.password}
              onChange={e =>
                setLogin(current => ({
                  ...current,
                  password: e.target.value,
                }))
              }
              disabled={loggedIn}
            />
            <button
              className="btn btn-large"
              style={{
                background: colors.primary,
                color: "#fff",
                borderRadius: 23,
                fontWeight: 600,
                letterSpacing: 0.01,
                fontSize: "1.05rem",
                marginTop: 18,
                width: "100%",
              }}
              type="submit"
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
      <div
        style={{
          minHeight: "100vh",
          background: colors.secondary,
          fontFamily,
          color: colors.text,
          paddingTop: 90,
          transition: "background 0.22s",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            padding: "0 18px",
            paddingBottom: 60,
            animation: "fadein-up 1.1s",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 38,
              flexWrap: "wrap",
              marginBottom: 12
            }}
          >
            <img
              src={DASHBOARD_IMAGE}
              alt="Calm abstract, peaceful dashboard"
              loading="lazy"
              style={{
                minWidth: 200,
                width: 210,
                height: 130,
                objectFit: "cover",
                borderRadius: 27,
                boxShadow: "0 1.5px 13px #4caf5013",
                border: "1.5px solid #b9eede"
              }}
            />
            <div style={{flex: 1, minWidth: 160}}>
              <h2
                style={{
                  color: colors.primary,
                  fontWeight: 700,
                  fontSize: "2.0rem",
                  marginTop: 12,
                  marginBottom: 8,
                }}
              >
                Welcome to Your Dashboard
              </h2>
              <p style={{ marginBottom: 2, color: "#333" }}>
                Take assessments, chat with our AI Therapist, or view your past test results — all in one calm, private place.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "28px 24px",
              marginBottom: 18,
            }}
          >
            {featureList.map(
              feat =>
                feat.isEnabled && (
                  <div
                    key={feat.name}
                    style={{
                      background: "#fff",
                      borderRadius: 18,
                      padding: "22px 18px 18px 18px",
                      minWidth: 210,
                      maxWidth: 285,
                      flex: "1 1 235px",
                      boxShadow: "0 2px 16px #0001",
                      marginBottom: 6,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start"
                    }}
                  >
                    <span
                      style={{
                        fontSize: "2.0rem",
                        marginBottom: 3,
                        marginTop: 0,
                        lineHeight: "1",
                        display: "inline-block",
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
                      style={{
                        fontWeight: 600,
                        color:
                          feat.name === "AI Therapist Chat"
                            ? colors.accent
                            : colors.primary,
                        fontSize: "1.07rem",
                        marginBottom: 2,
                        marginTop: 2,
                      }}
                    >
                      {feat.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.97rem",
                        color: "#444",
                        marginBottom: 4,
                      }}
                    >
                      {feat.description}
                    </div>
                    <button
                      style={{
                        background:
                          feat.name === "AI Therapist Chat"
                            ? colors.accent
                            : colors.primary,
                        color: "#fff",
                        borderRadius: 13,
                        border: "none",
                        fontWeight: 500,
                        fontSize: "1.01rem",
                        padding: "7px 23px",
                        marginTop: 12,
                        cursor: "pointer",
                        boxShadow: "0 1px 12px #4caf5022",
                        transition: "background 0.07s",
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
              textAlign: "center",
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
      <footer
        style={{
          background: "#fff",
          color: "#444",
          borderTop: "1.5px solid #eee",
          fontFamily,
          fontSize: "1rem",
          padding: "26px 0 20px 0",
          marginTop: 0,
          transition: "background 0.21s",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: 1040,
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <div style={{ color: colors.primary, fontWeight: 700, letterSpacing: 0.1 }}>
            © {new Date().getFullYear()} InnerEase
          </div>
          <div style={{ display: "flex", gap: 22 }}>
            <a
              href="#privacy"
              style={{
                textDecoration: "none",
                color: colors.text,
                fontWeight: 500,
              }}
              tabIndex={0}
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              style={{
                textDecoration: "none",
                color: colors.text,
                fontWeight: 500,
              }}
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