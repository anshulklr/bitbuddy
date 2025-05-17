// Configuration for all modules
export const MODULES_CONFIG = [
  {
    id: 1,
    title: "Money Basics",
    description: "Learn the fundamentals of money and how it works",
    emoji: "💰",
    slug: "money-basics"
  },
  {
    id: 2,
    title: "Smart Saving Adventures",
    description: "Discover the magic of saving and watching money grow",
    emoji: "🐷",
    slug: "smart-saving"
  },
  {
    id: 3,
    title: "Bitcoin Adventure",
    description: "Explore the exciting world of Bitcoin",
    emoji: "₿",
    slug: "bitcoin-adventure"
  },
  {
    id: 4,
    title: "Family Money Matters",
    description: "Learn about family budgets and planning together",
    emoji: "👨‍👩‍👧‍👦",
    slug: "family-money"
  }
];

// Module helper functions
export const getModuleBySlug = (slug) => {
  return MODULES_CONFIG.find(module => module.slug === slug);
};

export const getModuleById = (id) => {
  return MODULES_CONFIG.find(module => module.id === id);
};