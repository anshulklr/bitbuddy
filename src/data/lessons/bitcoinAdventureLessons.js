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
        text: "Discover Bitcoin: The first decentralized digital currency that's changing the future of money! 🚀",
      },
      {
        type: "explanation",
        text: "Core Bitcoin Concepts:",
        points: [
          "₿ Fixed supply: Only 21 million Bitcoin will ever exist",
          "🔗 Blockchain technology: Transparent and immutable ledger",
          "🌐 Decentralized: No government or bank control",
          "💻 Peer-to-peer: Direct transactions without intermediaries"
        ]
      },
      {
        type: "explanation",
        text: "Why Bitcoin Matters:",
        points: [
          "🚫 No inflation: Can't be printed like government money",
          "🌍 Borderless: Works everywhere, anytime",
          "🔒 Self-custody: You control your own money",
          "⚡ Innovation: New financial revolution"
        ]
      },
      {
        type: "activity",
        text: "Bitcoin Network Visualization:\n1. Draw the Bitcoin network\n2. Show how transactions flow\n3. Illustrate mining process\n4. Understand decentralization",
      },
      {
        type: "funFact",
        text: "Bitcoin was created in 2009 by Satoshi Nakamoto during the financial crisis as an alternative to bank-controlled money! 🔐",
      }
    ],
    quiz: {
      question: "Why is Bitcoin's 21 million supply limit important?",
      options: [
        "It makes Bitcoin inflation-proof",
        "It makes Bitcoin easier to use",
        "It makes transactions faster",
        "It makes mining easier"
      ],
      correct: 0
    }
  }
  // Add other Bitcoin Adventure lessons...
];

export default bitcoinAdventureLessons;