import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Graphics_Design from "../../images/Graphics_Design.jpg";
import CCNA_Certificate from "../../images/CCNA_Certificate.jpg";
import cbta from "../../images/CBT&A.pdf";
import c from "../../images/c.jpg";
import skill from "../../images/skill.png";
import problem_solving from "../../images/problem_solving.png";
import python from "../../images/python.png";
import iq from "../../images/IQ_Test.jpg";
import computer from "../../images/Computer_knowledge.jpg";
import Fade from "react-reveal/Fade";
import { Bounce } from "react-reveal";
import Particle from "../../Particle";

export default function Certificate() {
  return (
    <div className="mt-5">
      <section className="home-section">
            <Container fluid id="home" >
                <Particle />
                <Container className="home-content d-flex justify-content-center align-items-center comingsoonclass">

                <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_zkzzfkke.json"  background="transparent"  speed="1"  style={{width: '40%', height: '100%'}}  loop  autoplay></lottie-player>
                </Container>
            </Container>
        </section>
      {/* <Container>
        <Bounce left cascade>
        <Fade left cascade duration={1000} distance="20px">
          <Row className="g-5">
            <Col md={4}>
              <img
                src={python}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={problem_solving}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={cbta}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={Graphics_Design}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={CCNA_Certificate}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img src={c} alt="" style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col md={4}>
              <img
                src={skill}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img src={iq} alt="" style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col md={4}>
              <img
                src={computer}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
          </Row>
        </Fade>
          </Bounce>
      </Container> */}
    </div>
  );
}
