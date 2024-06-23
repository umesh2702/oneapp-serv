import { Stack, VStack, Heading, Text, Box, HStack, Image, Input, Textarea, Button } from "@chakra-ui/react"
import { BiBriefcase, BiTime, BiDollar } from "react-icons/bi";

import { useContext } from "react";
import { useParams } from "react-router-dom";

import { ServiceContext } from "../../context/ServiceContext";
import Form from "./Form";

const ServiceDetail = () => {

  const { serviceId } = useParams();
  const { services } = useContext(ServiceContext);

  const searchedService = services.find(service => service.id == serviceId);

  return (
    <>
      <Stack direction={{ base: 'column', md: 'row' }} justify='space-between' align={{ md: 'center' }} my='28px'>
        <Box>
          <Heading fontSize='22px'>{searchedService.name}</Heading>
          <Text fontSize='15px'>{searchedService.description}</Text>
        </Box>
        
        <HStack>
          <Text px='3' borderRadius='full' bg='green.300'>{searchedService.type}</Text>
          <Text px='3' borderRadius='full' bg='purple.300'>{searchedService.country}</Text>
        </HStack>

        <Text fontWeight="extrabold" fontSize="20px" color="pink.500">${searchedService.price}</Text>
      </Stack>

      <Stack direction={{ base:'column', lg: 'row' }} gap='6' align='flex-start' justify='space-evenly'>
        <VStack align='left' maxW='640px'>
          <Image src={searchedService.image} alt='service' />

          <Stack py='10px' spacing={{ sm: '3', md: '5' }} direction={{ base: 'column', md: 'row' }}>
            <HStack>
              <BiBriefcase style={{ color: "#D53F8C" }} />
              <Text fontSize="14px">{searchedService.type}</Text>
            </HStack>

            <HStack>
              <BiTime style={{ color: "#D53F8C" }} />
              <Text fontSize="14px">{searchedService.duration}</Text>
            </HStack>

            <HStack>
              <BiDollar style={{ color: "#D53F8C" }} />
              <Text fontSize="14px">${searchedService.price}</Text>
            </HStack>
          </Stack>
        
          <Text fontSize='15px'>{searchedService.description}</Text>
      
        </VStack>
        
        <Form searchedService={searchedService} />
      </Stack>
    </>
  )
}

export default ServiceDetail;
