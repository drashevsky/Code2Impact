import React from 'react'
import styles from '../components/text.module.css'
import CourseAccess from '../components/CourseAccess'
import FAQ from '../components/FAQ'

export default function MoreInfo() {
    return (
        <>
            <div className="info-container">
                <div className="info-section">
                    <h1 className={`${styles.sectionTitle} ${styles.leftAlign} info-section-title`}>Course Access Information</h1>
                    <CourseAccess/>
                </div>
                <div className="info-section">
                    <h1 className={`${styles.sectionTitle} ${styles.leftAlign} info-section-title`}>Frequently Asked Questions</h1>
                    <FAQ/>
                </div>
            </div>
            <style jsx>{`
                .info-container {
                    min-height: 180vh;
                }
                .info-section {
                    min-height: 90vh;
                    margin-bottom: 10%;
                }
                .info-section-title {
                    margin: 3% 5% 3% 5%;
                    text-align: center;
                }
            `}</style>
        </>
    )
}