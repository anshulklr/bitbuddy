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
  Icon,
} from '@chakra-ui/react';
import { useState } from 'react';

const modules = [
  {
    id: 1,
    title: "Money Basics",
    description: "Learn the fundamentals of money management",
    lessons: [
      {
        id: 1,
        title: "Understanding Money",
        reward: 1000,
        timelock: "1 month",
        completed: false,
      },
      {
        id: 2,
        title: "Smart Spending",
        reward: 1500,
        timelock: "1 month",
        completed: false,
      },
    ],
  },
  {
    id: 2,
    title: "Saving Goals",
    description: "Set and achieve your financial goals",
    lessons: [
      {
        id: 1,
        title: "Emergency Fund",
        reward: 2000,
        timelock: "3 months",
        completed: false,
      },
      {
        id: 2,
        title: "Vacation Planning",
        reward: 2500,
        timelock: "6 months",
        completed: false,
      },
    ],
  },
];

export default function LearningModule() {
  const [currentModule, setCurrentModule] = useState(0);
  const [earnedSats, setEarnedSats] = useState(0);
  const [lockedSats, setLockedSats] = useState(0);
  
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const completeLesson = (reward) => {
    setEarnedSats(prev => prev + reward);
    setLockedSats(prev => prev + reward);
  };

  return (
    <Container maxW="container.xl" py={8}>
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
        {modules.map((module, idx) => (
          <Box
            key={module.id}
            p={6}
            bg={cardBg}
            borderRadius="lg"
            borderWidth="1px"
            borderColor={borderColor}
          >
            <VStack align="stretch" spacing={4}>
              <Heading size="md">{module.title}</Heading>
              <Text color="gray.500">{module.description}</Text>
              
              {/* Lessons */}
              <VStack align="stretch" spacing={4}>
                {module.lessons.map((lesson) => (
                  <Box
                    key={lesson.id}
                    p={4}
                    borderWidth="1px"
                    borderRadius="md"
                    borderColor={borderColor}
                  >
                    <HStack justify="space-between">
                      <VStack align="start" spacing={1}>
                        <Text fontWeight="bold">{lesson.title}</Text>
                        <HStack>
                          <Badge colorScheme="orange">
                            {lesson.reward} sats
                          </Badge>
                          <Badge colorScheme="purple">
                            {lesson.timelock} lock
                          </Badge>
                        </HStack>
                      </VStack>
                      <Button
                        colorScheme="orange"
                        size="sm"
                        onClick={() => completeLesson(lesson.reward)}
                      >
                        Start Lesson
                      </Button>
                    </HStack>
                  </Box>
                ))}
              </VStack>
            </VStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
}