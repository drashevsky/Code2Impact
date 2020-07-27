import Head from 'next/head';
import React from 'react';
import NavBar from "./Navbar";

export default function Layout({children, calendar}) {
    let background = (!calendar) ? <style jsx global>{`
        body{
            background-color: #01245c;
            background: linear-gradient(to bottom, #01245c 30%, #000000 100%);
            background-position: fixed;
        }
        .root {
            background-color: #01245c;
            background: linear-gradient(to bottom, #01245c 30%, #000000 100%);
            background-position: fixed;
        }
    `}</style> : <style></style>;
    
    return (
        <>
            <Head>
                <title>Code 2 Impact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="root">
                <NavBar />
                {children}
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
            `}</style>

            {background}
        </>
    )
}
