import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { Button, Card, CardBody } from 'shards-react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

let faqs = [
    {id: '1', title: "How do I access courses?", text: <>By clicking <Button href='https://www.gofundme.com/f/fighting-discrimination-with-code' style={{padding: '5px', fontSize: '15px'}} target='_blank'>here</Button> you will be directed to our GoFundMe, where you will have to make a single monetary donation. After donating, follow the <Button href='https://forms.gle/fHKoNr7t7yfvU5gr6' style={{padding: '5px', fontSize: '15px'}} target='_blank'>link</Button> in the thank you page to our Access Confirmation Form, and provide your donation receipt and email. Invitations to all 4 of our Google Classroom courses will then be emailed to you. We respectfully ask that you not share your access with others who have not donated to our GoFundMe.</>},
    {id: '2', title: "Where will my donations go?", text: "100% of donations will go towards Black Lives Matter-affiliated organizations such as the NAACP and national organizations supporting minorities in STEM such as National Society of Black Engineers."},
    {id: '3', title: "Are course sessions live or recorded?", text: "Both! Coding sessions will be held live on a biweekly basis, but students will be able to access video recordings after the live sessions have finished. We encourage all students to attend the live sessions to interact with teachers and ask clarifying questions regarding class content."},
    {id: '4', title: "How does the mentorship program work?", text: "Students will download the Discord app if they don’t have it installed already. We will create a central channel for all students in a course; there, students can ask mentors clarifying questions about course content, share their customizable projects with teachers for feedback, and interact with other students taking the course to code with one another!"},
    {id: '5', title: "How is Code2Impact’s CS program different from other programs out there?", text: "Our CS program offers 4 specialized student-crafted CS courses in a bundle (you can access them all with a single donation). Aside from ~16 hours of traditional instructional content, each course comes with a unique project takeaway such as a customizable game through Unity, a research notebook through Data Science, and more. We also offer a mentorship program where students can interact with teachers and students alike throughout course weeks to receive guidance on their project takeaways."}
]

export default function FAQ() {

    let faqslist = faqs.map((faq) => {
        return (
            <Accordion style={{margin: '2% 5% 2% 5%', border: '1px solid rgba(0, 0, 0, .125)', borderRadius:'.4rem', background:'rgba(255,255,255,.2)', boxShadow:'0 0.5rem 2rem rgba(90,97,105,.2), 0 1rem 1.5rem rgba(90,97,105,.2), 0 0.25rem 0.5rem rgba(90,97,105,.24), 0 0.125rem 0.2rem rgba(90,97,105,.2)'}} key={faq.id}>
                <AccordionSummary expandIcon={<ExpandMoreIcon style={{ fontSize: 40 }}/>}>
                    <h4 style={{color:'lightblue', marginBottom:'0'}}>{faq.title}</h4>
                </AccordionSummary>
                <AccordionDetails style={{padding:'8px'}}>
                    <Card style={{background:'rgba(255,255,255,.2'}}>
                        <CardBody className="p-3">
                            <p style={{fontSize: '20px',color:'white', marginBottom:'0'}}>{faq.text}</p>
                        </CardBody>
                    </Card>
                </AccordionDetails>
            </Accordion>
        )
    });

    return(
        <>{faqslist}</>
    )
}