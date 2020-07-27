import styles from "./text.module.css";
import {Card, CardBody, Col, Container, Row, CardHeader, CardSubtitle, CardTitle} from "shards-react";
import TabInterface from "./TabInterface";
import React from "react";

export default function ClassCard(props) {
    return(
        <>
            <div className="class">
                <h2 className={`p-3 pt-4 ${styles.sectionTitle}`} id={props.classId}></h2>
                <h2 className={`p-3 ${styles.sectionTitle}`}>{props.title}</h2>
                <Card className="classCard">
                    <CardHeader  style={{background:"rgba(0,0,0,1)"}}>
                        <CardTitle style={{color:"white"}}>Language: {props.language}</CardTitle>
                        <CardSubtitle style={{color:"white"}}>Recommended Skills: {props.reqs}</CardSubtitle>
                    </CardHeader>
                    <CardBody className="p-0" style={{background:"rgba(0,0,0,.8)"}}>
                        <TabInterface>
                            <div label="Course Objective">
                                {props.objective}
                            </div>
                            <div label="Course Content">
                                {props.content}
                            </div>
                            <div label="Course Takeaway">
                                {props.takeaway}
                            </div>
                        </TabInterface>
                    </CardBody>
                </Card>

            </div>
            <style jsx>{`
                    .section {
                        min-height: 80vh;
                        padding: 10%;
                    }    
                    .class {
                        min-height: 40vh;
                        margin: 10% 0% 10% 0%;
                    }
                    .centered {
                        text-align:center;
                    }
                    .classCard{
                        background: rgba(0,0,0,.1);
                    }
            `}</style>
        </>
    )
}