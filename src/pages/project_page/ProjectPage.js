import React from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nyc from "../../images/nyc.png";
import ci from "../../images/onboarding.png";
import hd from "../../images/hd.png";
import eco from "../../images/eco.png";
import meal from "../../images/meal.png";
import ac from "../../images/academic.png";
import age from "../../images/age.png";
import calculator from "../../images/calculator.png";
import calendar from "../../images/calendar.png";
import dc from "../../images/dc.png";
import { FaCode } from "react-icons/fa";
export default function ProjectPage() {

  const data = [
    {
      "id": 1,
      "title": "New Year CountDown",
      "image": nyc,
      "alt": "nyc",
      "link": "",
      "description": "The New Year Countdown Project is more than just a celebration; it's a testament to the human spirit and our shared aspirations for a brighter future. So, mark your calendars and get ready to be part of this global extravaganza as we count down to a new year filled with endless possibilities.",
      "languages": "HTML, CSS, JavaScript"
    },
    {
      "id": 2,
      "title": "Heart Disease Prediction",
      "image": hd,
      "alt": "hd",
      "link": "",
      "description": "Use of AI and Machine Learning: Artificial intelligence and machine learning are already being used in healthcare to help predict heart disease. In the future, these technologies could become more advanced, enabling more accurate predictions of heart disease risk.",
      "languages": "Pandas, Matplotlib, Scikit-Learn"
    },
    {
      "id": 3,
      "title": "Online Payroll Management System",
      "image": ci,
      "alt": "ci",
      "link": "",
      "description": "A Payroll management System with feature like generate payslip & reports. It manages salaries, leaves, branches, employees, designations, shifts, holidays and employee attendance. It has chat application so internal employees can use that feature.",
      "languages": "HTML, CSS, JavaScript, PHP, SCSS"
    },
    {
      "id": 4,
      "title": "Shoppy Ecommerce",
      "image": eco,
      "alt": "eco",
      "link": "",
      "description": "Seamless online shopping with a vast catalog, secure transactions, and personalized recommendations. 24/7 customer support, flexible payments, and fast shipping. Explore our website and redefine your shopping experience.",
      "languages": "HTML, CSS, React, JavaScript"
    },
    {
      "id": 5,
      "title": "Online Payroll Management System",
      "image": ci,
      "alt": "ci",
      "link": "",
      "description": "A Payroll management System with feature like generate payslip & reports. It manages salaries, leaves, branches, employees, designations, shifts, holidays and employee attendance. It has chat application so internal employees can use that feature.",
      "languages": "HTML, CSS, JavaScript, PHP, SCSS"
    },
    {
      "id": 6,
      "title": "Amazing Meal",
      "image": meal,
      "alt": "meal",
      "link": "",
      "description": "Indulge in a mouthwatering meal that combines flavors and textures to create a culinary masterpiece. Our carefully crafted dishes are made with the freshest ingredients, expertly prepared to satisfy your taste buds and leave you craving for more.",
      "languages": "HTML, CSS, JavaScript, React"
    },
    {
      "id": 7,
      "title": "Academia Learning Website",
      "image": ac,
      "alt": "ac",
      "link": "",
      "description": "Unlock your potential with our dynamic learning website. Access a wide range of courses, interactive lessons, and expert instructors to enhance your knowledge and skills.",
      "languages": "HTML, CSS, React, JavaScript"
    },
    {
      "id": 8,
      "title": "Age Calculator",
      "image": age,
      "alt": "age",
      "link": "",
      "description": "Create an Age Calculator project using HTML, CSS, and JavaScript. Input your birthdate, and the tool instantly calculates your current age. The sleek design and user-friendly interface make age determination quick and hassle-free. Perfect for websites, apps, or personal use.",
      "languages": "HTML, CSS, JavaScript"
    },
    {
      "id": 9,
      "title": "Student Information Management System",
      "image": ac,
      "alt": "ac",
      "link": "",
      "description": "The Student Information Management System project in C++ is a robust software solution designed to efficiently organize and manage student data. It enables users to store, update, and retrieve student information, including grades, attendance, and personal details, ensuring streamlined academic administration.",
      "languages": "C++"
    }
  ];




  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176" }}>PROJECTS</h1>
            </Zoom>
          </div>
          <div>
            <div>
              <Container fluid className="certificate-section" id="about">
                <Container>
                  <Row>
                    <Col md={12} className="mt-5">
                      <Row className="g-5">
                        {data?.map((project) => (
                          <Col key={project.id} md={3} className="col-sm-12 col-md-4">
                            <Fade bottom>
                              <div
                                className="singleProject"
                                style={{
                                  backgroundColor: "rgb(142 70 186 / 31%)",
                                  border: "1px solid",
                                }}
                              >
                                <div className="projectContent">
                                  <h5 style={{ color: "#fbd9ad" }}>{project.title}</h5>
                                  <img src={project.image} alt={project.alt} />
                                  <div className="project--showcaseBtn">
                                    <a
                                      href="#"
                                      // rel="noreferrer"
                                      className={"iconBtn"}
                                      aria-labelledby={`code-${project.id}`}
                                    >
                                      <FaCode
                                        id={`code-${project.id}`}
                                        className={"icon"}
                                        aria-label="Code"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <h6>
                                  <p
                                    className="project--desc"
                                    style={{
                                      background: "#fbd9ad",
                                      color: "#b061df",
                                      fontWeight: 600,
                                    }}
                                  >
                                    {project.description}
                                  </p>
                                </h6>
                                <div
                                  className="project--lang"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  {project.languages}
                                </div>
                              </div>
                            </Fade>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
}
