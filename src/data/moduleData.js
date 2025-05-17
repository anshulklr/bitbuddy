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

// Add the new lessons from the imported files
const MODULE_1_LESSONS = [...BASE_MODULE_1_LESSONS];

const MODULE_2_LESSONS = [
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
    title: "The Magic of Compound Interest",
    emoji: "✨",
    duration: "5 mins",
    reward: 1100,
    content: [
      {
        type: "intro",
        text: "Get ready to see how your money can grow like magic with compound interest! 🎩",
      },
      {
        type: "explanation",
        text: "How compound interest works:",
        points: [
          "💰 Your money earns money",
          "🔄 Then that new money earns more money",
          "📈 It keeps growing and growing",
          "🚀 The longer you wait, the more you get!"
        ]
      },
      {
        type: "activity",
        text: "Let's play the Compound Growth Game!\n1. Start with 10 marbles\n2. Add 1 marble for each you have every 'year'\n3. Count how many you have after 5 'years'\nWatch them multiply! 🎲",
      }
    ],
    quiz: {
      question: "What makes compound interest special?",
      options: [
        "Your earnings earn more earnings",
        "It makes you taller",
        "It gives you superpowers",
        "It does your homework"
      ],
      correct: 0
    }
  }
];

const MODULE_3_LESSONS = [
  {
    id: 1,
    title: "Bitcoin Treasure Hunt",
    emoji: "🗺️",
    duration: "5 mins",
    reward: 1500,
    content: [
      {
        type: "intro",
        text: "Let's go on a treasure hunt to learn about Bitcoin! 🏴‍☠️",
      },
      {
        type: "explanation",
        text: "Special things about Bitcoin:",
        points: [
          "💎 It's like digital gold",
          "🌍 Works everywhere in the world",
          "🔑 You keep it safe with special keys",
          "🤖 Created by computers solving puzzles"
        ]
      }
    ],
    quiz: {
      question: "What makes Bitcoin special?",
      options: [
        "It works everywhere in the world",
        "It tastes like chocolate",
        "It can fly",
        "It glows in the dark"
      ],
      correct: 0
    }
  },
  {
    id: 2,
    title: "Bitcoin Safety Hero",
    emoji: "🦸‍♂️",
    duration: "5 mins",
    reward: 1200,
    content: [
      {
        type: "intro",
        text: "Become a Bitcoin Safety Superhero! Learn to protect your digital treasure! 🛡️",
      },
      {
        type: "explanation",
        text: "Your Bitcoin Safety Powers:",
        points: [
          "🔑 Keep your secret keys super safe",
          "🚫 Never share your passwords",
          "👾 Watch out for tricky scams",
          "🔒 Use strong passwords"
        ]
      },
      {
        type: "activity",
        text: "Create your Bitcoin Superhero Identity!\n1. Design your hero costume\n2. List your safety powers\n3. Make safety rules\n4. Share tips with friends! 🦸‍♀️",
      }
    ],
    quiz: {
      question: "What should a Bitcoin Safety Hero never share?",
      options: [
        "Secret keys and passwords",
        "Favorite color",
        "Superhero name",
        "Favorite food"
      ],
      correct: 0
    }
  }
];

const MODULE_4_LESSONS = [
  {
    id: 1,
    title: "Family Budget Fun",
    emoji: "👨‍👩‍👧‍👦",
    duration: "5 mins",
    reward: 1200,
    content: [
      {
        type: "intro",
        text: "Let's learn how families plan their money together! 🏠",
      },
      {
        type: "explanation",
        text: "Family money planning includes:",
        points: [
          "🏠 Home expenses",
          "🥗 Food and groceries",
          "📚 School supplies",
          "🎈 Fun activities"
        ]
      }
    ],
    quiz: {
      question: "What should families plan for?",
      options: [
        "All important expenses",
        "Only toys",
        "Just ice cream",
        "Nothing at all"
      ],
      correct: 0
    }
  },
  {
    id: 2,
    title: "Family Money Team",
    emoji: "🤝",
    duration: "5 mins",
    reward: 1000,
    content: [
      {
        type: "intro",
        text: "Your family is like a super team when it comes to money! Let's learn to work together! 🦸‍♂️",
      },
      {
        type: "explanation",
        text: "Team roles everyone can play:",
        points: [
          "💡 Share smart spending ideas",
          "📝 Help make shopping lists",
          "💰 Track family savings goals",
          "🎯 Suggest fun, free activities"
        ]
      },
      {
        type: "activity",
        text: "Create Family Money Team Badges!\n1. Design a badge for each role\n2. Write team member duties\n3. Have weekly team meetings\n4. Celebrate wins together! 🎨",
      }
    ],
    quiz: {
      question: "How can kids help the family money team?",
      options: [
        "Share money-saving ideas",
        "Hide the money",
        "Spend it all quickly",
        "Never talk about money"
      ],
      correct: 0
    }
  }
];

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
  totalRewards: module.lessons.reduce((sum, lesson) => sum + (lesson.reward || 0), 0)
}));