import React from 'react';
import { Button, Image, Segment } from 'semantic-ui-react';

// Sample data for events
const events = [
    {
        id: 1,
        title: "Live Music Nights",
        description: "Enjoy live music from local bands every Friday and Saturday night.",
        imageUrl: "https://media.giphy.com/media/3o7aD5EYkuR52z7E1K/giphy.gif"
    },
    {
        id: 2,
        title: "Wine Tasting Event",
        description: "Explore fine wines with our sommelier every first Sunday of the month.",
        imageUrl: "https://media.giphy.com/media/l0HlvKbqK5jeOdpby/giphy.gif"
    },
    {
        id: 3,
        title: "Chef's Special Dinner",
        description: "A special gourmet dinner prepared by our head chef on the last weekend of each month.",
        imageUrl: "https://media.giphy.com/media/l0HlGFIDqSvBEyHio/giphy.gif"
    },
    {
        id: 4,
        title: "Birthday Parties",
        description: "Celebrate your special day with us. Book your birthday party now!",
        imageUrl: "https://media.giphy.com/media/3oEjHW5flHUgGhIRaI/giphy.gif"
    },
    {
        id: 5,
        title: "Weddings",
        description: "Plan your dream wedding with us. Our venue is perfect for your special day.",
        imageUrl: "https://media.giphy.com/media/l0IyeGnr09fXfxooQ/giphy.gif"
    },
    {
        id: 6,
        title: "Anniversaries",
        description: "Celebrate your milestones with us. Make your anniversary unforgettable.",
        imageUrl: "https://media.giphy.com/media/2gRuFLjZ8GPrq/giphy.gif"
    },
    {
        id: 7,
        title: "Get-togethers",
        description: "Gather your friends and family for a memorable get-together. Reserve your table now!",
        imageUrl: "https://media.giphy.com/media/Tmv1UpQGf17uLJt8Q1/giphy.gif"
    },
    {
        id: 8,
        title: "Special Occasions",
        description: "Make any occasion special with us. Our venue is perfect for all your celebrations.",
        imageUrl: "https://media.giphy.com/media/7TfClZmBgRZs/giphy.gif"
    }
];

const EventCarousel = () => {
    const [slideIndex, setSlideIndex] = React.useState(0);

    const nextSlide = () => {
        if (slideIndex !== events.length - 1) {
            setSlideIndex(slideIndex + 1);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 0) {
            setSlideIndex(slideIndex - 1);
        }
    };

    return (
        <Segment.Group>
            <Segment.Group horizontal>
                <Button icon="chevron left" onClick={prevSlide} />
                <Button icon="chevron right" onClick={nextSlide} />
            </Segment.Group>
            <Segment.Group horizontal>
                {events.map((event, index) => (
                    <Segment key={event.id} textAlign="center" style={{ display: index === slideIndex ? 'block' : 'none' }}>
                        <Image src={event.imageUrl} size="medium" rounded />
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                    </Segment>
                ))}
            </Segment.Group>
        </Segment.Group>
    );
};

export default EventCarousel;