import React from 'react';
import styles from "./text.module.css";

export default class MissionHome extends React.Component {
    render() {
        return (
            <>
                <div className="mission">
                    <h1 className={styles.sectionTitle}>Code 2 Impact</h1>
                    <h4 className={styles.sectionSubtitle}>
                        Code2Impact is raising money for the BLM movement through a nonprofit
                        CS initiative in which they provide younger generation students opportunities to pursue
                        industrial and/or recreational applications of CS courses with a personalized mentorship
                        program.
                    </h4>
                </div>
                <style jsx>{`
                    .mission{
                        min-height: 90vh;
                        text-align: center;
                        padding: 10%;
                    }
                `}</style>
            </>
        );
    }
}