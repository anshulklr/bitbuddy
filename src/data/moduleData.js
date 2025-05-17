import { NEW_SAVING_LESSONS } from './additionalLessons';
import { NEW_BITCOIN_LESSONS } from './bitcoinLessons';
import { NEW_FAMILY_LESSONS } from './familyLessons';

// Update existing modules with new lessons
MODULE_2_LESSONS.push(...NEW_SAVING_LESSONS);
MODULE_3_LESSONS.push(...NEW_BITCOIN_LESSONS);
MODULE_4_LESSONS.push(...NEW_FAMILY_LESSONS);

// Recalculate totalRewards
ALL_MODULES = ALL_MODULES.map(module => ({
  ...module,
  totalRewards: module.lessons.reduce((sum, lesson) => sum + lesson.reward, 0)
}));