import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <b className="purple">Vibe Coder</b> — I turn ideas into
              real products using the power of AI. I don't just write code, I
              <i> vibe with it</i> — prompting, iterating, and shipping fast.
              <br />
              <br />
              My toolkit includes
              <i>
                <b className="purple">
                  {" "}
                  AI tools like Claude, Cursor, ChatGPT, and Gemini{" "}
                </b>
              </i>
              — combined with solid fundamentals in JavaScript, React, and
              Node.js.
              <br />
              <br />
              I specialize in
              <i>
                <b className="purple">
                  {" "}
                  rapid prototyping, AI-assisted development, and
                  prompt-to-product workflows.{" "}
                </b>
              </i>
              <br />
              <br />
              I build with
              <b className="purple"> React.js</b>,{" "}
              <b className="purple">Next.js</b>,{" "}
              <b className="purple">Node.js</b>, and whatever AI tools get the
              job done fastest.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
