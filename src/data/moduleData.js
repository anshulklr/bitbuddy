// Module 1: Money Basics
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
  }
];

// Module 2: Smart Saving Adventures
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

// Module 3: Bitcoin Adventure
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
    title: "Your First Bitcoin Wallet",
    emoji: "👛",
    duration: "4 mins",
    reward: 1200,
    content: [
      {
        type: "intro",
        text: "Time to create your very own Bitcoin treasure chest! 🏴‍☠️",
      },
      {
        type: "explanation",
        text: "Important things about Bitcoin wallets:",
        points: [
          "🔑 Keep your keys super safe",
          "📱 Use trusted wallet apps",
          "🔒 Never share your secret words",
          "💡 Start with small amounts"
        ]
      }
    ],
    quiz: {
      question: "What should you never share?",
      options: [
        "Your wallet's secret words",
        "Your favorite color",
        "Your birthday",
        "Your pet's name"
      ],
      correct: 0
    }
  }
];

// Module 4: Family Money Matters
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
    title: "Working Together",
    emoji: "🤝",
    duration: "4 mins",
    reward: 1000,
    content: [
      {
        type: "intro",
        text: "Families are stronger when they work together! Let's learn how! 💪",
      },
      {
        type: "explanation",
        text: "Ways to help:",
        points: [
          "💡 Share money-saving ideas",
          "🛒 Help with shopping",
          "💰 Save your allowance",
          "🎯 Set family goals together"
        ]
      }
    ],
    quiz: {
      question: "How can kids help with family money?",
      options: [
        "Save their allowance",
        "Ask for more toys",
        "Ignore the budget",
        "Spend all the money"
      ],
      correct: 0
    }
  }
];

// Module 5: Earning & Working
const MODULE_5_LESSONS = [
  {
    id: 1,
    title: "Ways to Earn",
    emoji: "💪",
    duration: "4 mins",
    reward: 1000,
    content: [
      {
        type: "intro",
        text: "Discover fun ways to earn your own money! 🌟",
      },
      {
        type: "explanation",
        text: "Kid-friendly ways to earn:",
        points: [
          "🧹 Help with house chores",
          "📚 Do well in school",
          "🎨 Make crafts to sell",
          "🌱 Help in the garden"
        ]
      }
    ],
    quiz: {
      question: "What's a good way to earn money as a kid?",
      options: [
        "Helping with chores",
        "Watching TV",
        "Sleeping late",
        "Playing games"
      ],
      correct: 0
    }
  },
  {
    id: 2,
    title: "The Value of Work",
    emoji: "⭐",
    duration: "5 mins",
    reward: 1200,
    content: [
      {
        type: "intro",
        text: "Let's learn why working hard is important and rewarding! 💫",
      },
      {
        type: "explanation",
        text: "Benefits of working hard:",
        points: [
          "🌟 Feel proud of yourself",
          "💰 Earn money for goals",
          "📚 Learn new skills",
          "🤝 Help others"
        ]
      }
    ],
    quiz: {
      question: "Why is working hard important?",
      options: [
        "To learn and grow",
        "To avoid fun",
        "To never play",
        "To stay inside"
      ],
      correct: 0
    }
  }
];

// Module 6: Future Planning
const MODULE_6_LESSONS = [
  {
    id: 1,
    title: "Dream Big!",
    emoji: "🌈",
    duration: "5 mins",
    reward: 1500,
    content: [
      {
        type: "intro",
        text: "Let's imagine and plan for your amazing future! ✨",
      },
      {
        type: "explanation",
        text: "Planning for the future:",
        points: [
          "🎓 Education goals",
          "💭 Dream projects",
          "🎯 Personal achievements",
          "💝 Helping others"
        ]
      }
    ],
    quiz: {
      question: "Why should we plan for the future?",
      options: [
        "To achieve our dreams",
        "To avoid homework",
        "To skip breakfast",
        "To stay up late"
      ],
      correct: 0
    }
  },
  {
    id: 2,
    title: "Money Growing Magic",
    emoji: "🌱",
    duration: "4 mins",
    reward: 1200,
    content: [
      {
        type: "intro",
        text: "Learn how your money can grow over time! 🪴",
      },
      {
        type: "explanation",
        text: "Ways money grows:",
        points: [
          "💰 Regular saving",
          "📈 Investment returns",
          "🎯 Smart planning",
          "⏳ Time is your friend"
        ]
      }
    ],
    quiz: {
      question: "What helps money grow over time?",
      options: [
        "Regular saving",
        "Spending it all",
        "Keeping it under bed",
        "Giving it away"
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