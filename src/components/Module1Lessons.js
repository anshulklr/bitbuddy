import {
  Box,
  VStack,
  Text,
  Progress,
  useColorModeValue,
  Container,
  SimpleGrid,
  Heading,
  HStack,
  Card,
  CardBody,
  Badge,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import BitBuddyGuide from './BitBuddyGuide';
import LessonContent from './LessonContent';

// Previous MODULE_1_LESSONS content remains the same
const MODULE_1_LESSONS = [/* ... previous lessons content ... */];

const MotionCard = motion(Card);

const LessonCard = ({ lesson, onStart, isCompleted }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  
  return (
    <MotionCard
      bg={cardBg}
      shadow="md"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <CardBody>
        <VStack align="start" spacing={3}>
          <HStack spacing={2}>
            <Text fontSize="2xl">{lesson.emoji}</Text>
            <Heading size="md">{lesson.title}</Heading>
          </HStack>
          <HStack>
            <Badge colorScheme="green">
              {lesson.duration}
            </Badge>
            <Badge colorScheme="orange">
              {lesson.reward} sats reward
            </Badge>
            {isCompleted && (
              <Badge colorScheme="blue">
                Completed ✓
              </Badge>
            )}
          </HStack>
          <Button
            colorScheme="orange"
            size="sm"
            onClick={() => onStart(lesson)}
            w="full"
            isDisabled={isCompleted}
          >
            {isCompleted ? "Completed!" : "Start Lesson"}
          </Button>
        </VStack>
      </CardBody>
    </MotionCard>
  );
};

export default function Module1Lessons() {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [totalRewards, setTotalRewards] = useState(0);

  const handleStartLesson = (lesson) => {
    setSelectedLesson(lesson);
  };

  const handleCompleteLesson = (reward) => {
    setCompletedLessons([...completedLessons, selectedLesson.id]);
    setTotalRewards(totalRewards + reward);
    setSelectedLesson(null);
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        {/* BitBuddy Guide */}
        <BitBuddyGuide
          message={
            selectedLesson
              ? "I'll help you learn about money! 💰"
              : `Welcome to your money lessons! You've completed ${completedLessons.length} out of ${MODULE_1_LESSONS.length} lessons!`
          }
          emotion="happy"
          size="medium"
        />

        {/* Module Progress */}
        <Box>
          <HStack justify="space-between" mb={2}>
            <Heading size="md">Module Progress</Heading>
            <Text>{completedLessons.length} / {MODULE_1_LESSONS.length} Completed</Text>
          </HStack>
          <Progress
            value={(completedLessons.length / MODULE_1_LESSONS.length) * 100}
            colorScheme="orange"
            borderRadius="full"
            size="lg"
          />
        </Box>

        {/* Total Rewards */}
        <Box
          p={4}
          bg={useColorModeValue('orange.50', 'gray.700')}
          borderRadius="lg"
          as={motion.div}
          whileHover={{ scale: 1.01 }}
        >
          <HStack justify="space-between">
            <Text fontSize="lg">Total Rewards Earned:</Text>
            <Text fontSize="lg" fontWeight="bold">{totalRewards} sats</Text>
          </HStack>
        </Box>

        {/* Lesson Content or List */}
        {selectedLesson ? (
          <LessonContent
            lesson={selectedLesson}
            onComplete={handleCompleteLesson}
          />
        ) : (
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={6}
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {MODULE_1_LESSONS.map((lesson) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                onStart={handleStartLesson}
                isCompleted={completedLessons.includes(lesson.id)}
              />
            ))}
          </SimpleGrid>
        )}
      </VStack>
    </Container>
  );
}