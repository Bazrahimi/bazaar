import { Box, Heading, Center, Text } from "@chakra-ui/react";

const NoMatch = () => {
  return (
    <Center h="100vh" bg="gray.100">
      <Box
        borderRadius="lg"
        p={10}
        textAlign="center"
        shadow="xl"
        bg="white"
      >
        <Heading mb={4}>404 Page Not Found</Heading>
        <Text fontSize="6xl">
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </Text>
      </Box>
    </Center>
  );
};

export default NoMatch;
