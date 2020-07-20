import Head from 'next/head';
import React from'react';
import NavBar from "../components/navbar";
import styles from "../components/text.module.css";

export default function Home() {
  return (
    <div className="everything m-0 p-0">
      <Head>
        <title>Code 2 Impact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <div className="mission">
          <h1 className={styles.sectionTitle}>Code 2 Impact</h1>
          <h2 className={styles.sectionSubtitle}>
              Code2Impact is raising money for the BLM movement through a nonprofit
              CS initiative in which they provide younger generation students opportunities to pursue
              industrial and/or recreational applications of CS courses with a personalized mentorship
              program.
          </h2>
      </div>

      <style jsx>{`
        .everything {
            background-color: #01245c;
            background: linear-gradient(to bottom, #01245c 30%, #000000 100%);
            background-position: fixed;
            min-width: 100vw;
            min-height: 100vh;
        }
        .mission{
            height: 80vh;
            text-align: center;
            padding: 10%;
        }

        @media (max-width: 600px) {
          
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      `}</style>
    </div>
  )
}
