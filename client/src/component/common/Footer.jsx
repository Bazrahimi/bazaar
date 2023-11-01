import { Box, Flex, Text, Image, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" p={4} bg="teal.700" direction="column" alignItems="center">
        
    <Flex marginBottom={2}>
      <Text as="a" href="#" color="teal.100" marginRight={2}>Contact Us</Text>
      <Text as="a" href="#" color="teal.100" marginRight={2}>Terms of Service</Text>
      <Text as="a" href="#" color="teal.100">Privacy Policy</Text>
    </Flex>
    
    <Flex>
      <Link to="#"><Image src="../src/assets/images/icons/facebook/Facebook_Logo_(2019).png" alt="Facebook" w="30px" marginRight={5} /></Link>
      <Link to="#"><Image src="../../src/assets/images/icons/twitter/Logo_of_Twitter.svg.png" alt="Twitter" w="30px" marginRight={5} /></Link>
      <Link to="#"><Image src="../../src/assets/images/icons/instagram/Instagram.png" alt="Instagram" w="30px" /></Link>
    </Flex>

  </Flex>
  );
}

export default Footer;
