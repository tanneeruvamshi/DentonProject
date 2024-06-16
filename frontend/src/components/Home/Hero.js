import React, { useEffect, useState } from 'react';
import { ThemeProvider, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import Slider from 'react-slick';
import vibrantTheme from '../Theme/Theme';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  PageContainer,
  HeaderSection,
  Logo,
  MainHeading,
  SubHeading,
  StyledButton,
  ImageContainer,
  settings,
  FullPageBackground,
  StoryContainer,
  Heading,
  SubHeadingText,
  Text,
  Section,
  DishCard,
  Icon,
} from './StyledComponents';
import { fetchLogoUrl, fetchVideoUrl, getPlaceId, fetchGoogleReviews } from '../../services/googleReviews';
import Map from '../Contact/Map'; // Import the Map component

const Hero = () => {
  const [reviews, setReviews] = useState([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    AOS.init({ duration: 2000 });

    const getReviews = async () => {
      const placeId = await getPlaceId();
      if (placeId) {
        const fetchedReviews = await fetchGoogleReviews(placeId);
        setReviews(fetchedReviews);
      }
    };
    getReviews();
  }, []);

  useEffect(() => {
    const fetchMedia = async () => {
      const logoUrl = await fetchLogoUrl();
      setLogoUrl(logoUrl);

      const videoUrl = await fetchVideoUrl();
      setVideoUrl(videoUrl);
    };
    fetchMedia();
  }, []);

  return (
    <ThemeProvider theme={vibrantTheme}>
      <FullPageBackground>
        <ReactPlayer
          url={videoUrl}
          playing
          loop
          muted
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
          }}
        />
        <PageContainer>
          <HeaderSection
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {logoUrl && (
              <Logo
                src={logoUrl}
                alt="Restaurant Logo"
                whileHover={{ scale: 1.05 }}
                data-aos="fade-down"
              />
            )}
            <MainHeading
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              data-aos="fade-up"
            >
              Welcome to Namaste Denton
            </MainHeading>
            <SubHeading
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Delight in our exquisite dishes crafted with the finest ingredients.
            </SubHeading>
            <StyledButton
              variant="contained"
              color="primary"
              size="large"
              onClick={() => window.location.href = "https://order.toasttab.com/online/namastedenton"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Discover Our Menu
            </StyledButton>
            <StyledButton
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => window.location.href = "https://www.google.com/maps/reserve/v/dine/c/D9WwCFH-9dU?source=pa&opi=89978449&hl=en-US&gei=Eu9YZp6yHvHUp84PxqmZwAI&sourceurl=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dnamaste%2Bdenton%25C2%25A0%26client%3Dsafari%26sca_esv%3D986cfd32cb66a37f%26sca_upv%3D1%26rls%3Den%26sxsrf%3DADLYWIJeHfprtQ-0HyNkskh5mSnodsZzbw%3A1717101578606%26ei%3DCuRYZrPTJKrKp84Pva2gkAE%26ved%3D0ahUKEwizgIvtnbaGAxUq5ckDHb0WCBIQ4dUDCA8%26uact%3D5%26oq%3Dnamaste%2Bdenton%25C2%25A0%26gs_lp%3DEgxnd3Mtd2l6LXNlcnAiEG5hbWFzdGUgZGVudG9uwqAyBRAAGIAEMgUQABiABDILEC4YgAQYxwEYrwEyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgsQABiABBiGAxiKBUj6JFCiD1j-InADeAGQAQCYAeQBoAGfE6oBBjAuMTIuM7gBA8gBAPgBAZgCEaAC-xLCAgoQABiwAxjWBBhHwgINEAAYsAMY1gQYRxjJA8ICDhAAGIAEGLADGJIDGIoFwgILEAAYgAQYkQIYigXCAgsQLhiABBixAxiDAcICCxAAGIAEGLEDGIMBwgIREC4YgAQYsQMY0QMYgwEYxwHCAgsQLhiABBjRAxjHAcICCBAuGIAEGLEDwgIOEAAYgAQYsQMYgwEYigXCAg4QLhiABBixAxiDARiKBcICChAjGIAEGCcYigXCAgUQLhiABMICChAAGIAEGEMYigXCAggQABiABBixA8ICCxAuGIAEGLEDGOUEwgINEAAYgAQYsQMYQxiKBcICCBAuGIAEGOUEwgIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQHCAggQABiiBBiJBcICCBAAGIAEGKIEmAMAiAYBkAYJugYGCAEQARgUkgcGMy4xMC40oAePpQE%26sclient%3Dgws-wiz-serp&ihs=4"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              style={{ marginTop: '1rem' }}
              data-aos="fade-up"
              data-aos-delay="900"
            >
              Reserve a Table
            </StyledButton>
          </HeaderSection>
          <Grid container justifyContent="center" alignItems="center" spacing={4}>
            <Grid item xs={12} md={6}>
              <Slider {...settings}>
                {videoUrl && (
                  <ImageContainer>
                    <motion.video
                      src={videoUrl + '#t=0.2'}
                      alt="Restaurant Video"
                      style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                      autoPlay
                      loop
                      muted
                      playsInline
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      data-aos="fade-up"
                    />
                  </ImageContainer>
                )}
              </Slider>
            </Grid>
          </Grid>
          <Map /> {/* Include the Map component */}
        </PageContainer>
      </FullPageBackground>
    </ThemeProvider>
  );
};

export default Hero;
