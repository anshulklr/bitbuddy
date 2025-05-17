import {
  Box,
  VStack,
  Heading,
  Text,
  Progress,
  Button,
  Grid,
  GridItem,
  Badge,
  useColorModeValue,
  Container,
  HStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import Module1Lessons from './Module1Lessons';

const modules = [
  {
    id: 1,
    title: "Money Basics for Beginners",
    description: "Learn about money in a fun and simple way!",
    totalLessons: 4,
    totalRewards: 3750,
  },
  {
    id: 2,
    title: "Saving is Super!",
    description: "Coming soon: Learn the magic of saving money!",
    totalLessons: 4,
    totalRewards: 4000,
    comingSoon: true,
  },
  {
    id: 3,
    title: "Bitcoin Adventure",
    description: "Coming soon: Start your Bitcoin journey!",
    totalLessons: 4,
    totalRewards: 5000,
    comingSoon: true,
  },
];

export default function LearningModule() {
  const [selectedModule, setSelectedModule] = useState(null);
  const [earnedSats, setEarnedSats] = useState(0);
  const [lockedSats, setLockedSats] = useState(0);
  
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Container maxW="container.xl" py={8}>
      {selectedModule ? (
        <VStack spacing={8}>
          <HStack w="full" justify="space-between">
            <Heading size="lg">{modules[selectedModule - 1].title}</Heading>
            <Button
              variant="outline"
              colorScheme="orange"
              onClick={() => setSelectedModule(null)}
            >
              Back to Modules
            </Button>
          </HStack>
          <Module1Lessons />
        </VStack>
      ) : (
        <>
          {/* Stats Overview */}
          <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={8}>
            <GridItem>
              <Box p={6} bg={cardBg} borderRadius="lg" borderWidth="1px">
                <VStack align="start">
                  <Text fontSize="sm" color="gray.500">Total Earned</Text>
                  <Heading size="lg">{earnedSats} sats</Heading>
                </VStack>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={6} bg={cardBg} borderRadius="lg" borderWidth="1px">
                <VStack align="start">
                  <Text fontSize="sm" color="gray.500">Locked Until</Text>
                  <Heading size="lg">Various Dates</Heading>
                </VStack>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={6} bg={cardBg} borderRadius="lg" borderWidth="1px">
                <VStack align="start">
                  <Text fontSize="sm" color="gray.500">Progress</Text>
                  <Progress value={40} w="full" colorScheme="orange" />
                </VStack>
              </Box>
            </GridItem>
          </Grid>

          {/* Learning Modules */}
          <VStack spacing={8} align="stretch">
            {modules.map((module) => (
              <Box
                key={module.id}
                p={6}
                bg={cardBg}
                borderRadius="lg"
                borderWidth="1px"
                borderColor={borderColor}
                opacity={module.comingSoon ? 0.7 : 1}
              >
                <VStack align="stretch" spacing={4}>
                  <HStack justify="space-between">
                    <Heading size="md">{module.title}</Heading>
                    {module.comingSoon && (
                      <Badge colorScheme="purple">Coming Soon</Badge>
                    )}
                  </HStack>
                  <Text color="gray.500">{module.description}</Text>
                  
                  <HStack spacing={4}>
                    <Badge colorScheme="blue">
                      {module.totalLessons} Lessons
                    </Badge>
                    <Badge colorScheme="orange">
                      {module.totalRewards} sats reward
                    </Badge>
                  </HStack>

                  <Button
                    colorScheme="orange"
                    onClick={() => !module.comingSoon && setSelectedModule(module.id)}
                    isDisabled={module.comingSoon}
                  >
                    {module.comingSoon ? "Coming Soon!" : "Start Learning"}
                  </Button>
                </VStack>
              </Box>
            ))}
          </VStack>
        </>
      )}
    </Container>
  );
}