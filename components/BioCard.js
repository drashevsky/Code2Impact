import styles from "./text.module.css";
import {Card, CardBody, Col, Container, Row, CardHeader, CardSubtitle, CardTitle, CardImg, CardFooter} from "shards-react";
import React from "react";

export default function BioCard(props) {
    return (
        <>
            <Card className="m-2 picture">
                <CardHeader className="p-2">
                    <CardTitle>{props.name}</CardTitle>
                    <CardSubtitle>{props.roles}</CardSubtitle>
                </CardHeader>
                <CardBody className="m-0 p-0 picture">
                    <img className="picture" src={"https://place-hold.it/300x200"} style={{width:"inherit"}}/>
                </CardBody>
                <CardFooter className="p-2">
                    <p>{props.bio}</p>
                </CardFooter>
            </Card>
            <style jsx>{`
                .picture{
                    background-color: green;
                }     
            `}</style>
        </>
    )
}