import {HStack,Card, CardBody, Image,Heading,Link,Stack,Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const DishCard = ({ title, description, imageSrc, price,className }) => {
 return (
  <Card className={className}>
    <Image
      src={imageSrc}
      alt={`${title}-alt`}
      className = "dish-card-image"
    />
    <CardBody className="dish-card-content">
    <Stack spacing={27}>
      <HStack justifyContent="space-between" >
        <Heading className="dish-card-title">{title}</Heading>
        <Heading className="dish-card-price">{price}</Heading>
      </HStack>
      <Text className="dish-card-description">
        {description}
      </Text>
      <Link>
        <HStack spacing={10}>
          <Text className="dish-card-order">
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

export default DishCard;
