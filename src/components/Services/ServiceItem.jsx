import {
  VStack,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { BiBriefcase, BiTime, BiDollar } from "react-icons/bi";

const ServiceItem = ({ service }) => {
  return (
    <Flex justify='center' align='center'>
      <Stack justify='center' width="300px" bg="white" boxShadow="xl" borderRadius="xl">
        <Image src={service.image} h='170' alt='service' />

        <VStack p='4' align='left'>
          <Text mt="-1" fontWeight="extrabold" fontSize="18px" color="pink.500">
            ${service.price}
            <span style={{ fontSize: 12, color: "grey", fontWeight: "normal" }}>
              /session
            </span>
          </Text>

          <Heading fontSize="24px" letterSpacing="tight">
            {service.name}
          </Heading>

          <Text fontSize="13px" color="grey">
            {service.description}
          </Text>

          <Divider my="2.5" />

          <HStack spacing="5">
            <HStack>
              <BiBriefcase style={{ color: "#D53F8C" }} />
              <Text fontSize="12px">{service.type}</Text>
            </HStack>

            <HStack>
              <BiTime style={{ color: "#D53F8C" }} />
              <Text fontSize="12px">{service.duration}</Text>
            </HStack>

            <HStack>
              <BiDollar style={{ color: "#D53F8C" }} />
              <Text fontSize="12px">{service.price}</Text>
            </HStack>
          </HStack>
        </VStack>
      </Stack>
    </Flex>
  );
};

export default ServiceItem;
