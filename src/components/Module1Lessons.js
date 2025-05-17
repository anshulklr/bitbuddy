import {
  Box,
  VStack,
  Text,
  Button,
  Progress,
  useColorModeValue,
  Heading,
  Image,
  HStack,
  Badge,
  Container,
  SimpleGrid,
  Card,
  CardBody,
  Icon,
} from '@chakra-ui/react';
import { useState } from 'react';
import BitBuddyLogo from './BitBuddyLogo';

// Lesson content structured in a fun, simple way
const MODULE_1_LESSONS = [
  {
    id: 1,
    title: "What is Money?",
    emoji: "💰",
    duration: "3 mins",
    reward: 500,
    content: [
      {
        type: "intro",
        text: "Hi friend! Let's learn about money together! 🎈",
      },
      {
        type: "explanation",
        text: "Money is like special tickets we use to get things we need and want:",
        points: [
          "🍎 Food from the store",
          "🧸 Toys we love",
          "📚 Books to read",
        ]
      },
      {
        type: "activity",
        text: "Can you spot money in your home? Ask a grown-up to show you different coins and bills!",
      },
      {
        type: "funFact",
        text: "Did you know? Long ago, people used seashells as money! 🐚",
      }
    ],
    quiz: {
      question: "What can we do with money?",
      options: [
        "Buy things we need",
        "Eat it like candy",
        "Wear it as a hat",
        "Turn it into a pet"
      ],
      correct: 0
    }
  },
  {
    id: 2,
    title: "Saving is Fun!",
    emoji: "🏦",
    duration: "4 mins",
    reward: 750,
    content: [
      {
        type: "intro",
        text: "Hey there! Ready to learn about saving money? It's like collecting treasure! 🏴‍☠️",
      },
      {
        type: "explanation",
        text: "Saving money is like putting your tickets in a safe place for later:",
        points: [
          "🐷 Use a piggy bank",
          "⏰ Save a little every day",
          "🎯 Save for something special",
        ]
      },
      {
        type: "activity",
        text: "Let's make your own savings jar! Decorate it with stickers and draw what you're saving for!",
      },
      {
        type: "funFact",
        text: "Fun fact: If you save 1 coin every day, you'll have 365 coins in a year! ✨",
      }
    ],
    quiz: {
      question: "Where can we keep our savings safe?",
      options: [
        "In a piggy bank",
        "Under a pizza",
        "In a bubble",
        "Inside a cloud"
      ],
      correct: 0
    }
  },
  {
    id: 3,
    title: "Needs vs Wants",
    emoji: "🎯",
    duration: "4 mins",
    reward: 1000,
    content: [
      {
        type: "intro",
        text: "Let's play a fun game about needs and wants! 🎮",
      },
      {
        type: "explanation",
        text: "Some things we NEED to live happily and healthy:",
        points: [
          "🥪 Food to eat",
          "🏠 Home to live in",
          "👕 Clothes to wear",
        ]
      },
      {
        type: "explanation",
        text: "Some things we WANT for fun:",
        points: [
          "🎮 New games",
          "🍫 Candy",
          "🎪 Toys",
        ]
      },
      {
        type: "activity",
        text: "Draw two circles: put needs in one and wants in another! Share with your family!",
      },
      {
        type: "funFact",
        text: "Did you know? Even grown-ups make lists of needs and wants! 📝",
      }
    ],
    quiz: {
      question: "Which is a need?",
      options: [
        "Healthy food",
        "Video game",
        "Chocolate cake",
        "New toy"
      ],
      correct: 0
    }
  },
  {
    id: 4,
    title: "Bitcoin is Digital Money",
    emoji: "₿",
    duration: "5 mins",
    reward: 1500,
    content: [
      {
        type: "intro",
        text: "Welcome to the magical world of Bitcoin! ✨",
      },
      {
        type: "explanation",
        text: "Bitcoin is like special digital money:",
        points: [
          "💻 Lives in computers",
          "🌍 Works everywhere",
          "🔒 Stays safe with special keys",
        ]
      },
      {
        type: "activity",
        text: "Let's pretend we're Bitcoin! Send pretend digital coins to each other using paper notes!",
      },
      {
        type: "funFact",
        text: "Cool fact: Bitcoin was created by someone with a mystery name: Satoshi! 🥷",
      }
    ],
    quiz: {
      question: "Where does Bitcoin live?",
      options: [
        "In computers",
        "In trees",
        "In the ocean",
        "In the sky"
      ],
      correct: 0
    }
  }
];

const LessonCard = ({ lesson, onStart }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  
  return (
    <Card bg={cardBg} shadow="md" _hover={{ shadow: 'lg' }}>
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
          </HStack>
          <Button
            colorScheme="orange"
            size="sm"
            onClick={() => onStart(lesson)}
            w="full"
          >
            Start Lesson
          </Button>
        </VStack>
      </CardBody>
    </Card>
  );
};

const LessonContent = ({ lesson, onComplete }) => {
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
    setIsCorrect(index === lesson.quiz.correct);
  };

  const contentBg = useColorModeValue('white', 'gray.800');

  return (
    <Box bg={contentBg} p={6} borderRadius="lg" shadow="md">
      {!showQuiz ? (
        <VStack spacing={6} align="start">
          <HStack spacing={4}>
            <BitBuddyLogo width="50px" height="50px" />
            <Heading size="md">{lesson.title}</Heading>
          </HStack>
          
          <Progress
            value={(currentStep / lesson.content.length) * 100}
            w="full"
            colorScheme="orange"
            borderRadius="full"
          />

          <Box>
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
          </Box>

          <Button
            colorScheme="orange"
            onClick={handleNext}
            alignSelf="flex-end"
          >
            {currentStep < lesson.content.length - 1 ? "Next" : "Take Quiz"}
          </Button>
        </VStack>
      ) : (
        <VStack spacing={6} align="start">
          <Heading size="md">Quick Quiz! 🎯</Heading>
          <Text fontSize="lg">{lesson.quiz.question}</Text>
          
          <SimpleGrid columns={1} spacing={4} w="full">
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
                w="full"
              >
                {option}
              </Button>
            ))}
          </SimpleGrid>

          {isCorrect !== null && (
            <VStack spacing={4} w="full">
              <Text
                fontSize="xl"
                color={isCorrect ? "green.500" : "red.500"}
              >
                {isCorrect ? "🎉 Great job! You got it right!" : "Try again! 💪"}
              </Text>
              {isCorrect && (
                <Button
                  colorScheme="orange"
                  onClick={() => onComplete(lesson.reward)}
                  w="full"
                >
                  Claim {lesson.reward} sats reward! 🎁
                </Button>
              )}
            </VStack>
          )}
        </VStack>
      )}
    </Box>
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
          />
        </Box>

        {/* Total Rewards */}
        <Box p={4} bg={useColorModeValue('orange.50', 'gray.700')} borderRadius="lg">
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
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {MODULE_1_LESSONS.map((lesson) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                onStart={handleStartLesson}
              />
            ))}
          </SimpleGrid>
        )}
      </VStack>
    </Container>
  );
}