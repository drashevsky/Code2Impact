import React from 'react';
import styles from "./text.module.css";
import { Button, Card, CardBody, CardTitle, Col, Row } from "shards-react";

export default class WhyusHome extends React.Component {
    render() {
        return (
            <>
                <div className="whyus">
                    <div className="whyussection">
                        <h1 className={`${styles.sectionTitle} ${styles.rightAlign}`}>Course Diversity</h1>
                        <h4 className={`${styles.sectionSubtitle} ${styles.rightAlign} ${styles.padLeft}`}>
                            We offer four specialized courses that explore computer science concepts in depth, each packed with up to 16 hours of instructional content and project takeaways.
                        </h4>
                        <div className="container mt-5 p-2 centered-cards">
                            <Row>
                                <Col md={3}>
                                    <Card style={{ maxWidth: "300px", background: "rgba(0,0,0,0)" }} className="m-0 p-0">
                                        <CardBody className="m-0 p-4">
                                            <CardTitle className={styles.sectionTitle}>Intro to Java</CardTitle>
                                            <p className={styles.sectionSubtitle}>This course will familiarize students with the content of a regular APCSA curriculum with no prior Java experience required. Students will learn about the basics of Java syntax and typical content of an APCSA class including variables, Objects, and basic data structures like arrays while working on numerous, fun coding projects along the way.</p>
                                            <Button href="/classes#introtojava">View course &rarr;</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card style={{ maxWidth: "300px", background: "rgba(0,0,0,0)" }} className="m-0 p-0">
                                        <CardBody className="m-0 p-4">
                                            <CardTitle className={styles.sectionTitle}>Advanced Data Structures</CardTitle>
                                            <p className={styles.sectionSubtitle}>Advanced Data Structures (ADSs) will familiarize students with beyond HS level CS concepts to supplement their knowledge from APCSA. Students will be introduced to ADSs like Hash Tables, learn about their properties and implementation, and solve real world problems using these data structures.</p>
                                            <Button href="/classes#datastructures">View course &rarr;</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card style={{ maxWidth: "300px", background: "rgba(0,0,0,0)" }} className="m-0 p-0">
                                        <CardBody className="m-0 p-4">
                                            <CardTitle className={styles.sectionTitle}>Data Science</CardTitle>
                                            <p className={styles.sectionSubtitle}>In this course, students will be taught the process of creating a data science notebook using Jupyter. Students will gain a level of familiarity with numerous python libraries including nympty, pandas, matplotlib, and more to learn how to manipulate, analyze, and visualize real life data from datasets in order to answer a single research question.</p>
                                            <Button href="/classes#datascience">View course &rarr;</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card style={{ maxWidth: "300px", background: "rgba(0,0,0,0)" }} className="m-0 p-0">
                                        <CardBody className="m-0 p-4">
                                            <CardTitle className={styles.sectionTitle}>Game Development</CardTitle>
                                            <p className={styles.sectionSubtitle}>Through Unity, students will learn the main features involved in game development to empower them to create their own 2D game. This course will cover C# syntax and methods from scratch before diving into coding player movement, animation, UI, and more to create a customizable platformer game!</p>
                                            <Button href="/classes#gamedevelopment">View course &rarr;</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            {/* <div className="mt-5 centered">
                                <Button href="/calendar">View calendar</Button>
                            </div> */}
                        </div>
                    </div>
                    <div className="whyussection">
                        <h1 className={`${styles.sectionTitle} ${styles.leftAlign}`}>Cause-centric</h1>
                        <h4 className={`${styles.sectionSubtitle} ${styles.leftAlign} ${styles.padRight}`}>
                            100% of donations will go toward BLM and organizations supporting minority students in STEM such as NAACP, Color of Change, and National Society of Black Engineers.
                        </h4>
                    </div>
                    <div className="whyussection">
                        <h1 className={`${styles.sectionTitle} ${styles.rightAlign}`}>Interactive</h1>
                        <h4 className={`${styles.sectionSubtitle} ${styles.rightAlign} ${styles.padLeft}`}>
                            Teachers will teach content through live sessions where students can ask questions at frequent intervals; sessions will also be recorded for all students to view on their own time.
                        </h4>
                    </div>
                    <div className="whyussection">
                        <h1 className={`${styles.sectionTitle} ${styles.leftAlign}`}>Mentorship Program</h1>
                        <h4 className={`${styles.sectionSubtitle} ${styles.leftAlign} ${styles.padRight}`}>
                            Through Discord, students will be able to interact with mentors and other students to ask clarifying questions, seek guidance, and work with other students on customizable projects.
                        </h4>
                    </div>
                </div>
                <style jsx>{`
                    .whyus {
                        min-height: 80vh;
                        padding: 0% 10% 0% 10%;
                    }    
                    .whyussection {
                        min-height: 40vh;
                        margin: 10% 0% 10% 0%;
                    }
                    .centered {
                        text-align:center;
                    }
                    .centered-cards {
                        margin-left: auto;
                        margin-right: auto;
                    }
                `}</style>
            </>
        );
    }
}