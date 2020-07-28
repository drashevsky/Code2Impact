import Head from 'next/head'
import React from 'react'

const startDate = '2020-08-07';

class Calendar extends React.Component {
    renderCalendar() {
        var calendarEl = document.getElementById('calendar-root');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            height: '90%',
            initialDate: startDate,
            events: courseSchedule,
            eventTimeFormat: {hour: 'numeric', minute: '2-digit', meridiem: 'short'}
        });
        calendar.render();
    }
    
    componentDidMount() {
        this.renderCalendar();
    }

    componentDidUpdate() {
        this.renderCalendar();
    }

    render() {
        return (
            <>
                <Head>
                    <link href ='https://cdn.jsdelivr.net/npm/fullcalendar@5.1.0/main.min.css' rel='stylesheet' />
                    <script src='https://cdn.jsdelivr.net/npm/fullcalendar@5.1.0/main.min.js' type='text/javascript'/>
                </Head>
                
                <div id="calendar-container">
                    <div id="calendar-root" key="calendar-root"></div>
                </div>
                
                <style jsx global>{`
                    html {
                        background-color: #01245c;
                        background: linear-gradient(to bottom, #01245c 30%, #000000 100%) no-repeat center center fixed; 
                        background-size: cover;
                    }

                    #calendar-container {
                        position: absolute;
                        padding: 0% 2% 0% 2%;
                        height: 90%;
                        width: 100%;
                        color: white;
                    }

                    .fc-toolbar-title {
                        color: white;
                    }

                    .fc-scroller {
                        overflow-y: hidden !important;
                    }

                    .fc-daygrid-body {
                        width: unset !important;
                    }

                    .fc-scroller-liquid-absolute {
                        position: static !important;
                    }

                    table {
                        width: 100% !important;
                    }
                `}</style>
            </>
        )
    }
}

let courseSchedule = [
	{
        title: 'Course 1',
		daysOfWeek: [5, 6],
		startTime: '14:00',
		endTime: '16:00',
		startRecur: '2020-08-07',
		endRecur: '2020-08-31'
	},
	{
        title: 'Course 2',
		daysOfWeek: [5, 6],
		startTime: '16:00',
		endTime: '18:00',
		startRecur: '2020-08-07',
		endRecur: '2020-08-31'
	},
	{
        title: 'Course 3',
		daysOfWeek: [0, 1],
		startTime: '14:00',
		endTime: '16:00',
		startRecur: '2020-08-07',
		endRecur: '2020-08-31'
	},
	{
        title: 'Course 4',
		daysOfWeek: [0, 1],
		startTime: '16:00',
		endTime: '18:00',
		startRecur: '2020-08-07',
		endRecur: '2020-08-31'
	}
];

export default Calendar;