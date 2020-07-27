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
                            Every course lesson will be delivered as a 1.5 hour live video lecture. There will be breaks for questions between each "topic" covered in the video or at specific intervals, depending on the course. A moderator will be available to answer questions in a live chat during the lecture. Each session may include lecture, visualization, and application components.
                        </p>
                        <h5 className={`${castyles.textHeading} mt-5 mb-3`}>Published Videos</h5>
                        <p className={castyles.text}>
                            As an extension or replacement for our live video lectures, we will be republishing each lecture as a series of shortened videos to the course website. Each will be around 10-15 minutes long, and will have built-in question session functionality.
                        </p>
                        <h5 className={`${castyles.textHeading} mt-5 mb-3`}>Video Timelines and Summaries</h5>
                        <p className={castyles.text}>Depending on the course, video timelines and summaries may be published on the course website.</p>
                    </Col>
                    <Col className={castyles.border}>
                        <h4 className={castyles.sectionTitle}>Accessing the Mentorship Program</h4>
                        <h5 className={`${castyles.textHeading} mt-3 mb-3`}>Applying for Mentorship</h5>
                        <p className={castyles.text}> 
                            Mentorship projects are an extension of one of our regular courses, so you must be already be registered to apply. We will be providing a Google form for applications, where you can submit your project idea (e.g. a game idea, a research question for a DS notebook, etc). You will need to provide your email so we can communicate with you about your application status.
                        </p>
                        <h5 className={`${castyles.textHeading} mt-3 mb-3`}>Mentors &amp; Feedback</h5>
                        <p className={castyles.text}> 
                            A small team of mentors will work with you on your project, rotating every 1-2 days. You can ask for quick feedback and interact with other students and mentors over Discord. Also, you will be able to participate in a weekly video chat meeting with all of your mentors.
                        </p>
                        <h5 className={`${castyles.textHeading} mt-3 mb-3`}>Github</h5>
                        <p className={castyles.text}> 
                            You will need a Github account, as this is where your project will be hosted and shared with your mentors.
                        </p>
                    </Col>
                    <Col>
                        <h4 className={castyles.sectionTitle}>Special Guest Lectures</h4>
                        <div className={castyles.centerText}>
                            <h1 className={`${castyles.textHeading} mt-3 mb-3 text-center`}>Coming Soon!</h1>
                            <p className={castyles.largeText}>
                                Our social media team is currently contacting professors and college students of color who would be interested in giving special CS lectures.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}