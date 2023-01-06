import {HStack,Card, CardBody, Image,Heading,Link,Stack,Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ChakraCard = ({ title, description, imageSrc, price }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
  <Card>
    <Image
      src={imageSrc}
      alt={`${title}-alt`}
      borderRadius='md'
      className = "chakra-card-image"
    />
    <CardBody className="chakra-card-content">
    <Stack spacing={27}>
      <HStack justifyContent="space-between" >
        <Heading className="chakra-card-title">{title}</Heading>
        <Heading className="chakra-card-price">{price}</Heading>
      </HStack>
      <Text className="chakra-card-description">
        {description}
      </Text>
      <Link>
        <HStack spacing={10}>
          <Text className="chakra-card-order">
             Order a Delivery
          </Text>
          <FontAwesomeIcon icon={faBicycle} />
        </HStack> 
      </Link>
    </Stack>
    </CardBody>
</Card>
  );
};

export default ChakraCard;
