import {Card, CardBody, Image,Heading,Link,Stack,Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ChakraCard = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
  <Card maxW='sm' bg='white'>
    <Image
      src={imageSrc}
      alt={`${title}-alt`}
      borderRadius='md'
    />
    <CardBody>
    <Stack spacing={5}>
      <Heading size='md'>{title}</Heading>
      <Text>
        {description}
      </Text>
      <Link>
        See more <FontAwesomeIcon icon={faArrowRight}/>
      </Link>
    </Stack>
    </CardBody>
</Card>
  );
};

export default ChakraCard;
