require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { S3Client, GetObjectCommand, ListObjectsV2Command } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const stream = require('stream');

const app = express();
const PORT = 5000;

const API_KEY = process.env.MY_API_KEY;

const s3Client = new S3Client({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
  },
});

app.use(cors());

const imageFiles = [
  'WhatsApp Image 2024-05-18 at 09.54.17.jpeg',
  'WhatsApp Image 2024-05-18 at 09.54.04.jpeg',
  'WhatsApp Image 2024-05-18 at 09.54.07 (2).jpeg',
]
// Helper function to stream S3 data to response
const streamToBuffer = (stream) =>
  new Promise((resolve, reject) => {
    const chunks = [];
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('error', reject);
    stream.on('end', () => resolve(Buffer.concat(chunks)));
  });

// Endpoint to get the restaurant logo
app.get('/api/logo', async (req, res) => {
  const params = {
    Bucket: 'namastedenton',
    Key: 'restaurantLogo.jpg',
  };

  try {
    const command = new GetObjectCommand(params);
    const logoUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    res.json({ logoUrl });
  } catch (err) {
    console.error('Error fetching logo:', err);
    res.status(500).json({ error: 'Failed to retrieve logo' });
  }
});
app.get('/api/image1', async (req, res) => {
  const params = {
    Bucket: 'namastedenton',
    Key: 'images/WhatsApp Image 2024-05-18 at 09.54.17.jpeg',
  };

  try {
    const command = new GetObjectCommand(params);
    const image1 = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    res.json({ image1 });
  } catch (err) {
    console.error('Error fetching logo:', err);
    res.status(500).json({ error: 'Failed to retrieve image1' });
  }
});
app.get('/api/image2', async (req, res) => {
  const params = {
    Bucket: 'namastedenton',
    Key: 'images/WhatsApp Image 2024-05-18 at 09.54.04.jpeg',
  };

  try {
    const command = new GetObjectCommand(params);
    const image2 = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    res.json({ image2 });
  } catch (err) {
    console.error('Error fetching image2:', err);
    res.status(500).json({ error: 'Failed to retrieve image2' });
  }
});

app.get('/api/image3', async (req, res) => {
  const params = {
    Bucket: 'namastedenton',
    Key: 'images/WhatsApp Image 2024-05-18 at 09.54.07 (2).jpeg',
  };

  try {
    const command = new GetObjectCommand(params);
    const image3 = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    res.json({ image3 });
  } catch (err) {
    console.error('Error fetching image3:', err);
    res.status(500).json({ error: 'Failed to retrieve image3' });
  }
});



// Endpoint to get a video
app.get('/api/video', async (req, res) => {
  const params = {
    Bucket: 'namastedenton',
    Key: 'videos/video1.mp4',
  };

  try {
    const command = new GetObjectCommand(params);
    const videoUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    res.json({ videoUrl });
  } catch (err) {
    console.error('Error fetching video:', err);
    res.status(500).json({ error: 'Failed to retrieve video' });
  }
});

// Endpoint to get all other images
app.get('/api/images', async (req, res) => {
  try {
    const imageUrls = await Promise.all(imageFiles.map(async (imageFile) => {
      const params = {
        Bucket: 'namastedenton',
        Key: imageFile,
      };
      const command = new GetObjectCommand(params);
      try {
        const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
        return url;
      } catch (err) {
        console.error(`Error fetching URL for image: ${imageFile}`, err);
        return { imageFile, url: null };
      }
    }));

    res.json({ images: imageUrls });
  } catch (err) {
    console.error('Error fetching images:', err);
    res.status(500).json({ error: 'Failed to retrieve images' });
  }
});
// Existing functionality
app.get('/api/placeid', async (req, res) => {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json', {
      params: {
        input: 'Namaste Denton',
        inputtype: 'textquery',
        fields: 'place_id',
        key: MYAPI_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching Place ID:', error);
    res.status(500).send('Error fetching Place ID');
  }
});

app.get('/api/reviews', async (req, res) => {
  const placeId = req.query.placeId;
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
      params: {
        place_id: placeId,
        fields: 'reviews',
        key: API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).send('Error fetching reviews');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
