import React from 'react';
import { Container, Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#212121', color: 'white', padding: '2rem 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Contact Us</Typography>
            <Typography>
              <Link href="mailto:vamshi.tanneeru@gmail.com" color="inherit">vamshi.tanneeru@gmail.com</Link><br />
              <Link href="tel:+19405141046" color="inherit">(940) 514-1046</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Quick Links</Typography>
            <Typography>
              <Link href="#menu" color="inherit">Menu</Link><br />
              <Link href="#reservation" color="inherit">Reservation</Link><br />
              <Link href="#contact" color="inherit">Contact</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Follow Us</Typography>
            <Typography>
              <Link href="https://facebook.com" color="inherit">Facebook</Link><br />
              <Link href="https://www.instagram.com/namastedenton/" color="inherit">Instagram</Link><br />
              <Link href="https://twitter.com" color="inherit">Twitter</Link>
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" style={{ marginTop: '2rem', color: 'rgba(255, 255, 255, 0.7)' }}>
          &copy; {new Date().getFullYear()} Namate Denton. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
