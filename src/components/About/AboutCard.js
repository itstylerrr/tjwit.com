import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { GiSoccerKick, GiGolfFlag } from "react-icons/gi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            To those who don't know me, I am{" "}
            <span className="purple">Tyler Witkowski </span>
            from <span className="purple"> Saint Louis, Missouri.</span>
            <br />I am a Senior at Saint Louis Priory school.
            <br />
            <br />
            Apart from school, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports such as: <GiSoccerKick /> <GiGolfFlag />{" "}
              🥍
            </li>
            <li className="about-activity">
              <ImPointRight /> Spending time with friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            <i>The grace of our Lord Jesus Christ be with you all. Amen</i>{" "}
          </p>
          <footer className="blockquote-footer">Revelation 22:21</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
