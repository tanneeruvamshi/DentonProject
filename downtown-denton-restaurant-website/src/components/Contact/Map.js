import React from 'react';

const Map = () => {
  return (
    <div style={{ width: '100%', height: '400px', marginBottom: '20px' }}>
      <iframe
        title="Downtown Denton Restaurant Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.2151991050213!2d-97.13419268424718!3d32.71160298099134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7970b4d07bed%3A0xf571d6d19b9b40f5!2sTwilite%20Lounge%20Fort%20Worth!5e0!3m2!1sen!2sus!4v1640627521374!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
