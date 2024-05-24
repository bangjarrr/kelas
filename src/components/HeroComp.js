import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AOS from "aos";
import '../../node_modules/aos/dist/aos.css';
import '../style/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroComp = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="hero-png" id="home">
            <div className="hero min-vh-100 d-flex justify-content-center align-items-center">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <h1 className="display-3 text-white text-bold mb-4" data-aos="fade-left">
                                <u>Hi Visitors !</u></h1>
                            <h2 className="text-bold fw-bold fs-2 mb-4 text-warning" data-aos="fade-right">
                                Welcome to <br />
                                TKJ 2
                            </h2>
                            <Button
                                variant="warning"
                                size="lg"
                                className="me-2 my-5"
                                onClick={() => scrollToSection('gallery')}
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                Let's Explore
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default HeroComp;
