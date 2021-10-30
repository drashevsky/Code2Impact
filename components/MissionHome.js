import React from 'react';
import styles from "./text.module.css";
import { Container, Row, Col, Button } from "shards-react";

export default class MissionHome extends React.Component {
    render() {
        return (
            <>
                <div className="mission">
                    <h1 className={styles.sectionTitle}>Code 2 Impact</h1>
                    <h4 className={styles.sectionSubtitle}>
                        Code2Impact is raising money for the BLM movement through a nonprofit CS initiative. Code2Impact seeks to provide younger generation students new opportunities to pursue industrial and/or recreational applications of CS courses while raising awareness of minority students in STEM backgrounds.
                    </h4>

                    <Container className="p-0 pt-3">
                        <Row className="m-0 p-0">
                            <Col md={6} className="m-0 p-0">
                                <h2 className={`${styles.sectionTitle} ${styles.leftAlign} pt-5`}>Course Access</h2>
                                <h5 className={`${styles.sectionSubtitle} ${styles.leftAlign}`}>
                                    <strong> By donating to our GoFundMe, you will be able to access all 4 courses from our uniquely-crafted CS program, and your donations will go to professional organizations dedicated to supporting people of color in STEM fields and national organizations committed to making a change in the fight against race-based discrimination.</strong>
                                </h5>
                            </Col>
                            <Col md={6} className="m-0 p-0 pt-5" style={{ display: "grid", placeItems: "center" }}>
                                <Container className="m-0 p-0">
                                    <Row style={{ padding: 20 }}>
                                        <Col>
                                            <Button href="https://www.gofundme.com/f/fighting-discrimination-with-code">Donate to unlock courses</Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button href="/calendar">View course calendar</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <style jsx>{`
                    .mission{
                        min-height: 60vh;
                        text-align: center;
                        padding: 5% 5% 0% 5%;
                    }  
                `}</style>
            </>
        );
    }
}