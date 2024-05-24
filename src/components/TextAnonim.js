import React, { useState } from 'react';
import '../style/global.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function TextAnonim() {
    const [message, setMessage] = useState('');
    const [submittedMessage, setSubmittedMessage] = useState(() => {
        return localStorage.getItem('submittedMessage') || '';
    });

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedMessage(message);
        setMessage('');
        localStorage.setItem('submittedMessage', message);
    };

    return (
        <div className='w-body d-flex justify-content-center align-items-center min-vh-100' id='send-message'>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center text-warning fs-1 fw-bold">Kirim pesan kepada pengunjung.</h1>
                        <div className="border-bottom mb-4"></div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit}>
                            <div className="d-flex justify-content-center align-items-center">
                                <Form.Group controlId="formMessage" className='w-50'>
                                    <Form.Control
                                        as="textarea"
                                        rows={6}
                                        value={message}
                                        onChange={handleMessageChange}
                                        placeholder="Ketik pesan Anda di sini..."
                                        className='textarea'
                                    />
                                </Form.Group>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <Button variant="outline-warning" type="submit" className="mt-5 px-5 py-3">
                                    Kirim Pesan Anda
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="d-flex justify-content-center align-items-center py-3">
                            <h1 id='text'className='text-warning'>{submittedMessage}</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TextAnonim;
