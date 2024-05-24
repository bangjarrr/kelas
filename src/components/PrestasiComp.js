import React, { useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../style/global.css';

const images = []

const PrestasiComp = () => {
    const [showAll, setShowAll] = useState(false);
    const imagesToShow = showAll ? images : images.slice(0, 3);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="d-flex-align-items-center min-vh-100 w-body pb-5" id="prestasi">
            <Container className="py-5">
                <Row>
                    <Col>
                        <h1 className="text-center text-warning my-5">Rekap Prestasi</h1>
                        <div className="border-bottom"></div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    {imagesToShow.map((image, index) => (
                        <Col key={index} md={4}>
                            <div dangerouslySetInnerHTML={{ __html: image }} />
                        </Col>
                    ))}
                </Row>
                {showAll ? (
                    <Row className="justify-content-center mt-3">
                        <Col md={6} className="text-center">
                            <Button variant="outline-warning" onClick={toggleShowAll}>Tutup</Button>{' '}
                        </Col>
                    </Row>
                ) : (
                    <Row className="justify-content-center mt-3">
                        <Col md={6} className="text-center">
                            <Button variant="outline-warning" onClick={toggleShowAll}>Lihat Selengkapnya</Button>{' '}
                        </Col>
                    </Row>
                )}
            </Container>
        </div>
    );
};

export default PrestasiComp;
