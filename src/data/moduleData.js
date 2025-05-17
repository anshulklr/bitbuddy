import { MODULES_CONFIG } from './modules/config';

// Import all lesson sets
import moneyBasicsLessons from './lessons/moneyBasicsLessons';
import smartSavingLessons from './lessons/smartSavingLessons';
import bitcoinAdventureLessons from './lessons/bitcoinAdventureLessons';
import familyMoneyLessons from './lessons/familyMoneyLessons';

// Create lesson map
const MODULE_LESSONS = {
  'money-basics': moneyBasicsLessons,
  'smart-saving': smartSavingLessons,
  'bitcoin-adventure': bitcoinAdventureLessons,
  'family-money': familyMoneyLessons
};

// Build complete modules with lessons and calculations
export const ALL_MODULES = MODULES_CONFIG.map(moduleConfig => ({
  ...moduleConfig,
  lessons: MODULE_LESSONS[moduleConfig.slug],
  totalRewards: MODULE_LESSONS[moduleConfig.slug].reduce(
    (sum, lesson) => sum + lesson.reward,
    0
  )
}));

// Helper functions
export const getModuleLessons = (moduleSlug) => MODULE_LESSONS[moduleSlug] || [];

export const getLesson = (moduleSlug, lessonId) => {
  const lessons = MODULE_LESSONS[moduleSlug];
  return lessons?.find(lesson => lesson.id === lessonId);
};

export const getLessonCount = (moduleSlug) => {
  return MODULE_LESSONS[moduleSlug]?.length || 0;
};