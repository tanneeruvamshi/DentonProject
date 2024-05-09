import React from 'react';
import { motion } from 'framer-motion';
import { Row, Col, Button } from 'antd';
import logo from '../../images/restaurant_1697055311.jpg'; 

const Hero = () => {
  return (
    <Row style={{ background: 'white', color: 'black', minHeight: '100vh' }} align="middle">
      <Col xs={24} sm={24} md={12}>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ textAlign: 'center', padding: '2rem' }}
        >
          <motion.img
            src={logo}
            alt="Restaurant Logo"
            width="200"
            height="200"
            style={{ marginBottom: '2rem' }}
            whileHover={{ scale: 1.1 }}
          />
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
          >
            Welcome to Namaste Denton 
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{ fontSize: '1.2rem', marginBottom: '2rem' }}
          >
            Experience the best flavors crafted with passion.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button
              type="primary"
              size="large"
              onClick={() => window.location.href = "https://order.toasttab.com/online/namastedenton"}
              style={{ borderRadius: '20px' }}
            >
              Order Now
            </Button>
          </motion.div>
        </motion.div>
      </Col>
    </Row>
  );
};

export default Hero;
