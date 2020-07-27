import React from 'react';
import styles from "./text.module.css";
import { Button, Card, CardBody, CardTitle, Col, Row, Container } from "shards-react";
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
                        objective="At its core, the Intro to Java course is equivalent in content to an AP Computer Science A course. Students will be taught the fundamentals of coding through the Java programming language, covering topics from primitive data types to ArrayLists and Classes. This course provides a bottom-up curriculum, supplemented by classic coding problems and project-based learning. 
                        "
                        content="Java classes, methods, variable types, control structure, scanner, files, arrays, arraylists, inheritance, and more!"
                        takeaway="Students will come out of this course with a knowledge of basic programming concepts that can be applied to any programming language, and during the course, they will attempt projects with increasing complexity, culminating in a final project that assesses the skills they’ve learned.
                        "
                    />
                    <ClassCard
                        title="Advanced Data Structures"
                        classId="datastructures"
                        language="Java"
                        reqs="None - no prior experience needed"
                        objective="Advanced Data Structures (ADSs) serves as a next step to an APCSA or Intro to Java course and seeks to enhance Java understanding beyond typical secondary school settings. This class will equip students with the knowledge to understand and apply multiple ADSs within the scope of real-world examples including application-based projects and tech interview questions. "
                        content="Linked lists (singly, doubly), queues, stacks, binary trees, fenwick trees, hashmaps, hash sets, graph theory"
                        takeaway=" Class implementations of ADSs, weekly, real-world projects, and a cumulative project where multiple ADSs are used. "
                    />
                    <ClassCard
                        title="Data Science"
                        classId="datascience"
                        language="Python"
                        reqs="None - no prior experience needed"
                        objective="Python for Data Science will teach students to manipulate and visualize any datasets for the purposes of machine learning applications. This will be accomplished through introduction to the fundamental machine learning libraries used every day by industry professionals, including pandas, matplotlib, seaborn, and many more. In addition to the libraries themselves, students will attain a grasp of common ways to analyze these data sets with metrics from scikit-learn. Students will explore these concepts through hands-on projects and exercises with recommended datasets, and will be encouraged to ask mentors questions during the program about their research.
                        "
                        content="Intro to Jupyter Notebooks and Python Basics, Numpy, Data parsing with pandas, Visualization of data with matplotlib and seaborn, Scikit-Learn, Regression, Classification
                        "
                        takeaway="Multiple self-made Jupyter Notebooks that will serve as inspiration and reference for students to conduct research on their own. "
                    />
                    <ClassCard
                        title="Game Development"
                        classId="gamedevelopment"
                        language="C#"
                        reqs="None - no prior experience needed"
                        objective=" Students will gain hands on experience with the Unity game engine where they will learn about game objects, components, game mechanics and more. They will also learn C# syntax to write scripts for physics and various other mechanics. By the end of the course, students will have a complete 2d puzzle-platformer game with numerous levels. 
                        "
                        content="Physics / Collisions - UI - Animations - Game mechanics - C# syntax - Prefabs / Lvl design - Saving/Loading data - Adding sounds/music
                        "
                        takeaway=" A 2d puzzle-platformer game that students will build during the course. Additionally, they are free to customize and add their own unique elements to the game throughout the class. Art and sprites will be provided. 
                        "
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