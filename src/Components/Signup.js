import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <section className="userforms">
        <header>
          <h3 className="form-head">Signup</h3>
        </header>

       

        <form>
          <div className="input-container">
            <div className="input-group multi">
              <select className="pre-input" placeholder="title">
                <option>Title</option>
                <option>Mr.</option>
              </select>
              <input type="text" placeholder="First Name *" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Last Name *" />
            </div>
            <div className="input-group multi">
              <select className="pre-input" placeholder="title">
                <option></option>
                <option>Mr.</option>
              </select>
              <input type="text" placeholder="Mobile Number *" />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email ID *" />
            </div>

            <div className="input-group">
              <input type="password" placeholder="Password *" />
            </div>

            <div className="check-item">
              <input type="checkbox" />
              <p>Receive our newsletters and special offers.</p>
            </div>
            <div className="check-item">
              <input type="checkbox" />
              <p>Get updates on WhatsApp</p>
            </div>
            <div className="check-item">
              <input type="checkbox" />
              <p>I agree to the Terms & Conditions * and Privacy Policy.</p>
            </div>
          </div>
          <button className="submit-btn">REGISTER</button>
        </form>
      </section>
    </div>
  );
};

export default Signup;
