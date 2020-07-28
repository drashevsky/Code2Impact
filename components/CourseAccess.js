import {Container, Col, Row} from "shards-react";
import castyles from './courseaccess.module.css';

export default function CourseAccess() {
    return(
        <>
            <Container className="mt-4" fluid>
                <Row className={castyles.row}>
                    <Col className={castyles.border}>
                        <h4 className={castyles.sectionTitle}>Course Format</h4>
                        <h5 className={`${castyles.textHeading} mt-3 mb-3`}>Live Video Sessions</h5>
                        <p className={castyles.text}> 
                            Every course lesson will be delivered as a 2 hour live video lecture. There will be breaks for questions between each "topic" covered in the video or at specific intervals, depending on the course. A moderator will be available to answer questions in a live chat during the lecture. Each session may include lecture, visualization, and application components.
                        </p>
                        <h5 className={`${castyles.textHeading} mt-5 mb-3`}>Published Videos</h5>
                        <p className={castyles.text}>
                            As an extension for our live video lectures, we will be publish our live lectures as 1) a series of shortened 10-20 minute videos to our course website with a built-in question session functionality and 2) an uncut, recorded version of the live lecture. Students will gain access to the shortened video series a day after the live session.
                        </p>
                        <h5 className={`${castyles.textHeading} mt-5 mb-3`}>Video Timelines and Summaries</h5>
                        <p className={castyles.text}>Depending on the course, video timelines and summaries may be published on the course website.</p>
                    </Col>
                    <Col className={castyles.border}>
                        <h4 className={castyles.sectionTitle}>Accessing the Mentorship Program</h4>
                        <h5 className={`${castyles.textHeading} mt-3 mb-3`}>Applying for Mentorship</h5>
                        <p className={castyles.text}> 
                            Mentorship projects are an extension of one of our regular courses, so you must be already registered to apply. After donating, students will recieve an email to access our Discord Channel where they can ask questions to mentors, interact and work with other students on customizable projects, and recieve aid and feedback on project takeways.
                        </p>
                        <h5 className={`${castyles.textHeading} mt-3 mb-3`}>Mentors &amp; Feedback</h5>
                        <p className={castyles.text}> 
                            A small team of mentors will help guide you on your project takeaways and answer questions throughout the week. You can interact with them through live sessions, recieve guidance from them through Discord, and even share your projects with them for aid and feedback!
                        </p>
                        <h5 className={`${castyles.textHeading} mt-3 mb-3`}>Github</h5>
                        <p className={castyles.text}> 
                            Students making customazible games in Unity Game Development can share their project on Github to obrain valuable feedback, ask clarifying questions, and work with other students on their games!
                        </p>
                    </Col>
                    <Col>
                        <h4 className={castyles.sectionTitle}>Special Guest Lectures</h4>
                        <div className={castyles.centerText}>
                            <h3 className={`${castyles.textHeading} mt-0 mb-3 text-center`}>Coming Soon!</h3>
                            <p className={castyles.largeText}>
                                Our social media team is currently contacting professors and students of color who would be interested in giving special CS lectures in the month of August. If you would like to get involved, feel free to contact us at: code2impact@gmail.org!
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}