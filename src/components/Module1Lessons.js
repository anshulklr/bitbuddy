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
        text: "Hi friend! Let's learn about money together! Money is like special tickets we use to get things we need and want. 🎈",
      },
      {
        type: "explanation",
        text: "Here are some fun things we can do with money:",
        points: [
          "🍎 Buy yummy food from the store",
          "🧸 Get fun toys to play with",
          "📚 Buy books to read and learn",
          "🎪 Go to fun places with family"
        ]
      },
      {
        type: "activity",
        text: "Fun Activity Time! 🌟\nAsk your grown-up to show you different types of money:\n- Count some coins\n- Look at different bills\n- Spot the numbers on them",
      },
      {
        type: "funFact",
        text: "Did you know? A long time ago, people used seashells and beads as money! 🐚",
      }
    ],
    quiz: {
      question: "What can we use money for?",
      options: [
        "Buying food and toys",
        "Making a bed",
        "Drawing pictures",
        "Flying like a bird"
      ],
      correct: 0
    }
  },
  {
    id: 2,
    title: "Piggy Bank Adventures",
    emoji: "🐷",
    duration: "4 mins",
    reward: 750,
    content: [
      {
        type: "intro",
        text: "Meet Perry the Piggy Bank! He loves to help us save money! 🐷",
      },
      {
        type: "explanation",
        text: "Why should we save money?",
        points: [
          "🎁 Save for special toys we want",
          "🔮 Save for future fun things",
          "🌟 Watch our savings grow bigger",
          "🎯 Learn to be patient and smart"
        ]
      },
      {
        type: "activity",
        text: "Let's start saving! Find a special jar or box at home. Decorate it with stickers and draw what you're saving for! ✨",
      },
      {
        type: "funFact",
        text: "Cool fact: If you save just 1 coin every day, you'll have 365 coins in a year! That's a lot! 🌈",
      }
    ],
    quiz: {
      question: "Why do we use a piggy bank?",
      options: [
        "To save money for later",
        "To feed a pet pig",
        "To make music",
        "To play games"
      ],
      correct: 0
    }
  },
  {
    id: 3,
    title: "Needs vs. Wants",
    emoji: "🎯",
    duration: "4 mins",
    reward: 1000,
    content: [
      {
        type: "intro",
        text: "Let's play a fun game about things we need and things we want! 🎮",
      },
      {
        type: "explanation",
        text: "Things we NEED (very important!):",
        points: [
          "🥪 Food to eat and grow strong",
          "🏠 A home to live in",
          "👕 Clothes to wear",
          "💊 Medicine when we're sick"
        ]
      },
      {
        type: "explanation",
        text: "Things we WANT (nice to have!):",
        points: [
          "🎮 New video games",
          "🍫 Candy and treats",
          "🎪 Extra toys",
          "🎪 Fun trips"
        ]
      },
      {
        type: "activity",
        text: "Game Time! 🎲\nPoint to things around you and say if they're 'needs' or 'wants'.\nMake two lists with your family!",
      },
      {
        type: "funFact",
        text: "Wisdom Alert! Smart people buy their needs first, then save for their wants! 🌟",
      }
    ],
    quiz: {
      question: "Which one is a NEED?",
      options: [
        "Healthy food for dinner",
        "A new toy car",
        "Candy",
        "Video games"
      ],
      correct: 0
    }
  },
  {
    id: 4,
    title: "The Shopping Helper",
    emoji: "🛒",
    duration: "5 mins",
    reward: 1000,
    content: [
      {
        type: "intro",
        text: "Let's become smart shoppers! Time to help our family make good choices! 🛍️",
      },
      {
        type: "explanation",
        text: "Smart Shopping Tips:",
        points: [
          "📝 Make a list before shopping",
          "🔍 Compare prices",
          "🎯 Look for special deals",
          "💡 Ask: "Do we really need this?""
        ]
      },
      {
        type: "activity",
        text: "Help your grown-up make a shopping list! Draw pictures of what you need to buy. ✏️",
      },
      {
        type: "funFact",
        text: "Shopping Tip: Stores put candy near the checkout to tempt us! Being aware helps us make better choices! 🍬",
      }
    ],
    quiz: {
      question: "What should we do before going shopping?",
      options: [
        "Make a list",
        "Play games",
        "Take a nap",
        "Watch TV"
      ],
      correct: 0
    }
  },
  {
    id: 5,
    title: "Meet Bitcoin!",
    emoji: "₿",
    duration: "5 mins",
    reward: 1500,
    content: [
      {
        type: "intro",
        text: "Today we're going to learn about a special kind of money called Bitcoin! ✨",
      },
      {
        type: "explanation",
        text: "What makes Bitcoin special?",
        points: [
          "💻 It's digital money (like video game coins!)",
          "🌍 You can use it anywhere in the world",
          "🔒 It stays safe with special keys",
          "🎮 You can save it in a digital wallet"
        ]
      },
      {
        type: "activity",
        text: "Let's practice! Pretend you're sending Bitcoin to a friend:\n1. Draw a digital wallet\n2. Make pretend Bitcoin transactions\n3. Keep your 'keys' safe!",
      },
      {
        type: "funFact",
        text: "Bitcoin Fun Fact: Bitcoin was created by someone with a mystery name - Satoshi! Nobody knows who they are! 🥷",
      }
    ],
    quiz: {
      question: "What is Bitcoin?",
      options: [
        "Digital money",
        "A video game",
        "A toy",
        "A food"
      ],
      correct: 0
    }
  },
  {
    id: 6,
    title: "Saving Goals",
    emoji: "🎯",
    duration: "4 mins",
    reward: 1000,
    content: [
      {
        type: "intro",
        text: "Let's learn how to save for things we want! Having a goal makes saving fun! 🎯",
      },
      {
        type: "explanation",
        text: "Steps to reach your saving goal:",
        points: [
          "1️⃣ Pick something you want to save for",
          "2️⃣ Find out how much it costs",
          "3️⃣ Save a little bit regularly",
          "4️⃣ Track your progress with stickers!"
        ]
      },
      {
        type: "activity",
        text: "Create a savings goal chart! Draw what you're saving for and make boxes to color in as you save. 🎨",
      },
      {
        type: "funFact",
        text: "The more patient you are, the more satisfying it feels when you reach your goal! 🌟",
      }
    ],
    quiz: {
      question: "What's the first step in saving?",
      options: [
        "Choose what to save for",
        "Spend all money",
        "Ask for candy",
        "Go to sleep"
      ],
      correct: 0
    }
  }
];

// ... rest of the code remains the same ...