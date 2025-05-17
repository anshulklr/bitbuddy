// Base lessons for each module
const BASE_MODULE_1_LESSONS = [
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
  }
];

const BASE_MODULE_2_LESSONS = [
  {
    id: 1,
    title: "Power of Interest",
    emoji: "⚡",
    duration: "4 mins",
    reward: 1000,
    content: [
      {
        type: "intro",
        text: "Let's discover how your money can grow by itself! It's like magic, but it's called interest! ✨",
      },
      {
        type: "explanation",
        text: "How interest makes your money grow:",
        points: [
          "🌱 Your money is like a plant that grows",
          "🕒 The longer you save, the more it grows",
          "🎢 Interest is like getting bonus points on your savings",
          "📈 Watch your money multiply over time"
        ]
      },
      {
        type: "activity",
        text: "Let's play the interest game!\nPut 10 coins in a jar\nAdd 1 'interest coin' each day\nSee how it grows! 🪙",
      }
    ],
    quiz: {
      question: "What is interest?",
      options: [
        "Extra money your savings earn",
        "A type of candy",
        "A new toy",
        "A birthday present"
      ],
      correct: 0
    }
  },
  {
    id: 2,
    title: "Saving Goals",
    emoji: "🎯",
    duration: "4 mins",
    reward: 1000,
    content: [
      {
        type: "intro",
        text: "Let's learn how to set awesome saving goals! 🎯",
      },
      {
        type: "explanation",
        text: "Steps to set a saving goal:",
        points: [
          "🎯 Pick something special you want",
          "💰 Find out how much it costs",
          "📅 Decide when you want to get it",
          "📊 Track your progress"
        ]
      }
    ],
    quiz: {
      question: "What's the first step in setting a saving goal?",
      options: [
        "Choose what you want to save for",
        "Start spending money",
        "Take a nap",
        "Watch TV"
      ],
      correct: 0
    }
  }
];

// Import additional lessons
import { NEW_SAVING_LESSONS } from './additionalLessons';
import { NEW_BITCOIN_LESSONS } from './bitcoinLessons';
import { NEW_FAMILY_LESSONS } from './familyLessons';

// Combine base and additional lessons
export const MODULE_1_LESSONS = [...BASE_MODULE_1_LESSONS];
export const MODULE_2_LESSONS = [...BASE_MODULE_2_LESSONS, ...NEW_SAVING_LESSONS];
export const MODULE_3_LESSONS = NEW_BITCOIN_LESSONS;
export const MODULE_4_LESSONS = NEW_FAMILY_LESSONS;

// Export all modules data
export const ALL_MODULES = [
  {
    id: 1,
    title: "Money Basics",
    description: "Learn the fundamentals of money and how it works",
    emoji: "💰",
    lessons: MODULE_1_LESSONS
  },
  {
    id: 2,
    title: "Smart Saving Adventures",
    description: "Discover the magic of saving and watching money grow",
    emoji: "🐷",
    lessons: MODULE_2_LESSONS
  },
  {
    id: 3,
    title: "Bitcoin Adventure",
    description: "Explore the exciting world of Bitcoin",
    emoji: "₿",
    lessons: MODULE_3_LESSONS
  },
  {
    id: 4,
    title: "Family Money Matters",
    description: "Learn about family budgets and planning together",
    emoji: "👨‍👩‍👧‍👦",
    lessons: MODULE_4_LESSONS
  }
].map(module => ({
  ...module,
  totalRewards: module.lessons.reduce((sum, lesson) => sum + lesson.reward, 0)
}));