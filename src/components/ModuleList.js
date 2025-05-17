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

const MotionBox = motion(Box);

export default function ModuleList({ onSelectModule, completedLessons = {} }) {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const getModuleProgress = (moduleId) => {
    const module = ALL_MODULES.find(m => m.id === moduleId);
    if (!module) return 0;
    
    const completed = completedLessons[moduleId] ? completedLessons[moduleId].length : 0;
    return (completed / module.lessons.length) * 100;
  };

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
      {ALL_MODULES.map((module) => (
        <MotionBox
          key={module.id}
          as="button"
          onClick={() => onSelectModule(module)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          bg={cardBg}
          p={6}
          borderRadius="lg"
          borderWidth="1px"
          borderColor={borderColor}
          textAlign="left"
          width="100%"
        >
          <VStack align="stretch" spacing={4}>
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

            <Box>
              <HStack justify="space-between" mb={2}>
                <Text fontSize="sm" color="gray.500">Progress</Text>
                <Text fontSize="sm" color="gray.500">
                  {Math.round(getModuleProgress(module.id))}%
                </Text>
              </HStack>
              <Progress
                value={getModuleProgress(module.id)}
                size="sm"
                colorScheme="orange"
                borderRadius="full"
              />
            </Box>
          </VStack>
        </MotionBox>
      ))}
    </SimpleGrid>
  );
}