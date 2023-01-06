import React from "react";
import {VStack,Heading,HStack,Button } from "@chakra-ui/react";

import ChakraCard from "./Card";

import BruschettaSrc from "../assets/images/bruschetta.jpg"
import LemonDessertSrc from "../assets/images/lemonDessert.jpg"
import GreekSaladSrc from "../assets/images/greekSalad.jpg"

const Promo = () => {
  return (
    <section className="promo-section">
    <HStack justifyContent="space-between" maxW="940px" margin="0 auto" marginTop="150px">
        <Heading className="promo-title">This weeks specials!</Heading>    
        <Button className="promo-menu-button">Online Menu</Button>
    </HStack>
      <HStack spacing={29} justifyContent="space-between" maxW="940px" margin="0 auto" marginTop="69" >
          <ChakraCard 
              title="Greek Salad" 
              imageSrc={GreekSaladSrc}
              price="$12.99" 
              description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
              className="chackra-card"
          />
          <ChakraCard 
              title="Bruschetta" 
              imageSrc={BruschettaSrc}
              price="$5.99" 
              description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
              className="chackra-card"
          />
          <ChakraCard 
              title="Lemon Dessert" 
              imageSrc={LemonDessertSrc}
              price="$4.99" 
              description="This comes straight from
              grandma’s recipe book, every
              last ingredient has been sourced and it is as authentic as it can be imagined."
              className="chackra-card"
          />
        </HStack>  
</section>
  );
};

export default Promo;
