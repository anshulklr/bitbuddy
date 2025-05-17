import {
  Box,
  VStack,
  Heading,
  Text,
  Progress,
  Button,
  Grid,
  GridItem,
  useColorModeValue,
  Container,
  HStack,
  Input,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function Goals() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Dream Wedding",
      target: 5000000, // in sats
      current: 150000,
      lockPeriod: "12 months",
    },
    {
      id: 2,
      title: "Emergency Fund",
      target: 2000000,
      current: 500000,
      lockPeriod: "6 months",
    },
  ]);

  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading size="lg">Your Saving Goals</Heading>

        {/* Goals Grid */}
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
          {goals.map((goal) => (
            <GridItem key={goal.id}>
              <Box
                p={6}
                bg={cardBg}
                borderRadius="lg"
                borderWidth="1px"
                borderColor={borderColor}
              >
                <VStack align="stretch" spacing={4}>
                  <Heading size="md">{goal.title}</Heading>
                  <Text>Target: {goal.target} sats</Text>
                  <Text>Locked for: {goal.lockPeriod}</Text>
                  <Progress
                    value={(goal.current / goal.target) * 100}
                    colorScheme="orange"
                    borderRadius="full"
                  />
                  <Text textAlign="right">
                    {goal.current} / {goal.target} sats
                  </Text>
                </VStack>
              </Box>
            </GridItem>
          ))}
        </Grid>

        {/* Add New Goal */}
        <Box
          p={6}
          bg={cardBg}
          borderRadius="lg"
          borderWidth="1px"
          borderColor={borderColor}
        >
          <VStack spacing={4}>
            <Heading size="md">Create New Goal</Heading>
            <FormControl>
              <FormLabel>Goal Title</FormLabel>
              <Input placeholder="e.g., Dream Vacation" />
            </FormControl>
            <FormControl>
              <FormLabel>Target Amount (sats)</FormLabel>
              <Input type="number" placeholder="1000000" />
            </FormControl>
            <FormControl>
              <FormLabel>Lock Period</FormLabel>
              <Input placeholder="e.g., 6 months" />
            </FormControl>
            <Button colorScheme="orange" w="full">
              Create Goal
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}