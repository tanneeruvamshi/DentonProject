import React, { useEffect, useState } from 'react';
import { Typography, Grid, CardContent, ThemeProvider } from '@mui/material';
import { motion } from 'framer-motion';
import vibrantTheme from '../Theme/Theme';
import Slider from 'react-slick';
import {
  PageContainer,
  StoryContainer,
  Heading,
  Text,
  Section,
  DishCard,
  Icon,
  SubHeadingText,
  FullPageBackground,
} from './StyledComponents';
import { faSeedling, faCalendarAlt, faUtensils, faMapMarkerAlt, faClock, faPhone, faStar } from '@fortawesome/free-solid-svg-icons';
import { fetchImage1Url, fetchImage2Url, fetchImage3Url, getPlaceId, fetchGoogleReviews } from '../../services/googleReviews';

const reviewSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  cssEase: 'linear',
};

const FeaturedDishesAndReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [image1Url, setImage1Url] = useState('');
  const [image2Url, setImage2Url] = useState('');
  const [image3Url, setImage3Url] = useState('');

  useEffect(() => {
    const getReviews = async () => {
      const placeId = await getPlaceId();
      console.log('Fetched Place ID:', placeId);
      if (placeId) {
        const fetchedReviews = await fetchGoogleReviews(placeId);
        console.log('Fetched Reviews:', fetchedReviews);
        setReviews(fetchedReviews);
      }
    };
    getReviews();
  }, []);

  useEffect(() => {
    const fetchMedia = async () => {
      const image1Url = await fetchImage1Url();
      console.log('Fetched Image 1 URL:', image1Url);
      setImage1Url(image1Url);

      const image2Url = await fetchImage2Url();
      console.log('Fetched Image 2 URL:', image2Url);
      setImage2Url(image2Url);

      const image3Url = await fetchImage3Url();
      console.log('Fetched Image 3 URL:', image3Url);
      setImage3Url(image3Url);
    };
    fetchMedia();
  }, []);

  const truncateText = (text, length) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
  };

  return (
    <ThemeProvider theme={vibrantTheme}>
      <FullPageBackground>
        <PageContainer>
          <Section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <StoryContainer>
              <Heading
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Icon icon={faSeedling} /> Our Story
              </Heading>
              <Text
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Icon icon={faCalendarAlt} /> Established in 2022, Namaste Denton brings a fusion of traditional flavors and modern culinary techniques to your plate. Our commitment to quality and innovation ensures a memorable dining experience.
              </Text>
              <Text
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Icon icon={faMapMarkerAlt} /> Located in the heart of Denton, we pride ourselves on offering a welcoming atmosphere and a delightful dining experience for all our guests. Come and enjoy a taste of India in Texas!
              </Text>
              <Text
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Icon icon={faClock} /> Open daily from 11 AM to 10 PM.
              </Text>
              <Text
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Icon icon={faPhone} /> For reservations and inquiries, call us at (123) 456-7890.
              </Text>
            </StoryContainer>
          </Section>
          <Section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Typography variant="h2" style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '600', color: '#2C3E50' }}>
              <Icon icon={faUtensils} /> Featured Dishes
            </Typography>
            <Grid container justifyContent="center" spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <DishCard
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <CardContent>
                    <Typography variant="h5">Shrimp Fry</Typography>
                    <Text>A blend of aromatic spices in our homemade curry, served with rice.</Text>
                    <Icon icon={faUtensils} />
                    {image1Url && (
                      <motion.img
                        src={image1Url}
                        alt="Shrimp Fry"
                        style={{ width: '100%', height: 'auto', borderRadius: '10px', marginTop: '10px' }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                    )}
                  </CardContent>
                </DishCard>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <DishCard
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <CardContent>
                    <Typography variant="h5">Butter Chicken</Typography>
                    <Text>Marinated in our special blend of spices and grilled to perfection.</Text>
                    <Icon icon={faUtensils} />
                    {image2Url && (
                      <motion.img
                        src={image2Url}
                        alt="Butter Chicken"
                        style={{ width: '100%', height: 'auto', borderRadius: '10px', marginTop: '10px' }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                    )}
                  </CardContent>
                </DishCard>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <DishCard
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <CardContent>
                    <Typography variant="h5">Ghee Roast Mutton Fry</Typography>
                    <Text>A mouth-watering treat cooked with fragrant spices and clarified butter.</Text>
                    <Icon icon={faUtensils} />
                    {image3Url && (
                      <motion.img
                        src={image3Url}
                        alt="Ghee Roast Mutton Fry"
                        style={{ width: '100%', height: 'auto', borderRadius: '10px', marginTop: '10px' }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                    )}
                  </CardContent>
                </DishCard>
              </Grid>
            </Grid>
          </Section>
          <Section>
            <SubHeadingText variant="h2" style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: '600', color: '#2C3E50' }}>
              <Icon icon={faStar} /> Customer Reviews
            </SubHeadingText>
            <Slider {...reviewSettings}>
              {reviews.map((review, index) => (
                <div key={index}>
                  <CardContent>
                    <Typography variant="body1">{truncateText(review.text, 200)}</Typography>
                    <Typography variant="h6" style={{ fontWeight: 'bold', marginTop: '1rem' }}>{review.author_name}</Typography>
                  </CardContent>
                </div>
              ))}
            </Slider>
          </Section>
        </PageContainer>
      </FullPageBackground>
    </ThemeProvider>
  );
};

export default FeaturedDishesAndReviews;
