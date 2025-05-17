// Module 1: Money Basics
export const MODULE_1_LESSONS = [
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

// ... [Previous MODULE_2_LESSONS to MODULE_6_LESSONS content remains the same]

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
  },
  {
    id: 5,
    title: "Earning & Working",
    description: "Discover ways to earn and the value of work",
    emoji: "💪",
    lessons: MODULE_5_LESSONS
  },
  {
    id: 6,
    title: "Future Planning",
    description: "Plan for an amazing future",
    emoji: "🌈",
    lessons: MODULE_6_LESSONS
  }
].map(module => ({
  ...module,
  totalRewards: module.lessons.reduce((sum, lesson) => sum + lesson.reward, 0)
}));