import React from 'react';
import "../Components/login  signup page/style.css"
function AuthContainer() {
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" className="sign-in-form">
            <h2 className="title">Sign in</h2>

            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="username" />
            </div>

            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="password" />
            </div>

            <input type="submit" value="login" className="btn solid" />

            <p className="social-text">or Sign in with social platforms</p>

            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </form>

          <form action="" className="sign-up-form">
            <h2 className="title">Sign up</h2>

            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="username" />
            </div>

            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="text" placeholder="Email" />
            </div>

            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="password" />
            </div>

            <input type="submit" value="login" className="btn solid" />

            <p className="social-text">or Sign up with social platforms</p>

            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>Join us for FREE to get the instant appointment with doctors in your city</p>

            <button className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>

          <img src="images/undraw_medicine_b-1-ol.svg" className="image" alt="image not loaded" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>Already have an account ? sign in to your previous account</p>

            <button className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>

          <img src="images/undraw_doctors_p6aq.svg" className="image" alt="image not loaded" />
        </div>
      </div>
    </div>
  );
}

export default AuthContainer;
