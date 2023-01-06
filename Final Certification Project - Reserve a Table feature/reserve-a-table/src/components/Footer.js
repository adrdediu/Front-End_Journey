import {Box,SimpleGrid,Text, VStack,HStack, UnorderedList, ListItem} from "@chakra-ui/react"
import LogoFooter from "../assets/images/logoFooter.png"
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (
        <footer className="footer">
            <HStack justifyContent="space-between" className="footer-content" alignItems="start">
            <Box >
                <img src={LogoFooter} alt="footer-logo" className="footer-logo"  />
            </Box>
            <VStack alignItems="start" justifyContent="center">
                <Text className="footer-categories-title">Navigation</Text>
                <nav className="nav-bot">
                    <a href="/" className="nav-item">Home</a>
                    <a href="/about" className="nav-item">About</a>
                    <a href="/menu" className="nav-item">Menu</a>
                    <a href="/reservations" className="nav-item">Reservations</a>
                    <a href="/order-online" className="nav-item">Order Online</a>
                    <a href="/log-in" className="nav-item">Log In</a>
                </nav>
            </VStack>
            <VStack alignItems="start" justifyContent="center">
                <Text className="footer-categories-title">Contact</Text>
                <UnorderedList listStyleType="none" >
                    <ListItem className="nav-bot-list-item" >Address</ListItem>
                    <ListItem className="nav-bot-list-subitem">Chicago, Illinois</ListItem>
                    <ListItem className="nav-bot-list-item">Phone Number</ListItem>
                    <ListItem className="nav-bot-list-subitem">+1 312 000 000</ListItem>
                    <ListItem className="nav-bot-list-item">Email</ListItem>
                    <ListItem className="nav-bot-list-subitem">little_lemon@gmail.com</ListItem>
                </UnorderedList>
            </VStack>
            <VStack alignItems="start" justifyContent="center">
                <Text className="footer-categories-title">Social Media Links</Text>
                <SimpleGrid columns={2} spacing = {10}>
                    <Box class="social-icon">
                        <SocialIcon url="https://wwww.instagram.com/littlelemon"/>
                    </Box>
                    <Box class="social-icon">
                        <SocialIcon url="https://linkedin.com/in/littlelemon" />
                    </Box>
                    <Box class="social-icon">
                        <SocialIcon url="https://whatsapp.com/littlelemon"/>
                    </Box>
                    <Box class="social-icon">
                        <SocialIcon url="https://twitter.com/littlelemon"/>
                    </Box>
                    <Box class="social-icon">
                        <SocialIcon url="https://facebook.com/littlelemon"/>
                    </Box>
                    <Box class="social-icon">
                        <SocialIcon url="https://sharethis.com/littlelemon"/>
                    </Box>
                </SimpleGrid>
            </VStack>
            </HStack>            
        </footer>
    )
}