import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Button, Container, Card } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faCalendarAlt, faUtensils, faMapMarkerAlt, faClock, faPhone, faStar } from '@fortawesome/free-solid-svg-icons';

export const FullPageBackground = styled.div`
  background: linear-gradient(to right, #ffffff, #e3f2fd);
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const PageContainer = styled(Container)`
  background: transparent;
  padding: 4rem 2rem;
  color: #333;
  font-family: 'Roboto', 'Arial', sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const HeaderSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Logo = styled(motion.img)`
  width: 150px;
  height: 150px;
  margin-bottom: 1rem;
  border-radius: 50%;
  border: 2px solid #27AE60;
`;

export const MainHeading = styled(motion.h1)`
  font-size: 3rem;
  color: #2C3E50;
  margin-bottom: 1rem;
  font-weight: 700;
`;

export const SubHeading = styled(motion.p)`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 2rem;
`;

export const StyledButton = styled(Button)`
  border-radius: 20px;
  padding: 10px 35px;
  margin: 10px;
`;

export const ImageContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const StoryContainer = styled(motion.div)`
  background-color: #FFFFFF;
  padding: 2rem;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  margin-top: 2rem;
`;

export const Heading = styled(motion.h2)`
  font-size: 2.5rem;
  color: #2C3E50;
  margin-bottom: 1rem;
  font-weight: 600;
`;

export const SubHeadingText = styled(motion.h3)`
  font-size: 1.8rem;
  color: #27AE60;
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const Text = styled(motion.p)`
  font-size: 1.2rem;
  color: #555;
  max-width: 800px;
  margin: auto;
  line-height: 1.6;
`;

export const Section = styled(motion.div)`
  padding: 4rem 0;
  text-align: center;
`;

export const DishCard = styled(motion(Card))`
  margin: 1rem;
  width: 280px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  border-radius: 10px;
  .MuiCardContent-root {
    padding: 1.5rem;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 8px;
  color: #27AE60;
`;

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  cssEase: 'linear'
};
