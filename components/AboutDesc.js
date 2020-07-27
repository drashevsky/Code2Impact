import React from 'react';
import styles from "./text.module.css";

export default class AboutDesc extends React.Component {
    render() {
        return (
            <>
                <div className="heading">
                    <h1 className={styles.sectionTitle}>About us</h1>
                    <h4 className={styles.sectionSubtitle}>
                        Code2Impact is a high-school student-led organization located in the Greater Seattle Area. We are composed of a collection of schools in Lake Washington School District including Redmond High School, STEM High School, and Juanita High School.
                    </h4>
                </div>
                <style jsx>{`
                    .heading{
                        min-height: 30vh;
                        text-align: center;
                        padding: 5% 10% 5% 10%;
                    }
                `}</style>
            </>
        );
    }
}