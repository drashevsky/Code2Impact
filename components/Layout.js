import Head from 'next/head';
import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';

export default function Layout(props) {
    return (
        <>
            <Head>
                <title>Code 2 Impact</title>
                <meta name="description" content="Code2Impact is raising money for the BLM movement through a nonprofit CS initiative. It seeks to provide younger students with new opportunities to pursue real-life applications of CS courses, while raising awareness of STEM backgrounds with minority students." />
                <meta property="og:url" content="https://code2impact.org" />
                <meta property="og:title" content="Code 2 Impact" />
                <meta property="og:description" content="Code2Impact is raising money for the BLM movement through a nonprofit CS initiative. It seeks to provide younger students with new opportunities to pursue real-life applications of CS courses, while raising awareness of STEM backgrounds with minority students." />
                <meta property="og:image" content="https://code2impact.org/logo.png" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="root">
                <NavBar />
                    {props.children}
                <Footer />
            </div>

            <style jsx global>{`
                html,
                body {
                    margin: 0;
                    padding: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                    
                }
                .root, body {
                    background-color: #01245c;
                    background: linear-gradient(to bottom, #01245c 30%, #000000 100%);
                    background-position: fixed;
                }
            `}</style>
        </>
    )
}
