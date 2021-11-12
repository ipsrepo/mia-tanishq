import React from "react";
import Button from "./UI/Button";

const Login = () => {
  return (
    <div className="col-6 col-md-6 col-sm-12">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              LOGIN VIA OTP
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <section className="userforms">
                <header>
                  <h3 className="form-head">LOGIN VIA</h3>
                </header>

                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="mobile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#mobile"
                      type="button"
                      role="tab"
                      aria-controls="mobile"
                      aria-selected="true"
                    >
                      Home
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="email-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#email"
                      type="button"
                      role="tab"
                      aria-controls="email"
                      aria-selected="false"
                    >
                      Profile
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="mobile"
                    role="tabpanel"
                    aria-labelledby="mobile-tab"
                  >
                    <form>
                      <div className="input-container">
                      <h4>LOGIN USING MOBILE NUMBER AND OTP</h4>
                        <div className="input-group multi">
                          <select className="pre-input" placeholder="title">
                            <option></option>
                            <option>Mr.</option>
                          </select>
                          <input type="text" placeholder="Mobile Number *" />
                        </div>
                      
                      </div>
                      <Button>Request OTP</Button>
                    </form>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="email"
                    role="tabpanel"
                    aria-labelledby="email-tab"
                  >
                    <form>
                      <div className="input-container">
                      <h4>LOGIN USING E-MAIL ID AND OTP</h4>
                        <div className="input-group">
                          <input type="email" placeholder="Email ID *" />
                        </div>
                      </div>
                      <Button>Request OTP</Button>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
