import React from 'react';
import { Collapse } from 'antd';
const { Panel } = Collapse;

// Sample historical data, ideally this would be fetched from a server or be defined in a more appropriate place.
const historyData = [
    {
        year: "1990",
        text: "Founded in 1990, our restaurant began as a small family-owned business in the heart of Downtown Denton, serving traditional local dishes."
    },
    {
        year: "2000",
        text: "By 2000, we expanded our menu and our premises to accommodate more guests as our popularity grew."
    },
    {
        year: "2010",
        text: "2010 marked a milestone for us with the renovation of our restaurant and introduction of international cuisine."
    },
    {
        year: "2020",
        text: "Surviving the challenges of 2020, we adapted by offering online ordering and delivery, ensuring our customers could still enjoy our food from the safety of their homes."
    },
    {
        year: "Present",
        text: "Today, we continue to innovate and provide the highest quality dining experience, with regular special events and seasonal menus."
    }
];

const History = () => {
    return (
        <div className="history-section">
            <h2>Our History</h2>
            <Collapse accordion>
                {historyData.map((entry, index) => (
                    <Panel header={`${entry.year}`} key={index}>
                        <p>{entry.text}</p>
                    </Panel>
                ))}
            </Collapse>
        </div>
    );
};

export default History;
