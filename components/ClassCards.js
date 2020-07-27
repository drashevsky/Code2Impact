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
                        objective="At its core, the Intro to Java course is equivalent in content to a AP Computer Science A course. Students will be taught the fundamentals of coding through the Java programming language, covering topics from primitive data types to classes to basic data structures like arrays. This course provides a bottom-up curriculum, supplemented by classic coding problems and project-based learning; moreover, students will be able to ask questions about class content and projects throughout the course and will receive guidance to help them ease into their first coding ventures. 
                        "
                        content="Java Classes - Methods - Variable Types - Control Structure (if/else, while, for loops) - Scanner - Files - Arrays - ArrayLists - Inheritance"
                        takeaway="Students will come out of this course with a knowledge of basic programming concepts that can be applied to any programming language, and during the course, they will attempt projects with increasing complexity, culminating in a final project that assesses the skills they’ve learned.
                        "
                    />
                    <ClassCard
                        title="Advanced Data Structures"
                        classId="datastructures"
                        language="Java"
                        reqs="Taken an APCSA Course in high school or at a similar level"
                        objective="Advanced Data Structures (ADSs) serves as a next step to an APCSA or Intro to Java course. Seeking to enhance Java understanding beyond APCSA, this course will provide students with an in-depth overview of multiple ADSs like Hash Maps, Linked Lists, and Stacks. Students will be presented intuitive understandings of each ADS before diving into their code implementations and properties. They will future explore ADSs within the scope of real-world examples including coding-based projects and past tech interview questions, all the while having access to a mentorship program to cement their overall understanding."
                        content="Linked lists (singly, doubly) - Stacks - Queues - Binary Trees - Fenwick Trees - Hash Maps - Hash Sets - Graph Theory"
                        takeaway="Students will code their own class implementations of advanced data structures to utilize for side projects and apply ADSs to projects based off real-word examples. Nearing the end of the course, students will be introduced to a cumulative project in which multiple ADSs are used."
                    />
                    <ClassCard

                        title="Data Science"
                        classId="datascience"
                        language="Python"
                        reqs=" Comfort with higher level coding languages like Java, C#, C++, or Python (Python highly recommended, not required)"
                        objective="Python for Data Science will teach students to manipulate and visualize any datasets for the purposes of machine learning applications. This will be accomplished through introduction to the fundamental machine learning libraries used every day by industry professionals, including pandas, matplotlib, seaborn, and many more. In addition to the libraries themselves, students will attain a grasp of common ways to analyze these data sets with metrics from scikit-learn. Students will explore these concepts through hands-on projects and exercises with recommended datasets, and will be encouraged to ask mentors questions during the program about their research.
                        "
                        content="Intro to Jupyter Notebooks - Python Basics - Numpy - Data Parsing (w/ Pandas) - Data Visualization (w/ Matplotlib, Seaborn), Scikit-Learn, Regression, Classification
                        "
                        takeaway="Multiple self-made Jupyter Notebooks that will serve as inspiration and reference for students to conduct research on their own. "
                    />
                    <ClassCard
                        title="Game Development"
                        classId="gamedevelopment"
                        language="C#"
                        reqs="None"
                        objective=" Students will gain hands on experience with the Unity game engine where they will learn about game objects, components, game mechanics and more. They will also learn C# syntax to write scripts for physics and various other mechanics. By the end of the course, students will have a complete 2d puzzle-platformer game with numerous levels. 
                        "
                        content="Physics / Collisions - UI - Animations - Game mechanics - C# syntax - Prefabs / Level Design - Saving / Loading Data - Sounds/Music
                        "
                        takeaway=" A 2d puzzle-platformer game that students will build during the course. Additionally, they are free to customize and add their own unique elements to the game throughout the class. Art and sprites will be provided. 
                        "
                    />
                </div>

                <style jsx>{`
                    .section {
                        min-height: 80vh;
                        padding: 0% 10%;
                    }
                `}</style>
            </>
        );
    }
}