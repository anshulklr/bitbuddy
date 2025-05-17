import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  useColorModeValue,
  Badge,
  Progress,
  HStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ALL_MODULES } from '../data/moduleData';
import { useState } from 'react';
import LessonContent from './LessonContent';

const MotionBox = motion(Box);

export default function ModuleList() {
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const handleModuleSelect = (module) => {
    setSelectedModule(module);
    setSelectedLesson(null);
  };

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
  };

  const handleLessonComplete = async (reward) => {
    // Handle lesson completion and rewards
    setSelectedLesson(null);
    // Refresh module progress
  };

  const handleBack = () => {
    if (selectedLesson) {
      setSelectedLesson(null);
    } else {
      setSelectedModule(null);
    }
  };

  if (selectedModule) {
    if (selectedLesson) {
      return (
        <VStack spacing={4}>
          <HStack w="full" justify="space-between">
            <Heading size="md">{selectedModule.title} - {selectedLesson.title}</Heading>
            <Box as="button" onClick={handleBack}>← Back</Box>
          </HStack>
          <LessonContent 
            lesson={selectedLesson}
            onComplete={handleLessonComplete}
          />
        </VStack>
      );
    }

    return (
      <VStack spacing={6}>
        <HStack w="full" justify="space-between">
          <Heading size="md">{selectedModule.title}</Heading>
          <Box as="button" onClick={handleBack}>← Back to Modules</Box>
        </HStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="full">
          {selectedModule.lessons.map((lesson) => (
            <MotionBox
              key={lesson.id}
              onClick={() => handleLessonSelect(lesson)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              cursor="pointer"
            >
              <Box
                p={6}
                bg={cardBg}
                borderRadius="lg"
                borderWidth="1px"
                borderColor={borderColor}
                h="full"
              >
                <VStack align="start" spacing={3}>
                  <HStack>
                    <Text fontSize="2xl">{lesson.emoji}</Text>
                    <Heading size="sm">{lesson.title}</Heading>
                  </HStack>
                  <HStack>
                    <Badge colorScheme="green">{lesson.duration}</Badge>
                    <Badge colorScheme="orange">{lesson.reward} sats</Badge>
                  </HStack>
                </VStack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </VStack>
    );
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
      {ALL_MODULES.map((module) => (
        <MotionBox
          key={module.id}
          onClick={() => handleModuleSelect(module)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          cursor="pointer"
        >
          <Box
            p={6}
            bg={cardBg}
            borderRadius="lg"
            borderWidth="1px"
            borderColor={borderColor}
            h="full"
          >
            <VStack align="start" spacing={4}>
              <HStack spacing={3}>
                <Text fontSize="2xl">{module.emoji}</Text>
                <Heading size="md">{module.title}</Heading>
              </HStack>
              
              <Text color="gray.500" noOfLines={2}>
                {module.description}
              </Text>
              
              <HStack>
                <Badge colorScheme="blue">
                  {module.lessons.length} Lessons
                </Badge>
                <Badge colorScheme="orange">
                  {module.totalRewards} sats
                </Badge>
              </HStack>

              <Progress
                value={0} // Add progress tracking later
                size="sm"
                colorScheme="orange"
                borderRadius="full"
                w="full"
              />
            </VStack>
          </Box>
        </MotionBox>
      ))}
    </SimpleGrid>
  );
}