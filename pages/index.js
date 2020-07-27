import Layout from '../components/Layout'
import MissionHome from '../components/MissionHome'
import WhyUsHome from '../components/WhyUsHome'
import React from "react";

export default function Home() {
    return (
        <Layout>
            <MissionHome />
            <WhyUsHome />
        </Layout>
    )
}