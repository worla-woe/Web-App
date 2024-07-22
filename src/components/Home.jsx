import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Home() {
  return (
    <body id="top">
      <header class="header" data-header>
        <div class="container">
          <a href="#" class="logo">
            PhishGuard
          </a>

          <nav class="navbar" data-navbar>
            <ul class="navbar-list container">
              <li>
                <a href="#home" class="navbar-link active" data-nav-link>
                  Home
                </a>
              </li>
              <li>
                <a href="#email" class="navbar-link" data-nav-link>
                  Email
                </a>
              </li>
              <li>
                <a href="#sms" class="navbar-link" data-nav-link>
                  SMS/Messages
                </a>
              </li>
              <li>
                <a href="#url" class="navbar-link" data-nav-link>
                  URL's
                </a>
              </li>

              <li>
                <a href="landing.html" class="btn btn-primary">
                  Logout
                </a>
              </li>
            </ul>
          </nav>

          <button
            class="nav-toggle-btn"
            aria-label="toggle manu"
            data-nav-toggler
          >
            <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>
      </header>

      <main>
        <article>
          <section class="section hero" aria-label="hero" id="home">
            <div class="container">
              <div class="hero-content">
                <p class="section-subtitle">PhishGuard</p>
                <h1 class="h1 hero-title">
                  Detect your links,emails and messages with PhishGuard
                </h1>
                <p class="section-text">
                  At PhishGuard, we understand the increasing threat of phishing
                  attacks in today's digital landscape.
                  <br />
                  Our mission is to provide you with robust and reliable
                  phishing detection solutions that safeguard your online
                  presence.
                  <br />
                  Whether it's links, emails, or messages, PhishGuard is here to
                  protect you from malicious attacks in real-time. Your trusted
                  partner in phishing detection and prevention.
                  <br />
                </p>
              </div>
            </div>
          </section>

          <section class="section email" aria-label="hero" id="email">
            <div class="container">
              <div class="hero-content">
                <p class="section-subtitle">Emails</p>

                <h1 class="h1 hero-title">Detect your Emails Over Here</h1>

                <textarea
                  id="emailscan"
                  name="emailscan"
                  rows="15"
                  cols="90"
                ></textarea>
                <ul class="btn-list">
                  <li>
                    <button class="btn btn-primary" id="maildetectBtn">
                      Detect Mail
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section class="section hero" aria-label="hero" id="sms">
            <div class="container">
              <div class="hero-content">
                <p class="section-subtitle">SMS</p>

                <h1 class="h1 hero-title">Detect your messages here</h1>

                <textarea
                  id="smsscan"
                  name="smsscan"
                  rows="15"
                  cols="90"
                ></textarea>
                <ul class="btn-list">
                  <li>
                    <button class="btn btn-primary" id="smsdetectBtn">
                      Detect SMS
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section class="section hero" aria-label="hero" id="url">
            <div class="container">
              <div class="hero-content">
                <h1 class="h1 hero-title"> Detect your links</h1>

                <textarea
                  id="urlscan"
                  name="urlscan"
                  rows="15"
                  cols="90"
                ></textarea>
                <ul class="btn-list">
                  <li>
                    <button class="btn btn-primary" id="urldetectBtn">
                      Detect URL
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      </main>

      <footer class="footer">
        <div class="section footer-top">
          <div class="container">
            <div class="footer-brand">
              <a href="#" class="logo">
                PhishGuard
              </a>

              <p class="section-text">
                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla
                utimp erdiet commodo diam libero vitae nibh et jus cursus id
                rutrum lore imperdiet ut sem vitae risus tristique posuere
              </p>

              <ul class="social-list">
                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-google"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>

            <ul class="footer-list">
              <li>
                <p class="footer-list-title">Company</p>
              </li>

              <li>
                <a href="#about" class="footer-link">
                  About Us
                </a>
              </li>

              <li>
                <a href="#contact" class="footer-link">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  Core Services
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  Our Team
                </a>
              </li>
            </ul>

            <ul class="footer-list">
              <li>
                <p class="footer-list-title">Useful Links</p>
              </li>

              <li>
                <a href="#" class="footer-link">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  How It Works
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  Terms & Conditions
                </a>
              </li>
            </ul>

            <ul class="footer-list">
              <li>
                <p class="footer-list-title">Get In Touch</p>
              </li>

              <li class="footer-item">
                <ion-icon name="call-outline" aria-hidden="true"></ion-icon>

                <a href="tel:+233(546789345)" class="item-link">
                  +233(546789345)
                </a>
              </li>

              <li class="footer-item">
                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

                <a href="mailto:supportphishguard@gmail.com" class="item-link">
                  supportphishguard@gmail.com
                </a>
              </li>

              <li class="footer-item">
                <ion-icon name="map-outline" aria-hidden="true"></ion-icon>

                <address class="item-link address">
                  PMB ,<br />
                  KNUST,Kumasi, Ashanti Region, Ghana
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="container">
            <p class="copyright">
              &copy; 2024 All Rights Reserved by{" "}
              <a href="#" class="copyright-link">
                PhishGuard
              </a>
              .
            </p>
          </div>
        </div>
      </footer>

      <a
        href="#top"
        class="back-top-btn"
        aria-label="back to top"
        data-back-top-btn
      >
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
      </a>
    </body>
  );
}

export default Home;
