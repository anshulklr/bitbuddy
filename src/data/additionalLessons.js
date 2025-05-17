// Module 1: Money Basics
const MODULE_1_LESSONS = [
  // Existing lessons remain...
  {
    id: 3,
    title: "Money Through Time",
    emoji: "⏳",
    duration: "4 mins",
    reward: 800,
    content: [
      {
        type: "intro",
        text: "Let's travel through time and see how money has changed! It's like magic! ✨",
      },
      {
        type: "explanation",
        text: "Money has taken many forms:",
        points: [
          "🐚 Seashells - Ancient people used these!",
          "🥇 Gold and silver coins - Kings and queens used these",
          "💵 Paper money - Like what we use today",
          "📱 Digital money - Modern and fast!"
        ]
      },
      {
        type: "activity",
        text: "Draw your own imaginary money! What would it look like? What special features would it have? 🎨",
      },
      {
        type: "funFact",
        text: "Wow Fact: The biggest coin ever made was in Thailand - it was as big as a dinner plate! 🍽️",
      }
    ],
    quiz: {
      question: "What was used as money before paper money?",
      options: [
        "Gold and silver coins",
        "Toy cars",
        "Video games",
        "Cell phones"
      ],
      correct: 0
    }
  },
  {
    id: 4,
    title: "Money Around the World",
    emoji: "🌍",
    duration: "5 mins",
    reward: 1000,
    content: [
      {
        type: "intro",
        text: "Did you know different countries use different money? Let's explore! 🗺️",
      },
      {
        type: "explanation",
        text: "Different types of money:",
        points: [
          "💵 Dollar - Used in USA and many other places",
          "💶 Euro - Used in many European countries",
          "💴 Yen - Used in Japan",
          "₿ Bitcoin - Used everywhere in the world!"
        ]
      },
      {
        type: "activity",
        text: "Start a collection of pictures of different money from around the world! Ask your family if they have any foreign coins or bills to show you. 🏺",
      },
      {
        type: "funFact",
        text: "Amazing Fact: Some islands once used giant stone wheels as money - imagine carrying that to the store! 😮",
      }
    ],
    quiz: {
      question: "Which money can be used anywhere in the world?",
      options: [
        "Bitcoin",
        "Seashells",
        "Rocks",
        "Stickers"
      ],
      correct: 0
    }
  },
  {
    id: 5,
    title: "Counting Money Like a Pro",
    emoji: "🧮",
    duration: "6 mins",
    reward: 1200,
    content: [
      {
        type: "intro",
        text: "Time to become a money counting expert! Ready to count with confidence? 🎯",
      },
      {
        type: "explanation",
        text: "Smart counting tricks:",
        points: [
          "👥 Group similar coins together",
          "📏 Make stacks of 5 or 10",
          "✍️ Write down the amounts",
          "➕ Add from biggest to smallest"
        ]
      },
      {
        type: "activity",
        text: "Money Counting Game:\n1. Get some coins\n2. Sort them by type\n3. Make stacks of 5\n4. Count the total!\n\nCan you count faster than your friends? ⚡",
      },
      {
        type: "funFact",
        text: "Cool Fact: Bank machines can count 10 bills per second! That's super fast! 🏦",
      }
    ],
    quiz: {
      question: "What's the best way to count lots of coins?",
      options: [
        "Group similar ones together",
        "Throw them in the air",
        "Hide them under the bed",
        "Give them away"
      ],
      correct: 0
    }
  },
  {
    id: 6,
    title: "Making Smart Choices",
    emoji: "🤔",
    duration: "5 mins",
    reward: 1000,
    content: [
      {
        type: "intro",
        text: "Every time we spend money, we make a choice. Let's learn to make smart ones! 🎯",
      },
      {
        type: "explanation",
        text: "Before spending, ask yourself:",
        points: [
          "❓ Do I really need this?",
          "💭 Can I use something I already have?",
          "⏰ Should I wait and save more?",
          "🔍 Is there a better deal somewhere?"
        ]
      },
      {
        type: "activity",
        text: "Play the 'Smart Shopper' game!\n1. Make a list of things you want\n2. Mark them as 'Need' or 'Want'\n3. Put them in order of importance\n4. Discuss your choices with family 📝",
      },
      {
        type: "funFact",
        text: "Smart Fact: If you save $5 each week instead of spending it on snacks, you'll have $260 in one year! 🌱",
      }
    ],
    quiz: {
      question: "What should you ask before buying something?",
      options: [
        "Do I really need this?",
        "Is it shiny enough?",
        "Will it make me fly?",
        "Is it magical?"
      ],
      correct: 0
    }
  }
];

// Let's add this lesson to Smart Saving Adventures
const NEW_SAVING_LESSONS = [
  {
    id: 3,
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
      },
      {
        type: "funFact",
        text: "Magic Fact: Albert Einstein called compound interest the 8th wonder of the world! 🌟",
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
  },
  {
    id: 4,
    title: "Saving for Special Times",
    emoji: "🎁",
    duration: "4 mins",
    reward: 900,
    content: [
      {
        type: "intro",
        text: "Special times need special savings! Let's learn how to save for celebrations! 🎈",
      },
      {
        type: "explanation",
        text: "Times to save for:",
        points: [
          "🎂 Birthdays and parties",
          "🎄 Holidays and festivals",
          "🎠 Fun trips and adventures",
          "🎁 Gifts for family and friends"
        ]
      },
      {
        type: "activity",
        text: "Create a Special Times Calendar!\n1. Mark important dates\n2. Write down saving goals\n3. Make a countdown chart\n4. Color it as you save! 📅",
      }
    ],
    quiz: {
      question: "Why should we save for special times?",
      options: [
        "To be prepared and enjoy more",
        "To skip the celebration",
        "To cancel all parties",
        "To sleep all day"
      ],
      correct: 0
    }
  }
];