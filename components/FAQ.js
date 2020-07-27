import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

let faqs = [
    {id: '1', title: "How do I access class courses?", text: "By clicking on the [link], you will be directed to our GoFundMe; there, you will have to make a single monetary donation (see Q2 for where your donation will go) and type in your email address when donating. After receiving your donation, we will send out directions regarding course access and other logistics directly to your email. We politely ask that you not share the directions you receive with others who have not donated to our GoFundMe."},
    {id: '2', title: "Where will my donations go?", text: "Donations will go toward Black Lives Matter-affiliated organizations such as the NAACP, and national organizations supporting minorities in STEM such as National Society of Black Engineers."},
    {id: '3', title: "Are course sessions live or recorded?", text: "Both! Coding sessions will be held live on a biweekly basis, but students will be able to access video recordings after the live sessions have finished. We encourage all students to attend the live sessions to interact with teachers and ask clarifying questions regarding class content."},
    {id: '4', title: "How does the mentorship program work?", text: "Students will download the Discord app if they don’t have it installed already. We will create a central channel for all students in a course; there, students can ask mentors clarifying questions about course content, share their customizable projects with teachers for feedback, and interact with other students taking the course to code with one another!"},
    {id: '5', title: "How is Code2Impact’s CS program different from other programs out there?", text: "Our CS program offers 4 specialized student-crafted CS courses in a bundle (you can access them all with a single donation). Aside from ~16 hours of traditional instructional content, each course comes with a unique project takeaway such as a customizable game through Unity, a research notebook through Data Science, and more. We also offer a mentorship program where students can interact with teachers and students alike throughout course weeks to receive guidance on their project takeaways."}
]

export default function FAQ() {

    let faqslist = faqs.map((faq) => {
        return (
            <Accordion style={{margin: '0% 5% 0% 5%', border: '1px solid rgba(0, 0, 0, .125)'}} key={faq.id}>
                <AccordionSummary expandIcon={<ExpandMoreIcon style={{ fontSize: 40 }}/>}>
                    <h2>{faq.title}</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: '25px'}}>{faq.text}</p>
                </AccordionDetails>
            </Accordion>
        )
    });

    return(
        <>{faqslist}</>
    )
}