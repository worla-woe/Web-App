import { Icon } from "@iconify/react";
import axios from "axios";
import { onValue, ref } from "firebase/database";
import React, { useEffect, useState, useRef } from "react";
import { database } from "./firebase";
import { Link, useLocation } from "react-router-dom";

// Import images
import herobanner1 from "../assets/herobanner1.png";
import aboutbanner1 from "../assets/about1.jpg";
import aboutbanner2 from "../assets/about2.jpg";
import tip1 from "../assets/tip1.jpg";
import tip2 from "../assets/tip2.jpg";
import tip3 from "../assets/tip3.jpg";

//import Spinner from "./Spinner";

function Container() {
  const navbarRef = useRef(null);
  const navTogglerRef = useRef(null);
  const navLinksRef = useRef([]);
  // const [weatherData, setWeatherData] = useState(null);
  // const [currentTime, setCurrentTime] = useState("");
  // const [minTemp, setMinTemp] = useState(null);
  // const [maxTemp, setMaxTemp] = useState(null);
  // const [barChartData, setBarChartData] = useState(null);
  // const [historicalData, setHistoricalData] = useState([]); // State for storing historical data

  // useEffect(() => {
  //   const dataRef = ref(database, "UsersData/aQneh2b126bTeN72h2P0blODcy82");
  //   onValue(dataRef, (snapshot) => {
  //     if (snapshot.exists()) {
  //       const data = snapshot.val();
  //       const newData = {
  //         main: {
  //           temp: data.Temperature,
  //           feels_like: data.Temperature,
  //           temp_min: data.minTemp,
  //           temp_max: data.maxTemp,
  //           humidity: data.Humidity,
  //           pressure: data.pressure,
  //           rain_sensor: data.rainValue,
  //         },
  //         weather: [{ main: getWeatherCondition(data) }],
  //         timestamp: new Date().toLocaleString(),
  //       };
  //       setWeatherData(newData);
  //       setMinTemp(data.minTemp);
  //       setMaxTemp(data.maxTemp);
  //       setHistoricalData((prevData) => [...prevData, newData]); // Append new data to historical data
  //     } else {
  //       console.log("No data available");
  //     }
  //   });

  //   // Fetch forecast data
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post(
  //         "https://deepapi-z2d7.onrender.com/predict/",
  //         { days: 7 }
  //       );
  //       const formattedData = formatForecastData(response.data);
  //       setBarChartData(formattedData);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();

  //   // Get current time
  //   const interval = setInterval(() => {
  //     const now = new Date();
  //     const hours = now.getHours();
  //     const minutes = now.getMinutes();
  //     const day = hours > 12 ? "PM" : "AM";
  //     setCurrentTime(
  //       `${hours > 12 ? hours - 12 : hours}:${
  //         minutes < 10 ? "0" + minutes : minutes
  //       } ${day}`
  //     );
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  // const getWeatherCondition = (data) => {
  //   if (data.rainValue < 500) {
  //     return "rain";
  //   } else if (data.ldrValue > 500) {
  //     return "clear";
  //   } else if (data.Temperature > 29 && data.ldrValue > 500) {
  //     return "sunny";
  //   } else if (data.ldrValue > 200) {
  //     return "cloudy";
  //   } else {
  //     return "cloudy";
  //   }
  // };

  // const getWeatherImage = (getWeatherCondition) => {
  //   if (!getWeatherCondition) return cloudy;

  //   switch (getWeatherCondition.toLowerCase()) {
  //     case "clear":
  //       return sunny;
  //     case "cloudy":
  //       return cloudy;
  //     case "rain":
  //       return rainy;
  //     case "sunny":
  //       return sunny;
  //     default:
  //       return cloudy;
  //   }
  // };

  // const weatherIcons = (getWeatherCondition) => {
  //   if (!getWeatherCondition) return "fluent-mdl2:cloudy";

  //   switch (getWeatherCondition.toLowerCase()) {
  //     case "clear":
  //       return "material-symbols:sunny";
  //     case "clouds":
  //       return "fluent-mdl2:cloudy";
  //     case "rain":
  //       return "carbon:rain";
  //     case "sunny":
  //       return "material-symbols:sunny";
  //     case "thunderstorm":
  //       return "carbon:rain";
  //     case "Squall":
  //       return "ph:wind-fill";
  //     default:
  //       return "fluent-mdl2:cloudy";
  //   }
  // };

  // const formatForecastData = (forecastList) => {
  //   const labels = forecastList.map((item) =>
  //     new Date(item.date).toLocaleDateString("en-US", { weekday: "long" })
  //   );
  //   const values = forecastList.map((item) => item.chance_of_rainfall);

  //   return {
  //     labels,
  //     values,
  //     label: "Chance of Rainfall",
  //   };
  // };

  // const weatherCondition = weatherData?.weather[0]?.main;


  const headerRef = useRef(null);
  const backTopBtnRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const navToggler = navTogglerRef.current;

    const toggleNavbar = () => {
      navbar.classList.toggle("active");
    };

    const closeNavbar = () => {
      navbar.classList.remove("active");
    };

    if (navToggler) {
      navToggler.addEventListener("click", toggleNavbar);
    }

    navLinksRef.current.forEach(link => {
      link.addEventListener("click", closeNavbar);
    });

    // Cleanup event listeners on unmount
    return () => {
      if (navToggler) {
        navToggler.removeEventListener("click", toggleNavbar);
      }
      navLinksRef.current.forEach(link => {
        link.removeEventListener("click", closeNavbar);
      });
    };
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    const backTopBtn = backTopBtnRef.current;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
      } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <div id="top" className="body">
      <header className="header" ref={headerRef}>
        <div className="containers">
          <a href="#" className="logo">
            PhishGuard
          </a>

          <nav className="navbar" data-navbar  ref={navbarRef}>
            <ul className="navbar-list containers">
              <li>
                <a href="#home" className="navbar-link active"  ref={el => navLinksRef.current[0] = el}>
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="navbar-link"  ref={el => navLinksRef.current[1] = el}>
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="navbar-link"  ref={el => navLinksRef.current[2] = el}>
                  About
                </a>
              </li>
              <li>
                <a href="#tips" className="navbar-link"  ref={el => navLinksRef.current[3] = el}>
                  Tips
                </a>
              </li>

              <li className="md:hidden">
                <a href="/login" className="btn btn-primary">
                  Login
                </a>
              </li>
            </ul>
          </nav>

          <button
            className="nav-toggle-btn  md:hidden"
            aria-label="toggle menu"
            ref={navTogglerRef}
          >
            <ion-icon name="menu-outline" ></ion-icon>
                    <Icon icon="ant-design:menu-outlined" />
          </button>
        </div>
      </header>
      <section className="section hero" aria-label="hero" id="home">
        <div className="containers">
          <div className="hero-content">
            <p className="section-subtitle">PhishGuard</p>

            <h1 className="h1 hero-title">Don't be a victim of internet scams</h1>

            <p className="section-text">
              <b>Detect your links,emails and messages with PhishGuard</b>
              <br />
              Our advanced system helps safeguard your online presence by
              identifying and mitigating phishing threats in real-time. Navigate
              through our site to learn more about our system and how we can
              help you stay secure
            </p>

            <ul className="btn-list">
              <li>
                <textarea id="detect" name="detect" rows="" cols="" placeholder="Paste your email/sms here"></textarea>
              </li>
              <li>
                <button className="btn btn-primary" id="detectBtn">
                  Detect
                </button>
              </li>
            </ul>
          </div>

          <figure className="hero-banner">
            <img
              src={herobanner1}
              width="769"
              height="804"
              alt="hero banner"
              className="w-100"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="section features" id="features" aria-label="features">
        <div className="containers">
          <p className="section-subtitle">Our Web App Feature</p>

          <h2 className="h2 section-title">Awesome Features</h2>

          <ul className="features-list">
            <li className="features-item">
              <div className="features-card">
                <div className="card-icon">
                  <Icon icon="ion:create-outline" />
                </div>

                <h3 className="h3 card-title">Easy to Use</h3>

                <p className="card-text">
                  An easy to use interface, user-friendly wensite
                </p>
              </div>
            </li>

            <li className="features-item">
              <div className="features-card">
                <div className="card-icon">
                  <Icon icon="icon-park-outline:protect" />
                </div>

                <h3 className="h3 card-title">Real-Time Detection</h3>

                <p className="card-text">
                  Our system analyzes links, emails, and messages in real-time
                  to detect and block phishing attempts.
                </p>
              </div>
            </li>

            <li className="features-item">
              <div className="features-card">
                <div className="card-icon">
                  <Icon icon="ion:settings-outline" />
                </div>

                <h3 className="h3 card-title">User-Friendly Interface</h3>

                <p className="card-text">
                  PhishGuard is designed with ease of use in mind, making it
                  accessible for everyone
                </p>
              </div>
            </li>

            <li className="features-item">
              <div className="features-card">
                <div className="card-icon">
                  <Icon icon="carbon:ibm-cloud-pak-security" />
                </div>

                <h3 className="h3 card-title">Security Training</h3>

                <p className="card-text">
                  Equip yourself and your team with the knowledge to recognize
                  and avoid phishing scams
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section about" id="about" aria-label="about">
        <div className="containers">
          <figure className="about-banner">
            <img
              src={aboutbanner1}
              width="1262"
              height="1357"
              loading="lazy"
              alt="about banner"
              className="w-100"
            />
          </figure>

          <div className="about-content">
            <p className="section-subtitle">Our Acquaintance</p>

            <h2 className="h2 section-title">
              We Are Trusted By Thousands Of People
            </h2>

            <p className="section-text">
              We are committed to continuously improving our technology to keep
              up with the ever-evolving phishing tactics. Our advanced system
              helps you stay ahead of threats by identifying and mitigating
              phishing attempts before they can cause harm. We use cutting-edge
              technology and a user-friendly interface to ensure that you can
              navigate the internet safely and securely.
            </p>

            <ul className="about-list">
              <li className="about-item">
                <div className="item-icon">
                  <Icon icon="ion:folder" />
                </div>

                <div>
                  <h3 className="h3 item-title">Device Quality Design</h3>

                  <p className="item-text">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                  </p>
                </div>
              </li>

              <li className="about-item">
                <div className="item-icon">
                  <Icon icon="fluent-mdl2:navigate-external-inline" />
                </div>

                <div>
                  <h3 className="h3 item-title">Easy to Navigate</h3>

                  <p className="item-text">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                  </p>
                </div>
              </li>
            </ul>

            <a href="#" className="btn btn-secondary">
              Discover More
            </a>
          </div>
        </div>
      </section>

      <section className="section about" aria-label="about">
        <div className="containers">
          <div className="about-content">
            <p className="section-subtitle">Cool & Amazing Design</p>

            <h2 className="h2 section-title">
              We Help You Stay Away From Phishers
            </h2>

            <p className="section-text">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit
              tellus, luc tus nec ullamcorper mattis, pulvinar dapibus leo.
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit
              tellus, luc tus nec ullam corper.
            </p>

            <p className="section-text">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit
              tellus, luc tus nec ullamcorper mattis, pulvinar dapibus leo.
              Lorem ipsum dolor.
            </p>

            <a href="#" className="btn btn-secondary">
              Discover More
            </a>
          </div>

          <figure className="about-banner">
            <img
              src={aboutbanner2}
              width="1146"
              height="1226"
              loading="lazy"
              alt="about banner"
              className="w-100"
            />
          </figure>
        </div>
      </section>

      <section className="section tips" id="tips" aria-label="tips">
        <div className="containers">
          <p className="section-subtitle">Recent Tips</p>

          <h2 className="h2 section-title">Our Tips And Latest News</h2>

          <ul className="tips-list">
            <li>
              <div className="tips-card">
                <figure className="card-banner img-holder">
                  <img
                    src={tip1}
                    width="768"
                    height="558"
                    loading="lazy"
                    alt="Protect Yourself From Phishing Attacks"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <Icon icon="ph:calendar"  color="hsl(22,90%,56%"/>
                      <time className="card-meta-text" dateTime="2024-05-22">
                        May 22,2024
                      </time>
                    </li>

                    <li className="card-meta-item">
                      <Icon icon="ph:chat-light" color="hsl(22,90%,56%" />
                      <p className="card-meta-text">2 Comment</p>
                    </li>
                  </ul>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      Protect Yourself From Phishing Attacks
                    </a>
                  </h3>

                  <a href="#" className="btn btn-outline">
                    Read More
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="tips-card">
                <figure className="card-banner img-holder">
                  <img
                    src={tip2}
                    width="768"
                    height="558"
                    loading="lazy"
                    alt="How Attackers Deceive You"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <Icon icon="ph:calendar"  color="hsl(22,90%,56%"/>

                      <time className="card-meta-text" dateTime="2024-05-22">
                        May 22,2024
                      </time>
                    </li>

                    <li className="card-meta-item">
                      <Icon icon="ph:chat-light"  color="hsl(22,90%,56%"/>

                      <p className="card-meta-text">2 Comment</p>
                    </li>
                  </ul>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      How Attackers Deceive You
                    </a>
                  </h3>

                  <a href="#" className="btn btn-outline">
                    Read More
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="tips-card">
                <figure className="card-banner img-holder">
                  <img
                    src={tip3}
                    width="768"
                    height="558"
                    loading="lazy"
                    alt="Insights on How to Improve Your Security."
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <Icon icon="ph:calendar"  color="hsl(22,90%,56%"/>

                      <time className="card-meta-text" dateTime="2024-05-22">
                        May 22,2024
                      </time>
                    </li>

                    <li className="card-meta-item">
                      <Icon icon="ph:chat-light"  color="hsl(22,90%,56%"/>

                      <p className="card-meta-text">2 Comment</p>
                    </li>
                  </ul>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      Insights on How to Improve Your Security.
                    </a>
                  </h3>

                  <a href="#" className="btn btn-outline">
                    Read More
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <div className="section footer-top">
          <div className="containers">
            <div className="footer-brand">
              <a href="#" className="logo">
                PhishGuard
              </a>

              <p className="section-text">
                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla
                utimp erdiet commodo diam libero vitae nibh et jus cursus id
                rutrum lore imperdiet ut sem vitae risus tristique posuere
              </p>

              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    <Icon icon="logos:facebook" />
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <Icon icon="skill-icons:twitter" />
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <Icon icon="devicon:google" />
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <Icon icon="skill-icons:linkedin" />
                  </a>
                </li>
              </ul>
            </div>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Company</p>
              </li>

              <li>
                <a href="#about" className="footer-link">
                  About Us
                </a>
              </li>

              <li>
                <a href="#contact" className="footer-link">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Core Services
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Our Team
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Useful Links</p>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Terms & Conditions
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Get In Touch</p>
              </li>
              <li className="footer-item">           
                    <Icon icon="ion:call-outline"  color="hsl(22,90%,56%"/>
                <a href="tel:+233(546789345)" className="item-link">
                  +233(546789345)
                </a>
              </li>
              <li className="footer-item">
                <Icon icon="material-symbols:mail"  color="hsl(22,90%,56%"/>
                <a href="mailto:supportphishguard@gmail.com" className="item-link">
                  supportphishguard@gmail.com
                </a>
              </li>
              <li className="footer-item">
                <Icon icon="ion:map-outline"  color="hsl(22,90%,56%"/>
                <address className="item-link address">
                  PMB ,<br />
                  KNUST,Kumasi, Ashanti Region, Ghana
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="containers">
            <p className="copyright">
              &copy; 2024 All Rights Reserved by
              <a href="#" className="copyright-link">
                PhishGuard
              </a>
              .
            </p>
          </div>
        </div>
      </footer>

      <a
        href="#top"
        className="back-top-btn"
        aria-label="back to top"
        ref={backTopBtnRef}
      >
        <Icon icon="tdesign:chevron-up-rectangle"/>
      </a>
    </div>
  );
}

export default Container;
