import Head from 'next/head';
import React from'react';
import NavBar from "../components/navbar";
import styles from "../components/text.module.css";
import {
    Card,
    CardTitle,
    CardBody,
    Button,
    Row,
    Col
} from "shards-react";

export default function Home() {
  return (
    <div className="everything m-0 p-0">
      <Head>
        <title>Code 2 Impact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <div className="mission">
          <h1 className={styles.sectionTitle}>Code 2 Impact</h1>
          <h4 className={styles.sectionSubtitle}>
              Code2Impact is raising money for the BLM movement through a nonprofit
              CS initiative in which they provide younger generation students opportunities to pursue
              industrial and/or recreational applications of CS courses with a personalized mentorship
              program.
          </h4>
      </div>
      <div className="whyus">
          <div className="whyussection">
              <h1 className={`${styles.sectionTitle} ${styles.leftAlign}`}>BLM Cause-centric</h1>
              <h4 className={`${styles.sectionSubtitle} ${styles.rightAlign}`}>
                  100% of the donations Code2Impact is going to BLM organizations including Color of Change, NAACP, and the Black Lives Movement itself.
              </h4>
          </div>
          <div className="whyussection">
              <h1 className={`${styles.sectionTitle} ${styles.rightAlign}`}>Diversity of courses</h1>
              <h4 className={`${styles.sectionSubtitle} ${styles.leftAlign}`}>
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
              <h4 className={`${styles.sectionSubtitle} ${styles.rightAlign}`}>
                  Through our mentorship program, students will be able create their own tangible project for two of our courses - a Jupyter research notebook for data science and a Unity game for game development. Students will be able to communicate with mentors through emails and google forms throughout the course for guidance on their independent projects.
              </h4>
          </div>
          <div className="whyussection">
              <h1 className={`${styles.sectionTitle} ${styles.rightAlign}`}>Interactive</h1>
              <h4 className={`${styles.sectionSubtitle} ${styles.leftAlign}`}>
                  All courses come with live sessions where students can engage with other students and ask questions; however, sessions are also recorded if students can’t attend live.
              </h4>
          </div>
      </div>

      <style jsx>{`
        .everything {
            background-color: #01245c;
            background: linear-gradient(to bottom, #01245c 30%, #000000 100%);
            background-position: fixed;
            height: auto;
            width: auto;
        }
        .mission{
            min-height: 90vh;;
            text-align: center;
            padding: 10%;
        }
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

        @media (max-width: 600px) {
          
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      `}</style>
    </div>
  )
}
