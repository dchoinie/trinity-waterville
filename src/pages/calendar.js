import React from 'react'
import Layout from "../components/Layout"

const Calendar = () => {
    return (
        <Layout>
            <div className="flex container mx-auto px-24 py-24">
                <iframe 
                src="https://calendar.google.com/calendar/embed?src=ihfb8203lkp31n7038imqlpap8%40group.calendar.google.com&ctz=America%2FChicago" 
                style={{border: "0"}}
                width="100%" 
                height="600" 
                frameborder="0" 
                scrolling="no">
                </iframe>
            </div>
        </Layout>
    )
}

export default Calendar