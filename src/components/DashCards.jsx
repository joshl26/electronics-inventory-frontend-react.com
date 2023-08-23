import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DashCards.css";

const DashCards = () => {
  return (
    <section className="home">
      <div className="home-page-container">
        <div className="Page-title">Home</div>
        <Row>
          <div className="vh5-spacer"></div>
        </Row>
        <Row>
          <Col md={1}></Col>
          <Col md={4}>
            <div className="card">
              <div className="card-color-1"></div>
              <h2 style={{ backgroundColor: "lightGrey", padding: "1rem" }}>
                Jobs
              </h2>
              <div
                style={{ margin: "0 auto", height: "100%", paddingTop: "50px" }}
              >
                <Button
                  style={{
                    width: "200px",
                    backgroundColor: "#7db00e",
                    border: "#7db00e",
                  }}
                  variant="success"
                >
                  <Link
                    to={"/jobs/new"}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Schedule a Job
                  </Link>
                </Button>
              </div>
            </div>
          </Col>
          <Col md={1}></Col>
          <Col md={4}>
            <div className="card">
              <div className="card-color-2"></div>
              <h2 style={{ backgroundColor: "lightGrey", padding: "1rem" }}>
                Schedule
              </h2>
              <div
                style={{ margin: "0 auto", height: "100%", paddingTop: "50px" }}
              >
                <Button
                  style={{
                    width: "200px",
                    backgroundColor: "#7db00e",
                    border: "#7db00e",
                  }}
                  variant="success"
                >
                  <Link
                    to={"/schedule"}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    View Schedule
                  </Link>
                </Button>
              </div>
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>

        <Row>
          <div className="vh5-spacer"></div>
        </Row>

        <Row>
          <Col md={1}></Col>
          <Col md={4}>
            <div className="card">
              <div className="card-color-3"></div>
              <h2 style={{ backgroundColor: "lightGrey", padding: "1rem" }}>
                Clients
              </h2>
              <div
                style={{ margin: "0 auto", height: "100%", paddingTop: "50px" }}
              >
                <Button
                  style={{
                    width: "200px",
                    backgroundColor: "#7db00e",
                    border: "#7db00e",
                  }}
                  variant="success"
                >
                  <Link
                    to={"/clients/new"}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Create Client
                  </Link>
                </Button>
              </div>
            </div>
          </Col>
          <Col md={1}></Col>
          <Col md={4}>
            <div className="card">
              <div className="card-color-4"></div>
              <h2 style={{ backgroundColor: "lightGrey", padding: "1rem" }}>
                Settings
              </h2>

              <div
                style={{ margin: "0 auto", height: "100%", paddingTop: "50px" }}
              >
                <Button
                  style={{
                    width: "200px",
                    backgroundColor: "#7db00e",
                    border: "#7db00e",
                  }}
                  variant="success"
                >
                  <Link
                    to={"/settings"}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    View Settings
                  </Link>
                </Button>
              </div>
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
        <Row>
          <div className="vh5-spacer"></div>
        </Row>

        <Row>
          <Col md={1}></Col>
          <Col md={9}>
            <div className="card" style={{ width: "59vw" }}>
              <h2
                style={{
                  backgroundColor: "lightGrey",
                  padding: "1rem",
                }}
              >
                Today's Appointments
              </h2>
              <Row style={{ padding: "1em" }}>
                <Col>
                  <div className="small-card-1">
                    <h2>1</h2>
                  </div>
                </Col>
                <Col>
                  <Row>Total</Row>
                  <Row>$0.00</Row>
                </Col>
                <Col>
                  <div className="small-card-2">
                    <h2>0</h2>
                  </div>
                </Col>
                <Col>
                  <Row>To Go</Row>
                  <Row>$0.00</Row>
                </Col>
                <Col>
                  <div className="small-card-3">
                    <h2>1</h2>
                  </div>
                </Col>
                <Col>
                  <Row>Active</Row>
                  <Row>$0.00</Row>
                </Col>
                <Col>
                  <div className="small-card-4">
                    <h2>0</h2>
                  </div>
                </Col>
                <Col>
                  <Row>Complete</Row>
                  <Row>$0.00</Row>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>
    </section>
  );
};

export default DashCards;
