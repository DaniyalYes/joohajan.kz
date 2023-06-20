import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/tele.svg";
import navIcon2 from "../assets/img/what.svg";
import navIcon3 from "../assets/img/insta.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <br />
          <Col className="foot_joohajan" size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            <h2 className="joohajan" href="#">joohajan</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <br />
              <a href="https://t.me/joohajan" target="blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://api.whatsapp.com/send?phone=77057192904" target="blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/joohajan/" target="blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <br />
            <p>&#169; DaniyalYessimgaliyev. All rigths reserved</p> <br />
              <a href="https://incomparable-moonbeam-e55170.netlify.app/" target='_blank'>DaniyalYessimgaliev</a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}