import Layout from '../components/Layout'
import styles from '../components/text.module.css'
import CourseAccess from '../components/CourseAccess'
import FAQ from '../components/FAQ'

export default function MoreInfo() {
    return (
        <>
            <Layout>
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
            </Layout>
            <style jsx>{`
                .info-container {
                    min-height: 180vh;
                }
                .info-section {
                    min-height: 90vh;
                }
                .info-section-title {
                    margin: 3% 5% 5% 5%;
                    text-align: center;
                }
            `}</style>
        </>
    )
}