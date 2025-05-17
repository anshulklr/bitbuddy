// Add bitcoin utils
const generateBitcoinKey = async () => {
  try {
    return await bitcoin__generate_key();
  } catch (error) {
    console.error('Error generating Bitcoin key:', error);
    throw new Error('Failed to generate wallet key');
  }
};