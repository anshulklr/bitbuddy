import { Box, Container, Heading, VStack, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import BitBuddyLogo from '../components/BitBuddyLogo';

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleStart = () => {
    router.push('/dashboard');
  };

  return (
    <Box minH="100vh" bg="orange.50">
      <Container maxW="container.xl" py={10}>
        {/* Header with BitBuddy Mascot */}
        <VStack spacing={8} textAlign="center">
          <BitBuddyLogo width="250px" height="250px" />
          <Heading
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            color="orange.400"
          >
            Welcome to BitBuddy
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Your journey to financial freedom starts here!
          </Text>
        </VStack>

        {/* Main Content */}
        <VStack
          spacing={8}
          mt={10}
          p={6}
          bg="white"
          borderRadius="xl"
          boxShadow="xl"
        >
          <Heading size="lg">Get Started</Heading>
          <VStack spacing={4} w="full" maxW="md">
            <Button
              colorScheme="orange"
              size="lg"
              w="full"
              onClick={handleStart}
            >
              Start Your Journey
            </Button>
            <Button
              variant="outline"
              colorScheme="orange"
              size="lg"
              w="full"
            >
              Learn More
            </Button>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}