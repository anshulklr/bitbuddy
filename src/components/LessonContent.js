import {
  Box,
  VStack,
  Text,
  Button,
  Progress,
  useColorModeValue,
  Heading,
  HStack,
  Badge,
} from '@chakra-ui/react';
import { useState } from 'react';
import BitBuddyGuide from './BitBuddyGuide';

export default function LessonContent({ lesson, onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleNext = () => {
    if (currentStep < lesson.content.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowQuiz(true);
    }
  };

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
    const correct = index === lesson.quiz.correct;
    setIsCorrect(correct);

    if (correct) {
      setTimeout(() => {
        onComplete(lesson.reward);
      }, 1500);
    }
  };

  return (
    <VStack spacing={6} align="stretch">
      <Box bg={useColorModeValue('white', 'gray.800')} p={6} borderRadius="lg" shadow="md">
        <VStack spacing={4} align="stretch">
          {!showQuiz ? (
            <>
              <Progress value={(currentStep / lesson.content.length) * 100} colorScheme="orange" />
              
              <Box>
                {lesson.content[currentStep].type === "explanation" ? (
                  <VStack align="start" spacing={4}>
                    <Text fontSize="lg">{lesson.content[currentStep].text}</Text>
                    {lesson.content[currentStep].points && (
                      <VStack align="start" pl={4}>
                        {lesson.content[currentStep].points.map((point, idx) => (
                          <Text key={idx}>{point}</Text>
                        ))}
                      </VStack>
                    )}
                  </VStack>
                ) : (
                  <Text fontSize="lg">{lesson.content[currentStep].text}</Text>
                )}
              </Box>

              <Button
                colorScheme="orange"
                alignSelf="flex-end"
                onClick={handleNext}
              >
                {currentStep < lesson.content.length - 1 ? "Next" : "Take Quiz"}
              </Button>
            </>
          ) : (
            <VStack spacing={4} align="stretch">
              <Heading size="md">{lesson.quiz.question}</Heading>
              
              <VStack spacing={3}>
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
                    isDisabled={isCorrect !== null}
                    w="full"
                  >
                    {option}
                  </Button>
                ))}
              </VStack>

              {isCorrect !== null && (
                <Badge
                  colorScheme={isCorrect ? "green" : "red"}
                  p={2}
                  textAlign="center"
                >
                  {isCorrect
                    ? `Correct! You earned ${lesson.reward} sats!`
                    : "Try again!"}
                </Badge>
              )}
            </VStack>
          )}
        </VStack>
      </Box>
    </VStack>
  );
}