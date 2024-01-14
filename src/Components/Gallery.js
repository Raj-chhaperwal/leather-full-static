import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import pic1 from '../assets/img/a.png';

const Gallery = () => {
  return (
    <div id="gallery">
      <Container fluid className="container-gallery mb-5 mt-5">
        <Row className="justify-content-center align-items-center mt-0 mb-5">
          <Col xs={12} md={6} className="text-center mt-2 mt-md-4 ms-3">
            <h1 className="display-4 app__header-h1">Leather Journal</h1>
            <p className="lead text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque adipisci aspernatur expedita aliquam officiis neque exercitationem distinctio soluta, ipsa, quibusdam quod rem enim aliquid quas sapiente dolorem omnis? Exercitationem?</p>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Learn More</span>
            </button>
          </Col>
          <Col xs={12} md={5} className="text-center mt-5">
          <img src={pic1} alt="Profile" className="img-fluid rounded-circle" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
