import React from 'react';
import { Carousel } from 'react-bootstrap';

// Dummy data for testimonials
const testimonials = [
  {
    id: 1,
    text: "The ambiance and the food were absolutely amazing. Best dining experience we've had in Denton!",
    author: "John Doe",
    location: "Denton, TX"
  },
  {
    id: 2,
    text: "Incredible service and unforgettable flavors. A top spot for date nights!",
    author: "Jane Smith",
    location: "Dallas, TX"
  },
  {
    id: 3,
    text: "Every dish was a delight to the senses. Can't wait to return!",
    author: "Emily Johnson",
    location: "Fort Worth, TX"
  }
];

const TestimonialCarousel = () => {
  return (
    <Carousel>
      {testimonials.map(testimonial => (
        <Carousel.Item key={testimonial.id}>
          <img
            className="d-block w-100"
            src={`https://via.placeholder.com/800x400?text=Testimonial+${testimonial.id}`}
            alt={`Testimonial from ${testimonial.author}`}
          />
          <Carousel.Caption>
            <h3>{testimonial.author}, {testimonial.location}</h3>
            <p>{testimonial.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default TestimonialCarousel;
