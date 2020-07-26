import React from 'react';
import styles from "./text.module.css";
import visible from "./visibility.module.css"
import {ButtonGroup, ButtonToolbar, Button} from "shards-react";

export default class ClasslistClasses extends React.Component {
    render() {
        return (
            <>
                <div className="heading">
                    <h1 className={styles.sectionTitle}>Classes</h1>
                    <h4 className={styles.sectionSubtitle}>
                        Explore our diverse course collection, and jump to a specific class to explore course content, prerequisites, and more!
                    </h4>
                    <div className={visible.notPhone}>
                        <ButtonGroup size="lg" className="p-4">
                            <Button href="#introtojava">Intro to Java</Button>
                            <Button href="#datastructures">Data Structures</Button>
                            <Button href="#datascience">Data Science</Button>
                            <Button href="#gamedevelopment">Game Development</Button>
                        </ButtonGroup>
                    </div>
                    <div className={visible.onPhone}>
                        <ButtonGroup size="lg" className="p-4" vertical>
                            <Button href="#introtojava">Intro to Java</Button>
                            <Button href="#datastructures">Data Structures</Button>
                            <Button href="#datascience">Data Science</Button>
                            <Button href="#gamedevelopment">Game Development</Button>
                        </ButtonGroup>
                    </div>
                </div>
                <style jsx>{`
                    .heading{
                        min-height: 60vh;
                        text-align: center;
                        padding: 10%;
                    }  
                `}</style>
            </>
        );
    }
}