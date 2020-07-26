import React from 'react';
import styles from "./text.module.css";
import {Button, Card, CardBody, CardTitle, Col, Row, Container} from "shards-react";
import TabInterface from "./TabInterface";
import ClassCard from "./ClassCard";


export default class ClassCards extends React.Component {
    render() {
        return (
            <>
                <div className="section">
                    <ClassCard
                        title="Intro to Java"
                        classId="introtojava"
                        language="Java"
                        reqs="None - no prior experience needed"
                        objective="text1"
                        content="text2"
                        takeaway="text3"
                    />
                    <ClassCard
                        title="Data Structures"
                        classId="datastructures"
                        language="Java"
                        reqs="None - no prior experience needed"
                        objective="text1"
                        content="text2"
                        takeaway="text3"
                    />
                    <ClassCard
                        title="Data Science"
                        classId="datascience"
                        language="Java"
                        reqs="None - no prior experience needed"
                        objective="text1"
                        content="text2"
                        takeaway="text3"
                    />
                    <ClassCard
                        title="Game Development"
                        classId="gamedevelopment"
                        language="Java"
                        reqs="None - no prior experience needed"
                        objective="text1"
                        content="text2"
                        takeaway="text3"
                    />
                </div>

                <style jsx>{`
                    .section {
                        min-height: 80vh;
                        padding: 10%;
                    }
                `}</style>
            </>
        );
    }
}