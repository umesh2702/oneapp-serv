import { VStack, Box, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Form = ({ searchedService }) => {
    const navigate = useNavigate();

    const handleBookNow = () => {
        // Simulate booking confirmation and navigate to confirmation page
        navigate(`/confirm-booking/${searchedService.id}`);
    };

    return (
        <VStack border='1px' borderColor='pink.100' boxShadow='md' px='5' py='6' w='100%' maxW='400px'>
            <Box>
                <Text mb='2' fontWeight='bold' fontSize='lg'>
                    {searchedService.name}
                </Text>
                
                <Text fontSize='sm' color='gray.600'>
                    {searchedService.description}
                </Text>
                <Text mb='2' fontWeight='bold' fontSize='lg'>
                    {searchedService.contact.phone}
                </Text>
                <Text mt='2' fontSize='md'>
                    <strong>Price:</strong> ${searchedService.price} per {searchedService.duration}
                </Text>
            </Box>
            <Button w='60%' mt='3' colorScheme='blue' onClick={handleBookNow}>
                Book Now
            </Button>
        </VStack>
    );
};

export default Form;
