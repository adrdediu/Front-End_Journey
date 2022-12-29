import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  
  const [isLinkClicked,setIsLinkClicked] = useState(false)
  const [yScrollPos,setYScrollPos] = useState(0)
  const [prevYScrollPos,setPrevYScrollPos] = useState(0);
  const [navZIndex,setNavZIndex] = useState(2); // it means it is on top

  const handleScroll = (e) => {

    setYScrollPos(window.pageYOffset);

    if((prevYScrollPos-yScrollPos > 0 && prevYScrollPos > yScrollPos) || yScrollPos < 10) {
      setNavZIndex(2);
    } else if(!isLinkClicked) {
      setNavZIndex(-1);
    }
    setPrevYScrollPos(yScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleClick = (anchor) => {
    setIsLinkClicked(true);
    //Line 40 replace method applied to the anchor.target.id (ex: projects-link) returns only projects word
    const id = `${anchor.target.id.replace("-link","")}-section`;
    const element = document.getElementById(id);
    if (element) {
      const yOffset=-90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
    //Makes the bar possible to dissapear after 1 second 
    setTimeout(()=> {
      setIsLinkClicked(false);
    },1000)
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={navZIndex}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={2} >
            {socials.map((obj,index) => {
              return(
                <a key={index} id={index} href={obj.url} ><FontAwesomeIcon icon = {obj.icon} size="2x" /></a>
               )
              })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a key="projects-link" id="projects-link" href="/#projects" onClick={handleClick} >Projects</a>
              <a key="contactme-link" id="contactme-link" href="/#contact-me" onClick={handleClick}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
