// src/data/lessons/smartSavingLessons.js
const smartSavingLessons = [
  {
    id: 1,
    title: "Power of Saving",
    emoji: "💪",
    duration: "5 mins",
    reward: 500,
    content: [
      {
        type: "intro",
        text: "Discover how saving money gives you superpowers! Small savings today can lead to big dreams tomorrow! 🦸‍♂️",
      },
      {
        type: "explanation",
        text: "Why Save Money?",
        points: [
          "🎯 Achieve your dreams",
          "🛡️ Handle emergencies",
          "📈 Watch money grow",
          "😊 Feel more secure"
        ]
      },
      {
        type: "explanation",
        text: "Types of Savings:",
        points: [
          "🏦 Short-term savings",
          "🎓 Long-term savings",
          "🚨 Emergency savings",
          "🎁 Goal-based savings"
        ]
      },
      {
        type: "activity",
        text: "Create Your Savings Jar!\n1. Decorate a clear jar\n2. Set a saving goal\n3. Make a deposit schedule\n4. Track your progress",
      },
      {
        type: "funFact",
        text: "Power Fact: If you save just $5 a week, you'll have $260 in a year! That's the power of consistent saving! 💫",
      }
    ],
    quiz: {
      question: "Why is it important to start saving early?",
      options: [
        "Money has more time to grow",
        "Because banks close early",
        "To make others jealous",
        "To spend it all later"
      ],
      correct: 0
    }
  }
  // Add other Smart Saving lessons...
];

export default smartSavingLessons;