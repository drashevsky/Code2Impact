import Head from 'next/head';
import React from'react';
import NavBar from "../components/navbar";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>

      <style jsx>{`
        .container {
            padding: 0;
            margin: 0;
            background-color: #01307a;
            min-height: 100vh;
            min-width: 100vw;
        }

        @media (max-width: 600px) {
          
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      `}</style>
    </div>
  )
}
