import React from "react";
import Button from "./UI/Button";
import Accordion from "react-bootstrap/Accordion";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Login = () => {
  return (
    <div className="col-md-6 col-sm-12 login">
      <div className="login-content">
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>LOGIN VIA OTP </Accordion.Header>
            <Accordion.Body>
              <section className="userforms">
                <header>
                  <h3 className="form-head">LOGIN VIA OTP</h3>
                </header>
                <Tabs id="uncontrolled-tab-example" className="mb-3">
                  <Tab eventKey="Mobile" title="Mobile">
                    <form>
                      <div className="input-container">
                        <h4>LOGIN USING MOBILE NUMBER AND OTP</h4>

                        <Container>
                          <Row>
                            <Col xs={12} md={3}>
                              <select className="pre-input" placeholder="title">
                                <option></option>
                                <option>Mr.</option>
                              </select>
                            </Col>
                            <Col xs={12} md={9}>
                              <input
                                type="text"
                                placeholder="Mobile Number *"
                              />
                            </Col>
                          </Row>
                        </Container>
                        {/* <div className="input-group multi">
                        
                        
                      </div> */}
                      </div>
                      <Button>Request OTP</Button>
                    </form>
                  </Tab>
                  <Tab eventKey="E-Mail" title="E-Mail">
                    <form>
                      <div className="input-container">
                        <h4>LOGIN USING E-MAIL ID AND OTP</h4>
                        <Container>
                          <Row>
                            <Col>
                              <input type="email" placeholder="Email ID *" />
                            </Col>
                          </Row>
                        </Container>
                      </div>
                      <Button>Request OTP</Button>
                    </form>
                  </Tab>
                </Tabs>
              </section>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>LOGIN USING PASSWORD </Accordion.Header>
            <Accordion.Body>
              <section className="userforms">
                <header>
                  <h3 className="form-head">LOGIN USING PASSWORD</h3>
                </header>

                <form>
                  <div className="input-container">
                   
                    <Container>
                      <Row>
                        <Col>
                          <input type="email" placeholder="Mobile Number / Email ID" />
                        </Col>
                      
                      </Row>
                      <Row>
                        <Col>
                          <input type="password" placeholder="Password*" />
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <Button>SUBMIT</Button>
                </form>
              </section>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Login;
