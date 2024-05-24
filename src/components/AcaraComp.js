import React from "react";
import { Container, Row, Col} from 'react-bootstrap';
import '../style/global.css';

const importAll = (r) => r.keys().map(r);
let images = importAll(require.context('../assets/img/acara/', false, /\.(png|jpe?g|svg)$/));

const AcaraComp = () => {
    const acara = [
        "MPLS 2023",
        "Kolaborasi Budaya",
        "Hari Pahlawan"
    ]
    return (
        <div className="min-vh-100 w-body d-flex align-items-center justify-content-center">
            <Container>
                <Row>
                    {images.map((image, index) => (
                        <Col key={index} md={4} className="text-center mt-5 d-flex justify-content-center">
                            <div className="acara-img-container" data-aos="fade-up" data-aos-delay={index * 150}>
                                <img
                                    src={image}
                                    alt={acara[index]}
                                    className="img-fluid acara-img py-3"
                                />
                                <div className="overlay">
                                    <div className="text text-warning">
                                        <h3>{acara[index]}</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default AcaraComp;
