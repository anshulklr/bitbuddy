// Mock Bitcoin address generation
export const generateBitcoinAddress = () => {
  // Generate a mock Bitcoin address
  const characters = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  let address = '1'; // Bitcoin addresses typically start with 1
  for (let i = 0; i < 33; i++) {
    address += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return address;
};

// Mock private key generation
export const generatePrivateKey = () => {
  const characters = '0123456789abcdef';
  let privateKey = '';
  for (let i = 0; i < 64; i++) {
    privateKey += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return privateKey;
};

// Generate a complete wallet
export const generateWallet = () => {
  return {
    address: generateBitcoinAddress(),
    privateKey: generatePrivateKey()
  };
};