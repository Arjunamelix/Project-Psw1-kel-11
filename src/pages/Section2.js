import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Section2 = () => {
    return (
        <section
            style={{
                padding: "80px 0",
                backgroundColor: "#f7f7f7",
                textAlign: "center",
                height: "100vh",
            }}
        >
            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "30px" }}>
                            Pengenalan Website Pembelajaran Fisika Kelas 11
                        </h2>
                        <p style={{ fontSize: "1.2rem", marginBottom: "30px", color: "#555" }}>
                            Website ini dibuat untuk membantu pelajar dalam mempelajari materi fisika dengan cara yang lebih menyenangkan dan interaktif. Kami menyediakan berbagai fitur dan materi yang mudah dipahami oleh siswa kelas 11.
                        </p>

                        <Row>
                            <Col md={6} className="mb-4">
                                <Card className="shadow-lg" style={{ borderRadius: "15px" }}>
                                    <Card.Body>
                                        <h4 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "20px" }}>
                                            Apa yang Kami Tawarkan?
                                        </h4>
                                        <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: "1.6" }}>
                                            Kami menawarkan materi-materi lengkap untuk fisika kelas 11, mulai dari teori dasar hingga soal latihan yang bisa langsung dikerjakan. Semua materi disajikan dengan cara yang mudah dipahami dan interaktif.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6} className="mb-4">
                                <Card className="shadow-lg" style={{ borderRadius: "15px" }}>
                                    <Card.Body>
                                        <h4 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "20px" }}>
                                            Kenapa Memilih Website Ini?
                                        </h4>
                                        <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: "1.6" }}>
                                            Website ini memberikan pengalaman belajar yang menyenangkan, mudah diakses, dan dilengkapi dengan berbagai fitur yang membantu memahami materi fisika secara lebih praktis dan aplikatif.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Button
                            variant="primary"
                            size="lg"
                            style={{
                                padding: "12px 30px",
                                fontSize: "1.2rem",
                                borderRadius: "30px",
                                marginTop: "30px",
                            }}
                        >
                            Mulai Belajar Sekarang
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Section2;
