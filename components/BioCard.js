import styles from "./text.module.css";
import {Card, CardBody, Col, Container, Row, CardHeader, CardSubtitle, CardTitle, CardImg, CardFooter} from "shards-react";
import React from "react";

export default function BioCard(props) {
    return (
        <>
            <Card className="m-2 classCard">
                <CardHeader className="p-2"   style={{background:"rgba(0,0,0,1)"}}>
                    <CardTitle style={{color:'white'}}>{props.name}</CardTitle>
                    <CardSubtitle style={{color:'white'}}>{props.roles}</CardSubtitle>
                </CardHeader>
                <CardBody className="m-0 p-0 picture"  style={{background:"rgba(0,0,0,1)"}}>
                    {props.img !== '' && (<img className="picture" src={"https://place-hold.it/300x200"}/>)}
                </CardBody>
                <CardFooter className="p-2"  style={{background:"rgba(0,0,0,.6)"}}>
                    <p style={{color:'lightblue'}}>{props.bio}</p>
                </CardFooter>
            </Card>
            <style jsx>{`
            
            `}</style>
        </>
    )
}