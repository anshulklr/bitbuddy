// src/data/lessons/familyMoneyLessons.js
const familyMoneyLessons = [
  {
    id: 1,
    title: "Family Budget Basics",
    emoji: "👨‍👩‍👧‍👦",
    duration: "6 mins",
    reward: 600,
    content: [
      {
        type: "intro",
        text: "Master family financial planning: Learn how to create and manage an effective family budget that works for everyone. 📊",
      },
      {
        type: "explanation",
        text: "Budget Components:",
        points: [
          "💰 Income Sources: Salary, investments, side hustles",
          "📝 Fixed Expenses: Rent, utilities, loans",
          "🔄 Variable Expenses: Food, entertainment, shopping",
          "💸 Savings & Investments: Emergency fund, future goals"
        ]
      },
      {
        type: "explanation",
        text: "Budget Management:",
        points: [
          "📊 Track all expenses meticulously",
          "🎯 Set realistic spending limits",
          "💡 Identify cost-cutting opportunities",
          "📈 Regular budget reviews and adjustments"
        ]
      },
      {
        type: "activity",
        text: "Create Family Budget:\n1. List all income sources\n2. Map monthly expenses\n3. Set category limits\n4. Plan savings allocation",
      },
      {
        type: "funFact",
        text: "Successful family budgets typically follow the 50/30/20 rule: 50% needs, 30% wants, 20% savings! 💫",
      }
    ],
    quiz: {
      question: "What's most important in a family budget?",
      options: [
        "Regular tracking and adjustment",
        "Spending all income",
        "Avoiding savings",
        "Ignoring expenses"
      ],
      correct: 0
    }
  }
  // Add other Family Money lessons...
];

export default familyMoneyLessons;