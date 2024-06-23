import { Center, Grid, Heading, Spinner, Stack } from '@chakra-ui/react';
import { useContext } from "react";
import { Link } from 'react-router-dom';

import { ServiceContext } from "../../context/ServiceContext";
import ServiceItem from './ServiceItem';

const ServiceList = () => {
  const { services, isLoading } = useContext(ServiceContext);

  if(isLoading){
    return (
      <Center>
        <Spinner align='center' color='pink.500' />
      </Center>
    )
  }

  if (services.length === 0) {
    return (
      <Stack maxH='400px'>
        <Heading size="lg" p={{base: '6', md: '10'}} align="center">
          Oops... Can try another search?
        </Heading>
      </Stack>
    );
  }

  return (
    <Grid my='3' rowGap='4' gridTemplateColumns='repeat(auto-fit, minmax(300px, 1fr))' 
    >
      {
        services.map(item=>
          <Link to={`/service-details/${item.id}`} key={item.id}>
            <ServiceItem key={item.id} service={item} />
          </Link>
        )
      }
    </Grid>
  )
}

export default ServiceList;
