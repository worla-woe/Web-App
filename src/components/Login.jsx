import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import images1 from "../assets/images1.png";
import images2 from "../assets/images2.png";
import images3 from "../assets/images3.png";
import phishguardlogo from "../assets/phishguardlogo.png";

function Login() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [activeBullet, setActiveBullet] = useState(0);
  const inputsRef = useRef([]);
  const imagesRef = useRef([]);

  const handleFocus = (index) => {
    inputsRef.current[index].classList.add('active');
  };

  const handleBlur = (index) => {
    if (inputsRef.current[index].value === "") {
      inputsRef.current[index].classList.remove('active');
    }
  };

  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const moveSlider = (index) => {
    setActiveBullet(index);
  };

  const togglePasswordVisibility = (index) => {
    const passwordInput = inputsRef.current[index];
    if (passwordInput) {
      passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    }
  };

  useEffect(() => {
    const textSlider = document.querySelector(".text-group");
    textSlider.style.transform = `translateY(${-(activeBullet) * 2.2}rem)`;

    imagesRef.current.forEach((img, index) => {
      img.classList.toggle("show", index === activeBullet);
    });
  }, [activeBullet]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login or signup logic here
  };

  return (
    <div>
      <main className={isSignUpMode ? 'sign-up-mode' : ''}>
        <div className="box">
          <div className="inner-box">
            <div className="forms-wrap">
              <form onSubmit={handleSubmit} autoComplete="off" className="sign-in-form" id="sign-in-form">
                <div className="logo">
                  <img src={phishguardlogo} loading="lazy" alt="PhishGuard" />
                  <h4>PhishGuard</h4>
                </div>

                <div className="heading">
                  <h2>Welcome Back</h2>
                  <h6>Not registered yet?</h6>
                  <a href="#" className="toggle" onClick={toggleMode}>
                    Sign up
                  </a>
                </div>

                <div className="actual-form">
                  <div className="input-wrap">
                    <input
                      type="email"
                      id="signInEmail"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                      required
                      ref={(el) => (inputsRef.current[0] = el)}
                      onFocus={() => handleFocus(0)}
                      onBlur={() => handleBlur(0)}
                    />
                    <label htmlFor="signInEmail">Email</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="password"
                      id="signInPassword"
                      minLength="8"
                      className="input-field"
                      autoComplete="off"
                      required
                      ref={(el) => (inputsRef.current[1] = el)}
                      onFocus={() => handleFocus(1)}
                      onBlur={() => handleBlur(1)}
                    />
                    <label htmlFor="signInPassword">Password</label>
                    <span className="visibility-toggle" onClick={() => togglePasswordVisibility(1)}>
                      <Icon icon="ph:eye" />
                    </span>
                  </div>

                  <input type="submit" value="Sign In" className="signin-btn" />

                  <p className="text">
                    Forgotten Your Password or Your Login Details?
                    <a href="#">Get help</a> signing in
                  </p>
                </div>
              </form>

              <form onSubmit={handleSubmit} autoComplete="off" className="sign-up-form" id="sign-up-form">
                <div className="logo">
                  <img src={phishguardlogo} loading="lazy" alt="PhishGuard" />
                  <h4>PhishGuard</h4>
                </div>

                <div className="heading">
                  <h2>Get Started</h2>
                  <h6>Already have an account?</h6>
                  <a href="#" className="toggle" onClick={toggleMode}>
                    Sign in
                  </a>
                </div>

                <div className="actual-form">
                  <div className="input-wrap">
                    <input
                      type="text"
                      minLength="4"
                      className="input-field"
                      id="username"
                      autoComplete="off"
                      required
                      ref={(el) => (inputsRef.current[2] = el)}
                      onFocus={() => handleFocus(2)}
                      onBlur={() => handleBlur(2)}
                    />
                    <label>UserName</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="email"
                      id="signUpEmail"
                      className="input-field"
                      autoComplete="off"
                      required
                      ref={(el) => (inputsRef.current[3] = el)}
                      onFocus={() => handleFocus(3)}
                      onBlur={() => handleBlur(3)}
                    />
                    <label htmlFor="signUpEmail">Email</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="password"
                      id="signUpPassword"
                      minLength="8"
                      className="input-field"
                      autoComplete="off"
                      required
                      ref={(el) => (inputsRef.current[4] = el)}
                      onFocus={() => handleFocus(4)}
                      onBlur={() => handleBlur(4)}
                    />
                    <label htmlFor="signUpPassword">Password</label>
                    <span className="visibility-toggle" onClick={() => togglePasswordVisibility(4)}>
                      <Icon icon="ph:eye" />
                    </span>
                  </div>

                  <input type="submit" value="Sign Up" className="signup-btn" />

                  <p className="text">
                    By signing up, I agree to the
                    <a href="#">Terms of Services</a> and
                    <a href="#">Privacy Policy</a>
                  </p>
                </div>
              </form>
            </div>

            <div className="carousel">
              <div className="images-wrapper">
                <img src={images1} loading="lazy" alt="Image 1" ref={(el) => (imagesRef.current[0] = el)} />
                <img src={images2} loading="lazy" alt="Image 2" ref={(el) => (imagesRef.current[1] = el)} />
                <img src={images3} loading="lazy" alt="Image 3" ref={(el) => (imagesRef.current[2] = el)} />
              </div>

              <div className="text-slider">
                <div className="text-wrap">
                  <div className="text-group">
                    <h2>Detect your own messages</h2>
                    <h2>Defend against Phishing Attackers</h2>
                    <h2>Scan your links</h2>
                  </div>
                </div>

                <div className="bullets">
                  {[0, 1, 2].map((_, index) => (
                    <span
                      key={index}
                      className={activeBullet === index ? 'active' : ''}
                      onClick={() => moveSlider(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
