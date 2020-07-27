import Head from 'next/head'
import React from 'react'

class Calendar extends React.Component {
    render() {
        return (
            <>
                <Head>
                    <link href ='https://cdn.jsdelivr.net/npm/fullcalendar@5.1.0/main.min.css' rel='stylesheet' />
                    <script src='https://cdn.jsdelivr.net/npm/fullcalendar@5.1.0/main.min.js' type='text/javascript'/>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                function renderCalendar() {
                                    var calendarEl = document.getElementById('calendar-root');
                                    var calendar = new FullCalendar.Calendar(calendarEl, {
                                        initialView: 'dayGridMonth',
                                        height: '90%'
                                    });
                                    calendar.render();
                                }
                                window.onload = () => {renderCalendar()};
                                
                                if (document.readyState === 'complete') {
                                    renderCalendar();
                                }
                            `,
                        }}
                    ></script>
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
  
  export default Calendar;