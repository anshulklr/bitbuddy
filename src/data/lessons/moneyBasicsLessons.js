// src/data/lessons/moneyBasicsLessons.js
const moneyBasicsLessons = [
  {
    id: 1,
    title: "What is Money and Its History",
    emoji: "💰",
    duration: "5 mins",
    reward: 500,
    content: [
      {
        type: "intro",
        text: "Let's explore the fascinating journey of money through time! From seashells to digital currencies, money has come a long way. 🚀",
      },
      {
        type: "explanation",
        text: "Evolution of Money:",
        points: [
          "🐚 Bartering: Trading goods directly",
          "🥇 Commodity Money: Using valuable items",
          "💵 Paper Money: Easier to carry and use",
          "💳 Digital Money: Modern and fast"
        ]
      },
      {
        type: "explanation",
        text: "Functions of Money:",
        points: [
          "💱 Medium of Exchange: Used to buy things",
          "📊 Store of Value: Keeps its worth over time",
          "💹 Unit of Account: Measures value",
          "🔄 Standard of Deferred Payment: Pay later"
        ]
      },
      {
        type: "activity",
        text: "Let's create a money timeline!\n1. Draw a long line on paper\n2. Mark different types of money\n3. Add dates and pictures\n4. Share with family!",
      },
      {
        type: "funFact",
        text: "Did you know? The word 'salary' comes from 'salt' because Roman soldiers were sometimes paid in salt! 🧂",
      }
    ],
    quiz: {
      question: "What is the main advantage of modern digital money over bartering?",
      options: [
        "It's easier to use and carry",
        "It's heavier",
        "It can only be used once",
        "It needs electricity to exist"
      ],
      correct: 0
    }
  }
  // Add other Money Basics lessons...
];

export default moneyBasicsLessons;