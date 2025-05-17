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
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import BitBuddyGuide from './BitBuddyGuide';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const lessonImages = {
  "What is Money?": [
    "https://images.unsplash.com/photo-1559589689-577aabd1db4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bW9uZXksY29pbnN8fHx8fHwxNjI4NzQ0NjIw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
    "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FzaCxyZWdpc3RlcnxdfHx8fHwxNjI4NzQ0NjIw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
  ],
  "Saving is Fun!": [
    "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGlnZ3kgYmFua3x8fHx8fDE2Mjg3NDQ2MjA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
  ],
  "Needs vs Wants": [
    "https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Z3JvY2VyeSxzaG9wcGluZ3x8fHx8fDE2Mjg3NDQ2MjA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
  ],
  "Bitcoin is Digital Money": [
    "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Yml0Y29pbnx8fHx8fDE2Mjg3NDQ2MjA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
  ]
};

// Companion messages for different lesson stages
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

export default function LessonContent({ lesson, onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [companionMessage, setCompanionMessage] = useState(getRandomMessage('start'));
  const toast = useToast();
  
  const contentBg = useColorModeValue('white', 'gray.800');

  useEffect(() => {
    // Play sound effect when lesson starts
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
  };

  return (
    <Box bg={contentBg} p={6} borderRadius="lg" shadow="md">
      <VStack spacing={6}>
        {/* BitBuddy Guide */}
        <HStack w="full" spacing={4}>
          <BitBuddyGuide
            message={companionMessage}
            emotion={isCorrect === null ? "happy" : isCorrect ? "excited" : "thinking"}
            size="small"
          />
        </HStack>

        {!showQuiz ? (
          <VStack spacing={6} align="stretch" w="full">
            <Progress
              value={(currentStep / lesson.content.length) * 100}
              colorScheme="orange"
              borderRadius="full"
            />

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {lesson.content[currentStep].type === "explanation" ? (
                <VStack align="start" spacing={4}>
                  <Text fontSize="lg">{lesson.content[currentStep].text}</Text>
                  {lesson.content[currentStep].points && (
                    <VStack align="start" pl={4}>
                      {lesson.content[currentStep].points.map((point, idx) => (
                        <Text key={idx} fontSize="lg">{point}</Text>
                      ))}
                    </VStack>
                  )}
                </VStack>
              ) : (
                <Text fontSize="lg">{lesson.content[currentStep].text}</Text>
              )}
            </MotionBox>

            {/* Lesson Images */}
            {lessonImages[lesson.title] && (
              <SimpleGrid columns={2} spacing={4}>
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

            <Button
              colorScheme="orange"
              onClick={handleNext}
              alignSelf="flex-end"
              as={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {currentStep < lesson.content.length - 1 ? "Next" : "Take Quiz"}
            </Button>
          </VStack>
        ) : (
          <VStack spacing={6} align="stretch">
            <Heading size="md">Quick Quiz! 🎯</Heading>
            <Text fontSize="lg">{lesson.quiz.question}</Text>
            
            <SimpleGrid columns={1} spacing={4}>
              {lesson.quiz.options.map((option, idx) => (
                <Button
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
                  as={motion.button}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {option}
                </Button>
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
                    color={isCorrect ? "green.500" : "red.500"}
                    textAlign="center"
                  >
                    {isCorrect ? "🎉 Great job! You got it right!" : "Try again! 💪"}
                  </Text>
                </MotionBox>

                {isCorrect && (
                  <Button
                    colorScheme="orange"
                    onClick={() => onComplete(lesson.reward)}
                    as={motion.button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Claim {lesson.reward} sats reward! 🎁
                  </Button>
                )}
              </VStack>
            )}
          </VStack>
        )}
      </VStack>
    </Box>
  );
}