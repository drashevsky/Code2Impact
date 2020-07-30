import React from 'react';
import styles from "./text.module.css";
import { Button, Card, CardBody, CardTitle, Col, Row, Container } from "shards-react";
import BioCard from "./BioCard";
import Grid from "@material-ui/core/Grid";


export default class BioStack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: "Arnav Narula",
                    roles: "Advanced Data Structures",
                    bio: "Arnav Narula is a rising senior at Redmond High School whose interest lies in the intersection of CS and biology. Having always viewed tech and CS as a vehicle for positive societal change, he hopes to make coding opportunities more accessible to students in his community through Code2Impact. When not dabbling in numerous languages like Java, Python, and C++, he enjoys watching soccer, browsing Reddit, and playing all sorts of games with his family.",
                    img: ""
                },
                {
                    name: "Shrey Srivastava",
                    roles: "Data Science",
                    bio: "Shrey Srivastava is a rising senior at Nikola Tesla STEM High School where he pursues his interests in CS and physics. Wanting to become more socially involved after recent drastic events in his nearby community, he initiated in making Code2Impact transition from an idea to reality. In his spare time, Shrey enjoys gaming, playing table tennis, and listening to music.",
                    img: ""
                },
                {
                    name: "Samarjit Kaushik",
                    roles: "Advanced Data Structures",
                    bio: "Samarjit is a rising senior at Tesla STEM High School, and has experience with Java, Python, HTML, and C#. Some of his interests include coding (obviously), as well as biology and playing piano in his free time.",
                    img: ""
                },
                {
                    name: "Daniel Rashevsky",
                    roles: "The Dev Team",
                    bio: "Daniel Rashevsky is an incoming freshman at the University of Washington, where he is majoring in Computer Science. He is an avid coder, experimenting with everything from web development to assembly language. Currently, he works as a software engineering intern at AppEsteem. In his free time, he enjoys building RC aircraft, and browsing Reddit/Hacker News. He hopes to build Code2Impact as a platform to educate and inspire change.",
                    img: ""
                },
                {
                    name: "Raghav Narula",
                    roles: "Game Development",
                    bio: "Hey, I’m Raghav Narula, an avid coder and soon to be a senior at Redmond High School in Washington. I started tinkering with the Unity Game engine and making games a few years ago. I’ve always had fun trying to bring new, exciting, and crazy ideas to life, so it has remained one of my favorite hobbies to this day. When I’m not practicing game art or building games with friends, I usually play online chess, build websites (more coding lol), learn Spanish and spend time with my family.",
                    img: ""
                },
                {
                    name: "Brayden Brackett",
                    roles: "Game Development",
                    bio: "Howdy, my name is Brayden Brackett and I'm a senior at Tesla STEM High school. I love skiing, tennis, and sitting down to grind a good video game. Coincidently, my expertise with programming revolves around game design. I know several programming languages - my favorites being python and C# - and I firmly believe that if you're dedicated enough to make a game, you can program. Can't wait to code with y'all!",
                    img: ""
                },
                {
                    name: "Mohamed Awadalla",
                    roles: "Game Development",
                    bio: "I'm a senior at Redmond High school aspiring to become a computer scientist. I have a broad interest in game development, app development, and data science and currently, I'm interning at Sensoria Health Inc as an app developer. Through Code2Impact, I hope to teach others how to code while also giving back to my community.",
                    img: ""
                },
                {
                    name: "Henry Liao",
                    roles: "Data Science",
                    bio: "I’m currently a senior at Tesla STEM High School in Sammamish, Washington. I’ve been coding for 6 years now, on a variety of topics ranging from game design to computer vision with machine learning.  As of now, I’ve completed multiple online courses regarding machine learning in Python, have implemented computer vision for hazard detection in cars, and have interned at Microsoft to work on their Bing Visual Skills platform. Through teaching data science, I’m hoping to make higher-level concepts more approachable and accessible to interested high school computer science students.",
                    img: ""
                },
                {
                    name: "Aran Punniamoorthy",
                    roles: "Data Science",
                    bio: "I am a rising senior pursuing my interests in machine learning and biology. This year I qualified for the national and international competitions for FBLA (Business), TSA (Technology), and HOSA (Health/Biology), learning a lot along the way. I've also explored machine learning a lot on my own, creating the state-of-the-art mobile architecture model for malaria detection (to my knowledge), and working on many other cool projects. I think machine learning especially has the potential to create meaningful social impact, and want to share what I've learned over the years with other students to help them do so.",
                    img: ""
                },
                {
                    name: "Max Wang",
                    roles: "Intro to Java",
                    bio: "My name is Max Wang, and I am an incoming 11th grade student at Redmond High School. Some of my favorite things to do are practice violin, swim, code, and design robots. I also enjoy studying biochemistry in my free time. I love taking active roles in the community and interacting with people, which is why I am truly excited to volunteer for Code2Impact!",
                    img: ""
                },
                {
                    name: "Dhruv Ashok",
                    roles: "Intro to Java",
                    bio: "Hey everyone! My name is Dhruv Ashok and I'm going to be a junior at Juanita High School next year. I started programming a couple years back, and now I enjoy doing both web and mobile development. I'm very excited to begin teaching and helping everyone in any way I can!",
                    img: ""
                },
                {
                    name: "Kavya K",
                    roles: "Intro to Java",
                    bio: "I am a rising senior at Redmond High School, and I’m excited to be part of this project. Coding has been a passion of mine since I was 10 years old, learning to code with Python. I also code in Java, C# and C, and in my free time I love singing and playing music.",
                    img: ""
                },
                {
                    name: "Vanya Dimri",
                    roles: "Advanced Data Structures",
                    bio: "Vanya Dimri is a rising senior at Redmond High School. She is passionate about STEM education and is particularly interested in reinforcement learning and AI/ML transparency research. Some of her past coding projects include implementing computer vision to build a sign language translator and building multiple interactive games. When she's not endlessly searching through StackOverflow, you can find her playing the violin, dancing, and annotating music on Genius. Vanya is thrilled to be a part of Code2Impact and is looking forward to class this summer!",
                    img: ""
                }
            ]
        }
    }
    render() {
        return (
            <>
                <div className="section">
                    <h1 className={styles.sectionTitle}>Our Team</h1>
                    <Grid container spacing={2} justify={'flex-start'}>
                        {this.state.data.map((bio, i) => (
                            <Grid item md={3} key={i}>
                                <BioCard className="inline" name={bio.name} roles={bio.roles} bio={bio.bio} img={bio.img} />
                            </Grid>
                        ))}
                    </Grid>
                </div>

                <style jsx>{`
                    .section {
                        min-height: 80vh;
                        padding: 0% 10% 0% 10%;
                    }
                `}</style>
            </>
        );
    }

}