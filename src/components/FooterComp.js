import React, {useEffect} from "react";
import { Container, Row, Col} from "react-bootstrap";
import feather from 'feather-icons';

const FaqComp = () => {
    useEffect(() => {
        feather.replace()
    }, []);

    return (
        <footer className="bg-dark text-white">
            <Container>
                <Row className="justify-content-evenly pt-5">
                    <Col md={2}>
                        <h5>About Us</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#home" className="text-warning text-decoration-none">Home</a>
                            </li>
                            <li>
                                <a href="#gallery" className="text-warning text-decoration-none" >Gallery</a>
                            </li>
                            <li>
                                <a href="#prestasi" className="text-warning text-decoration-none">Prestasi</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h5>Follow us</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://l.instagram.com/?u=https%3A%2F%2Fwww.tiktok.com%2F%40xitkjskanesa%3F_t%3D8feOCM2nkcz%26_r%3D1&e=AT04ejT3zAFN7RRxA7R9WcHzVX71FqvHTC5cq9zv0zBtuF73izWAe93t_GrmAihsY03OQRQ8hCTe4HoYWIV_qF9s_dOvwiTFeITmY9frqCs8rjJxaAREcg" className="text-white-50 text-decoration-none">
                                    TikTok
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/xitkj2skanesa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-white-50 text-decoration-none">
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h5>Developed by</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://alfajjar.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white-50 text-decoration-none">
                                    Alfajjar Syachputra
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className="text-center">
                        <p className="text-white-50">&copy; 2024 TKJ 2. Dikelola oleh TKJ 2 SMKN 1 Mojokerto</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default FaqComp;
