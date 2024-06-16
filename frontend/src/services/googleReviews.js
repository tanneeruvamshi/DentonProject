// src/services/googleReviews.js

import axios from 'axios';

export const getPlaceId = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/placeid');
    console.log('Place ID Response:', response.data);
    return response.data.candidates[0]?.place_id;
  } catch (error) {
    console.error('Error fetching Place ID:', error);
    return null;
  }
};

export const fetchGoogleReviews = async (placeId) => {
  try {
    const response = await axios.get('http://localhost:5000/api/reviews', {
      params: { placeId }
    });
    console.log('Reviews Response:', response.data);
    return response.data.result?.reviews || [];
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return [];
  }
};

export const fetchLogoUrl = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/logo');
    console.log('Logo URL Response:', response.data);
    return response.data.logoUrl;
  } catch (error) {
    console.error('Error fetching logo URL:', error);
    return '';
  }
};

export const fetchImage1Url = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/image1');
    console.log('image1 URL Response:', response.data);
    return response.data.image1;
  } catch (error) {
    console.error('Error fetching image1 URL:', error);
    return '';
  }
};
export const fetchImage2Url = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/image2');
    console.log('image1 URL Response:', response.data);
    return response.data.image2;
  } catch (error) {
    console.error('Error fetching image1 URL:', error);
    return '';
  }
};
export const fetchImage3Url = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/image3');
    console.log('image1 URL Response:', response.data);
    return response.data.image3;
  } catch (error) {
    console.error('Error fetching image1 URL:', error);
    return '';
  }
};

export const fetchVideoUrl = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/video');
    console.log('Video URL Response:', response.data);
    return response.data.videoUrl;
  } catch (error) {
    console.error('Error fetching video URL:', error);
    return '';
  }
};



// export const fetchImageUrls = async () => {
//   try {
//     const response = await axios.get('http://localhost:5000/api/images');
//     console.log('Image URLs Response:', response.data);
//     if (response.data.images) {
//       response.data.images.forEach((image) => {
//         console.log(`Key: ${image.key}, URL: ${image.url}`);
//       });
//     }
//     return response.data.images;
//   } catch (error) {
//     console.error('Error fetching image URLs:', error);
//     return [];
//   }
// };
