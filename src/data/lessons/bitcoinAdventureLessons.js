// src/data/lessons/bitcoinAdventureLessons.js
const bitcoinAdventureLessons = [
  {
    id: 1,
    title: "Bitcoin Basics",
    emoji: "₿",
    duration: "6 mins",
    reward: 600,
    content: [
      {
        type: "intro",
        text: "Enter the world of Bitcoin: The future of money! 🚀",
      },
      {
        type: "explanation",
        text: "Core Bitcoin Features:",
        points: [
          "₿ Limited supply: Only 21 million ever",
          "🔗 Decentralized: No central control",
          "🌍 Global: Works everywhere",
          "💻 Digital: Modern and efficient"
        ]
      },
      {
        type: "activity",
        text: "Bitcoin Basics Quiz Game:\n1. Learn key terms\n2. Understand features\n3. Share with friends\n4. Test knowledge"
      }
    ],
    quiz: {
      question: "Why is Bitcoin's supply limit important?",
      options: [
        "It prevents inflation",
        "It makes Bitcoin easier to use",
        "It makes it go faster",
        "It uses less electricity"
      ],
      correct: 0
    }
  },
  {
    id: 2,
    title: "Bitcoin vs Traditional Money",
    emoji: "⚔️",
    duration: "5 mins",
    reward: 500,
    content: [
      {
        type: "intro",
        text: "Compare Bitcoin with traditional money systems! 💡",
      },
      {
        type: "explanation",
        text: "Key Differences:",
        points: [
          "🎯 Fixed vs unlimited supply",
          "🏛️ No banks needed",
          "🌍 Works globally instantly",
          "🔒 You control your money"
        ]
      },
      {
        type: "activity",
        text: "Comparison Chart:\n1. List money types\n2. Compare features\n3. Find differences\n4. Understand advantages"
      }
    ],
    quiz: {
      question: "What's unique about Bitcoin?",
      options: [
        "No central control",
        "Needs banks",
        "Can be printed",
        "Only works locally"
      ],
      correct: 0
    }
  },
  {
    id: 3,
    title: "Wallet Security",
    emoji: "🔒",
    duration: "7 mins",
    reward: 700,
    content: [
      {
        type: "intro",
        text: "Learn to secure your Bitcoin! Your keys, your coins! 🔐",
      },
      {
        type: "explanation",
        text: "Security Basics:",
        points: [
          "🔑 Private keys are crucial",
          "📝 Backup your seed phrase",
          "🔒 Use strong passwords",
          "⚠️ Avoid scams"
        ]
      },
      {
        type: "activity",
        text: "Security Practice:\n1. Create secure wallet\n2. Practice backup\n3. Learn safe storage\n4. Test recovery"
      }
    ],
    quiz: {
      question: "What should you never share?",
      options: [
        "Private keys and seed phrase",
        "Public address",
        "Wallet interface",
        "Bitcoin price"
      ],
      correct: 0
    }
  },
  {
    id: 4,
    title: "Using Bitcoin",
    emoji: "💸",
    duration: "6 mins",
    reward: 600,
    content: [
      {
        type: "intro",
        text: "Start using Bitcoin in real life! Send, receive, and stack sats! ⚡",
      },
      {
        type: "explanation",
        text: "Basic Operations:",
        points: [
          "📤 Sending Bitcoin safely",
          "📥 Receiving Bitcoin",
          "💰 Managing transactions",
          "📊 Understanding fees"
        ]
      },
      {
        type: "activity",
        text: "Transaction Practice:\n1. Send small amounts\n2. Receive Bitcoin\n3. Check confirmations\n4. Track transactions"
      }
    ],
    quiz: {
      question: "What's important when sending Bitcoin?",
      options: [
        "Double-check addresses",
        "Send quickly",
        "Use highest fees",
        "Share private keys"
      ],
      correct: 0
    }
  },
  {
    id: 5,
    title: "Bitcoin Savings",
    emoji: "🏦",
    duration: "5 mins",
    reward: 500,
    content: [
      {
        type: "intro",
        text: "Stack sats and watch your savings grow! HODL strong! 💪",
      },
      {
        type: "explanation",
        text: "Saving Strategies:",
        points: [
          "📈 Dollar cost averaging",
          "🔄 Regular stacking",
          "📊 Track progress",
          "💎 Hold long term"
        ]
      },
      {
        type: "activity",
        text: "Stacking Plan:\n1. Set stack goals\n2. Create schedule\n3. Track progress\n4. Calculate growth"
      }
    ],
    quiz: {
      question: "What's the best Bitcoin saving strategy?",
      options: [
        "Regular small purchases",
        "One big purchase",
        "Timing the market",
        "Day trading"
      ],
      correct: 0
    }
  },
  {
    id: 6,
    title: "Bitcoin Future",
    emoji: "🔮",
    duration: "5 mins",
    reward: 500,
    content: [
      {
        type: "intro",
        text: "Explore Bitcoin's potential and future developments! ⚡",
      },
      {
        type: "explanation",
        text: "Future Developments:",
        points: [
          "⚡ Lightning Network scaling",
          "🌐 Global adoption",
          "💼 Business integration",
          "🏦 Financial revolution"
        ]
      },
      {
        type: "activity",
        text: "Future Vision:\n1. Research trends\n2. Track adoption\n3. Learn new features\n4. Understand impact"
      }
    ],
    quiz: {
      question: "What's the Lightning Network?",
      options: [
        "Bitcoin's scaling solution",
        "A power company",
        "A weather app",
        "A gaming network"
      ],
      correct: 0
    }
  }
];

export default bitcoinAdventureLessons;