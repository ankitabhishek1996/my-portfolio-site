import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { DownloadButton } from "./Download";

export const Footer = () => {
  let resumeLink = "#";
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} className="text-center">
            
            <div className="resume-button-container">
              <DownloadButton resumeLink={resumeLink} />
            </div>
          </Col>

          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
