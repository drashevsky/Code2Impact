import Head from 'next/head';
import React from'react';
import NavBar from "../components/navbar";
import styles from "../styles/text.module.css";
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
    </div>
  )
}
