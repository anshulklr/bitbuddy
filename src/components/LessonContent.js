import {
  Box,
  VStack,
  Text,
  Button,
  Progress,
  useColorModeValue,
  Heading,
  HStack,
  SimpleGrid,
  Image,
  useToast,
  Badge,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BitBuddyGuide from './BitBuddyGuide';
import soundManager from '../utils/soundManager';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const lessonImages = {
  "What is Money?": [
    "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&w=400",
    "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&w=400"
  ],
  "Piggy Bank Adventures": [
    "https://images.unsplash.com/photo-1637167473540-565e2dafb572?auto=format&w=400",
    "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&w=400"
  ],
  "Needs vs. Wants": [
    "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&w=400",
    "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&w=400"
  ],
  "The Shopping Helper": [
    "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&w=400",
    "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&w=400"
  ],
  "Meet Bitcoin!": [
    "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&w=400"
  ],
  "Saving Goals": [
    "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&w=400"
  ]
};

const companionMessages = {
  start: [
    "Let's learn something exciting! 🎉",
    "Ready for an adventure? 🚀",
    "Time to become money-smart! 💡",
  ],
  progress: [
    "You're doing great! Keep going! 🌟",
    "I love your enthusiasm! 🎈",
    "Almost there, you're so smart! 🎯",
  ],
  success: [
    "Wow! You're amazing! 🏆",
    "Look at you go! Super job! 🌈",
    "You're becoming a money expert! 🎓",
  ],
  incorrect: [
    "Don't worry, let's try again! 💪",
    "Learning is all about trying! 🌱",
    "You've got this, I believe in you! 🍀",
  ]
};

const getRandomMessage = (type) => {
  const messages = companionMessages[type];
  return messages[Math.floor(Math.random() * messages.length)];
};

const ContentCard = ({ children, animate = true }) => {
  const bg = useColorModeValue('white', 'gray.800');
  
  return (
    <MotionBox
      bg={bg}
      p={6}
      borderRadius="lg"
      boxShadow="md"
      initial={animate ? { opacity: 0, y: 20 } : false}
      animate={animate ? { opacity: 1, y: 0 } : false}
      transition={{ duration: 0.5 }}
    >
      {children}
    </MotionBox>
  );
};

export default function LessonContent({ lesson, onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [companionMessage, setCompanionMessage] = useState(getRandomMessage('start'));
  const toast = useToast();

  useEffect(() => {
    soundManager.play('start', 0.3);
  }, []);

  const handleNext = () => {
    if (currentStep < lesson.content.length - 1) {
      setCurrentStep(currentStep + 1);
      setCompanionMessage(getRandomMessage('progress'));
      soundManager.play('progress', 0.3);
    } else {
      setShowQuiz(true);
      setCompanionMessage("Time to test what you've learned! You can do it! 🎯");
    }
  };

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
    const correct = index === lesson.quiz.correct;
    setIsCorrect(correct);
    
    soundManager.play(correct ? 'correct' : 'incorrect', 0.3);
    setCompanionMessage(getRandomMessage(correct ? 'success' : 'incorrect'));

    if (correct) {
      toast({
        title: "Great job! 🎉",
        description: `You earned ${lesson.reward} sats!`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <VStack spacing={6} w="full">
      {/* Header with progress */}
      <ContentCard animate={false}>
        <VStack spacing={4}>
          <HStack justify="space-between" w="full">
            <Badge colorScheme="orange" p={2} borderRadius="md">
              Lesson {lesson.id}: {lesson.title}
            </Badge>
            <Badge colorScheme="purple" p={2}>
              {lesson.reward} sats reward
            </Badge>
          </HStack>
          <Progress
            value={!showQuiz ? (currentStep / lesson.content.length) * 100 : 100}
            w="full"
            colorScheme="orange"
            borderRadius="full"
            size="sm"
          />
        </VStack>
      </ContentCard>

      {/* BitBuddy Guide */}
      <BitBuddyGuide
        message={companionMessage}
        emotion={isCorrect === null ? "happy" : isCorrect ? "excited" : "thinking"}
        size="small"
      />

      {/* Main Content */}
      <ContentCard>
        {!showQuiz ? (
          <VStack spacing={6} align="stretch">
            {lesson.content[currentStep].type === "explanation" ? (
              <VStack align="start" spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  {lesson.content[currentStep].text}
                </Text>
                {lesson.content[currentStep].points && (
                  <VStack align="start" pl={4} spacing={3}>
                    {lesson.content[currentStep].points.map((point, idx) => (
                      <HStack key={idx} spacing={3}>
                        <Text fontSize="lg">{point}</Text>
                      </HStack>
                    ))}
                  </VStack>
                )}
              </VStack>
            ) : lesson.content[currentStep].type === "activity" ? (
              <VStack align="start" spacing={4}>
                <Badge colorScheme="green" p={2}>
                  Activity Time! 🎨
                </Badge>
                <Text fontSize="lg">{lesson.content[currentStep].text}</Text>
              </VStack>
            ) : lesson.content[currentStep].type === "funFact" ? (
              <VStack align="start" spacing={4}>
                <Badge colorScheme="purple" p={2}>
                  Fun Fact! ⭐
                </Badge>
                <Text fontSize="lg">{lesson.content[currentStep].text}</Text>
              </VStack>
            ) : (
              <Text fontSize="lg">{lesson.content[currentStep].text}</Text>
            )}

            {/* Lesson Images */}
            {lessonImages[lesson.title] && (
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={4}>
                {lessonImages[lesson.title].map((img, idx) => (
                  <MotionBox
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Image
                      src={img}
                      alt={`Lesson illustration ${idx + 1}`}
                      borderRadius="md"
                      w="full"
                      h="200px"
                      objectFit="cover"
                    />
                  </MotionBox>
                ))}
              </SimpleGrid>
            )}

            <MotionButton
              colorScheme="orange"
              onClick={handleNext}
              alignSelf="flex-end"
              size="lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {currentStep < lesson.content.length - 1 ? "Next" : "Take Quiz"}
            </MotionButton>
          </VStack>
        ) : (
          <VStack spacing={6}>
            <Heading size="md">Quick Quiz! 🎯</Heading>
            <Text fontSize="xl" fontWeight="bold">{lesson.quiz.question}</Text>
            
            <SimpleGrid columns={1} spacing={4} w="full">
              {lesson.quiz.options.map((option, idx) => (
                <MotionButton
                  key={idx}
                  onClick={() => handleAnswerSelect(idx)}
                  colorScheme={
                    selectedAnswer === idx
                      ? idx === lesson.quiz.correct
                        ? "green"
                        : "red"
                      : "gray"
                  }
                  size="lg"
                  height="auto"
                  py={4}
                  whiteSpace="normal"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {option}
                </MotionButton>
              ))}
            </SimpleGrid>

            {isCorrect !== null && (
              <VStack spacing={4}>
                <MotionBox
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color={isCorrect ? "green.500" : "red.500"}
                  >
                    {isCorrect ? "🎉 Great job! You got it right!" : "Try again! 💪"}
                  </Text>
                </MotionBox>

                {isCorrect && (
                  <MotionButton
                    colorScheme="orange"
                    onClick={() => onComplete(lesson.reward)}
                    size="lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Claim {lesson.reward} sats reward! 🎁
                  </MotionButton>
                )}
              </VStack>
            )}
          </VStack>
        )}
      </ContentCard>
    </VStack>
  );
}