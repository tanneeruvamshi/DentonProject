import React from 'react';
import { Box, Image, Text, Flex, Button, useBreakpointValue } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

// Sample data for events
const events = [
    {
        id: 1,
        title: "Live Music Nights",
        description: "Enjoy live music from local bands every Friday and Saturday night.",
        imageUrl: "https://example.com/live-music.jpg"
    },
    {
        id: 2,
        title: "Wine Tasting Event",
        description: "Explore fine wines with our sommelier every first Sunday of the month.",
        imageUrl: "https://example.com/wine-tasting.jpg"
    },
    {
        id: 3,
        title: "Chef's Special Dinner",
        description: "A special gourmet dinner prepared by our head chef on the last weekend of each month.",
        imageUrl: "https://example.com/chef-special.jpg"
    }
];

const EventCarousel = () => {
    const [slideIndex, setSlideIndex] = React.useState(0);
    const slidesToShow = useBreakpointValue({ base: 1, md: 2, lg: 3 });

    const nextSlide = () => {
        if (slideIndex !== events.length - slidesToShow) {
            setSlideIndex(slideIndex + 1);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 0) {
            setSlideIndex(slideIndex - 1);
        }
    };

    return (
        <Box position="relative" width="full" overflow="hidden">
            <Flex transform={`translateX(-${slideIndex * (100 / slidesToShow)}%)`} transition="transform 0.6s ease-in-out">
                {events.map(event => (
                    <Box key={event.id} flex="none" width={`${100 / slidesToShow}%`} p={5}>
                        <Image borderRadius="lg" src={event.imageUrl} alt={event.title} />
                        <Text fontSize="xl" fontWeight="bold" mt={2}>{event.title}</Text>
                        <Text fontSize="md" mt={1}>{event.description}</Text>
                    </Box>
                ))}
            </Flex>
            <Button position="absolute" left="0" top="50%" transform="translateY(-50%)" onClick={prevSlide}>
                <ChevronLeftIcon w={8} h={8} />
            </Button>
            <Button position="absolute" right="0" top="50%" transform="translateY(-50%)" onClick={nextSlide}>
                <ChevronRightIcon w={8} h={8} />
            </Button>
        </Box>
    );
};

export default EventCarousel;
