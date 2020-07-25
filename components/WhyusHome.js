import React from 'react';
import styles from "../styles/text.module.css";
import {Button, Card, CardBody, CardTitle, Col, Row} from "shards-react";

export default class WhyusHome extends React.Component {
    render() {
        return (
            <>
                <div className="whyus">
                    <div className="whyussection">
                        <h1 className={`${styles.sectionTitle} ${styles.leftAlign}`}>BLM Cause-centric</h1>
                        <h4 className={`${styles.sectionSubtitle} ${styles.leftAlign} ${styles.padRight}`}>
                            100% of the donations Code2Impact is going to BLM organizations including Color of Change, NAACP, and the Black Lives Movement itself.
                        </h4>
                    </div>
                    <div className="whyussection">
                        <h1 className={`${styles.sectionTitle} ${styles.rightAlign}`}>Diversity of courses</h1>
                        <h4 className={`${styles.sectionSubtitle} ${styles.rightAlign} ${styles.padLeft}`}>
                            We offer a variety of specialized courses that explore computer science concepts in depth.
                        </h4>
                        <div className="container m-0 p-2">
                            <Row>
                                <Col md={3}>
                                    <Card style={{ maxWidth: "300px", background: "rgba(0,0,0,0)" }} className="m-0 p-0">
                                        <CardBody className="m-0 p-4">
                                            <CardTitle className={styles.sectionTitle}>APCSA</CardTitle>
                                            <p className={styles.sectionSubtitle}>This course will familiarize students with a regular APCSA curriculum. Students will learn about the basics of Java syntax as well as loops, methods, and basic data structures including arrays and ArrayLists. </p>
                                            <Button>View course &rarr;</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card style={{ maxWidth: "300px", background: "rgba(0,0,0,0)" }} className="m-0 p-0">
                                        <CardBody className="m-0 p-4">
                                            <CardTitle className={styles.sectionTitle}>Data Structures</CardTitle>
                                            <p className={styles.sectionSubtitle}>This course will familiarize students with numerous advanced data structures to supplement their knowledge from APCSA. Students will learn about numerous new data structures like Hash Maps and Linked Lists, learn about their properties and implementation, and solve real world problems using these data structures.</p>
                                            <Button>View course &rarr;</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card style={{ maxWidth: "300px", background: "rgba(0,0,0,0)" }} className="m-0 p-0">
                                        <CardBody className="m-0 p-4">
                                            <CardTitle className={styles.sectionTitle}>Data Science</CardTitle>
                                            <p className={styles.sectionSubtitle}>This course will make students familiar with the process of creating a data science notebook using Jupyter from scratch. Students will gain a level of familiarity with numerous python libraries including nympty, pandas, and matplotlib and learn how to manipulate, analyze, and visualize real life data from free datasets to answer their own research question.</p>
                                            <Button>View course &rarr;</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card style={{ maxWidth: "300px", background: "rgba(0,0,0,0)" }} className="m-0 p-0">
                                        <CardBody className="m-0 p-4">
                                            <CardTitle className={styles.sectionTitle}>Game Development</CardTitle>
                                            <p className={styles.sectionSubtitle}>This course will familiarize students with the main features involved in game development and learn how to construct their own 2D and 3D games using a popular, cross-platform game engine. This course will cover C# syntax and methods from scratch before diving into coding player movement, animation, user interface, and more – all of which will be implemented in the creation of a single game.</p>
                                            <Button>View course &rarr;</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <div className="centered">
                                <Button>View calendar</Button>
                            </div>
                        </div>
                    </div>
                    <div className="whyussection">
                        <h1 className={`${styles.sectionTitle} ${styles.leftAlign}`}>Mentorship Program</h1>
                        <h4 className={`${styles.sectionSubtitle} ${styles.leftAlign} ${styles.padRight}`}>
                            Through our mentorship program, students will be able create their own tangible project for two of our courses - a Jupyter research notebook for data science and a Unity game for game development. Students will be able to communicate with mentors through emails and google forms throughout the course for guidance on their independent projects.
                        </h4>
                    </div>
                    <div className="whyussection">
                        <h1 className={`${styles.sectionTitle} ${styles.rightAlign}`}>Interactive</h1>
                        <h4 className={`${styles.sectionSubtitle} ${styles.rightAlign} ${styles.padLeft}`}>
                            All courses come with live sessions where students can engage with other students and ask questions; however, sessions are also recorded if students can’t attend live.
                        </h4>
                    </div>
                </div>
                <style jsx>{`
                    .whyus{
                        min-height: 80vh;
                        padding: 10%;
                    }    
                    .whyussection{
                        min-height: 50vh;
                        margin: 10% 0% 10% 0%;
                    }
                    .centered{
                        text-align:center;
                    }
                `}</style>
            </>
        );
    }
}