import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import headerImg1 from "../assets/img/header.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import myGif from "../assets/video/me.gif"

export const Banner = () => {
  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Mobilogragher</span>
                <span className="tagline">Videographer</span>
                  <p>Всем, HI! Я эксперт в области мобилографии, занимаюсь созданием и обработкой фотографий и видео на мобильном устройстве. Моя работа включает в себя создание стильных и трендовых видео, использование различных приложений и инструментов для обработки видео, а также консультации по мобильной съемке и настройке камеры на смартфоне. Я готов помочь вам воплотить в Жизнь ваши творческие идеи и достичь наилучших результатов при создании видеоконтента на мобильном устройстве.</p>
                  <a href="#connect">Go Поговорим <ArrowRightCircle size={25} /></a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  {/* <img src={headerImg} alt="Header Img"/> */}
                  <img src={myGif} alt="Header Img" className="img_me"/>
                  {/* <img src={headerImg1} alt="Header Img"/> */}
                  <video src=""/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
