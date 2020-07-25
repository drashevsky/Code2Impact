import Head from 'next/head';
import React from'react';
import NavBar from "../components/navbar";
import styles from "../components/text.module.css";
import {
    Card,
    CardTitle,
    CardBody,
    Button,
    Row,
    Col
} from "shards-react";
import $ from "jquery";
import MissionHome from "../components/MissionHome";
import WhyusHome from "../components/WhyusHome";

export default function Home() {
  return (
    <div className="everything">
      <Head>
        <title>Code 2 Impact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <MissionHome />
      <WhyusHome />

      <style jsx>{`
        .everything {
            background-color: #01245c;
            background: linear-gradient(to bottom, #01245c 30%, #000000 100%);
            background-position: fixed;
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
        body{
            background-color: #01245c;
            background: linear-gradient(to bottom, #01245c 30%, #000000 100%);
            background-position: fixed;
        }
      `}</style>
    </div>
  )
}
