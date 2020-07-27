import React from 'react';
import styles from "./text.module.css";
import { Button, Card, CardBody, CardTitle, Col, Row, Container } from "shards-react";
import BioCard from "./BioCard";
import Grid from "@material-ui/core/Grid";


export default class BioStack extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: [
                {name:"Samarjit", roles:"Website Lead and Advanced Data Structures", bio:"yeah"},
                {name:"Arnav", roles:"Advanced Data Structures", bio:"yeah"},
                {name:"Samarjit", roles:"Website Lead and Advanced Data Structures", bio:"yeah"},
                {name:"Arnav", roles:"Advanced Data Structures", bio:"yeah"},
                {name:"Samarjit", roles:"Website Lead and Advanced Data Structures", bio:"yeah"},
                {name:"Arnav", roles:"Advanced Data Structures", bio:"yeah"},
                {name:"Samarjit", roles:"Website Lead and Advanced Data Structures", bio:"yeah"},
                {name:"Arnav", roles:"Advanced Data Structures", bio:"yeah"}
            ]
        }
    }
    render(){
        return (
            <>
                <div className="section">
                    <Grid container spacing={2} justify={'flex-start'}>
                        {this.state.data.map((bio, i) => (
                            <Grid item md={3}>
                                <BioCard className="inline" key={i} name={bio.name} roles={bio.roles} bio={bio.bio}/>
                            </Grid>
                            ))}
                    </Grid>
                </div>

                <style jsx>{`
                    .section {
                        min-height: 80vh;
                        padding: 10%;
                    }
                `}</style>
            </>
        );
    }

}