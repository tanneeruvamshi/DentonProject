import React from 'react';
import { Timeline, Card } from 'antd';
import { TrophyOutlined } from '@ant-design/icons';

// Styling for the card that will hold the timeline
const cardStyle = {
  backgroundColor: "#f9f9f9",
  border: "1px solid #e8e8e8",
  boxShadow: "0 2px 3px rgba(0, 0, 0, 0.1)"
};

// Sample achievements data
const achievements = [
  {
    year: "2012",
    content: "Awarded 'Best New Restaurant' in Denton County."
  },
  {
    year: "2015",
    content: "Reached a milestone of serving over 10,000 customers."
  },
  {
    year: "2018",
    content: "Included in the 'Top 50 Restaurants in Texas' list."
  },
  {
    year: "2020",
    content: "Successfully transitioned to 100% sustainable sourcing for our ingredients."
  },
  {
    year: "2023",
    content: "Celebrated 10 years of culinary excellence and community service."
  }
];

const Achievements = () => {
  return (
    <Card title="Our Achievements" bordered={false} style={cardStyle}>
      <Timeline>
        {achievements.map((achievement, index) => (
          <Timeline.Item key={index} dot={<TrophyOutlined style={{ color: 'gold' }} />} color="green">
            <p><strong>{achievement.year}</strong> - {achievement.content}</p>
          </Timeline.Item>
        ))}
      </Timeline>
    </Card>
  );
};

export default Achievements;
