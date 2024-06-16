import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import vibrantTheme from '../Theme/Theme';
import { ThemeProvider } from '@mui/material';

// Styled container for the map with shadow and border radius
const MapContainer = styled(motion.div)`
  width: 100%;
  height: 400px;
  margin-bottom: 20px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer; // Change cursor to indicate clickable area
  transition: transform 0.3s ease-in-out;
  position: relative; // Ensures this container is positioned for stacking context

  &:hover {
    transform: scale(1.02); // Slight zoom effect on hover
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10; // Make sure this overlay is above the iframe for capturing clicks
`;

const Map = () => {
  const handleMapClick = () => {
    window.open("https://maps.app.goo.gl/rtdwn8W7vamcy7su7", "_blank");
  };

  return (
    <ThemeProvider theme={vibrantTheme}>
      <MapContainer
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Overlay onClick={handleMapClick} />
        <iframe
          title="Namaste Denton Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.9704934305078!2d-97.13731472431903!3d33.214869773483755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dcb1159f4ff13%3A0x119505ead3c0d029!2sNamaste%20Denton!5e0!3m2!1sen!2sus!4v1717105580804!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </MapContainer>
    </ThemeProvider>
  );
};

export default Map;
