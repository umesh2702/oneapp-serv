import { Stack, VStack, Heading, Text, Box, Button } from "@chakra-ui/react";
import { BiTime } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { ServiceContext } from "./context/ServiceContext";

const BookingConfirmation = () => {
  const { serviceId } = useParams();
  const { services } = useContext(ServiceContext);

  const searchedService = services.find((service) => service.id == serviceId);

  const currentDateTime = new Date();
  const tomorrowDateTime = new Date();
  tomorrowDateTime.setDate(tomorrowDateTime.getDate() + 1);
  tomorrowDateTime.setHours(9, 0, 0, 0);

  return (
    <Stack direction="column" align="center" justify="center" minHeight="100vh" px="4">
      <VStack spacing="6">
        <Box textAlign="center">
          <Heading as="h1" fontSize="2xl" mb="2">
            Booking Confirmed
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Your booking for {searchedService.name} is confirmed.
          </Text>
        </Box>

        <Box textAlign="center">
          <BiTime style={{ color: "#D53F8C", fontSize: "2rem" }} />
          <Text fontSize="lg" color="gray.600">
            Your appointment is scheduled for tomorrow, from 9am to 6pm.
          </Text>
        </Box>

    <Link to='/'>    <Button colorScheme="pink" >
          Go Back
        </Button>
        </Link>
      </VStack>
    </Stack>
  );
};

export default BookingConfirmation;
