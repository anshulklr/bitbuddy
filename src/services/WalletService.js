// Initialize Buffer globally if it doesn't exist
if (typeof window !== 'undefined' && !window.Buffer) {
  window.Buffer = require('buffer/').Buffer;
}

let SparkWallet;

// Dynamic import of Spark SDK to avoid SSR issues
if (typeof window !== 'undefined') {
  import('@buildonspark/spark-sdk').then(module => {
    SparkWallet = module.SparkWallet;
  }).catch(error => {
    console.error('Error loading Spark SDK:', error);
  });
}

// Helper function to safely convert BigInt to Number
const safeBigIntToNumber = (value) => {
  if (typeof value === 'bigint') {
    // Convert to string first to avoid precision loss
    return Number(value.toString());
  }
  return value;
};

class WalletService {
  static async waitForInitialization() {
    // Wait for SDK to be loaded
    let attempts = 0;
    while (!SparkWallet && attempts < 10) {
      await new Promise(resolve => setTimeout(resolve, 500));
      attempts++;
    }
    if (!SparkWallet) {
      throw new Error('Failed to initialize Spark SDK');
    }
  }

  // Generate a new wallet
  static async generateWallet() {
    try {
      await this.waitForInitialization();

      // Initialize new wallet
      const { wallet, mnemonic } = await SparkWallet.initialize({
        options: {
          network: "MAINNET"
        }
      });

      // Get the spark address
      const address = await wallet.getSparkAddress();

      // Get initial balance
      const balance = await wallet.getBalance();

      return {
        mnemonic,
        address,
        balance: safeBigIntToNumber(balance?.balance || 0),
        wallet
      };
    } catch (error) {
      console.error('Error generating Spark wallet:', error);
      throw new Error('Failed to generate Spark wallet: ' + error.message);
    }
  }

  // Load existing wallet
  static async loadWallet(mnemonic) {
    try {
      await this.waitForInitialization();

      const { wallet } = await SparkWallet.initialize({
        mnemonicOrSeed: mnemonic,
        options: {
          network: "MAINNET"
        }
      });
      return wallet;
    } catch (error) {
      console.error('Error loading wallet:', error);
      throw new Error('Failed to load wallet: ' + error.message);
    }
  }

  // Get wallet balance
  static async getWalletBalance(mnemonic) {
    try {
      const wallet = await this.loadWallet(mnemonic);
      const result = await wallet.getBalance();
      return safeBigIntToNumber(result?.balance || 0);
    } catch (error) {
      console.error('Error getting balance:', error);
      return 0;
    }
  }

  // Save user data to local storage
  static saveUser(userData) {
    if (typeof window === 'undefined') return false;
    
    try {
      // Convert any BigInt values to numbers before storing
      const processedUserData = {
        ...userData,
        balance: safeBigIntToNumber(userData.balance || 0)
      };

      // Save user data
      const users = JSON.parse(localStorage.getItem('bitbuddy_users') || '[]');
      const userIndex = users.findIndex(u => u.email === processedUserData.email);

      if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...processedUserData };
      } else {
        users.push(processedUserData);
      }

      localStorage.setItem('bitbuddy_users', JSON.stringify(users));

      // Save current user session (without mnemonic)
      const sessionData = {
        email: processedUserData.email,
        address: processedUserData.address,
        balance: processedUserData.balance
      };
      localStorage.setItem('bitbuddy_user', JSON.stringify(sessionData));

      return true;
    } catch (error) {
      console.error('Error saving user data:', error);
      return false;
    }
  }

  // Get user data from local storage
  static getUser(email) {
    if (typeof window === 'undefined') return null;
    
    try {
      const users = JSON.parse(localStorage.getItem('bitbuddy_users') || '[]');
      return users.find(u => u.email === email) || null;
    } catch (error) {
      console.error('Error getting user data:', error);
      return null;
    }
  }

  // Get current user session
  static getCurrentUser() {
    if (typeof window === 'undefined') return null;
    
    try {
      const userData = localStorage.getItem('bitbuddy_user');
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  }

  // Logout user
  static logout() {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.removeItem('bitbuddy_user');
      return true;
    } catch (error) {
      console.error('Error logging out:', error);
      return false;
    }
  }

  // Add transaction to history
  static addTransaction(email, transaction) {
    if (typeof window === 'undefined') return false;
    
    try {
      const user = this.getUser(email);
      if (!user) return false;

      const processedTransaction = {
        ...transaction,
        amount: safeBigIntToNumber(transaction.amount),
        timestamp: new Date().toISOString()
      };

      const transactions = JSON.parse(localStorage.getItem(`transactions_${email}`) || '[]');
      transactions.push(processedTransaction);
      localStorage.setItem(`transactions_${email}`, JSON.stringify(transactions));
      return true;
    } catch (error) {
      console.error('Error adding transaction:', error);
      return false;
    }
  }

  // Get transaction history
  static getTransactionHistory(email) {
    if (typeof window === 'undefined') return [];
    
    try {
      return JSON.parse(localStorage.getItem(`transactions_${email}`) || '[]');
    } catch (error) {
      console.error('Error getting transaction history:', error);
      return [];
    }
  }

  // Add reward transaction
  static async addReward(email, amount) {
    try {
      const user = this.getUser(email);
      if (!user) return false;

      const transaction = {
        type: 'reward',
        amount: safeBigIntToNumber(amount),
        timestamp: new Date().toISOString()
      };

      // Add to transaction history
      return this.addTransaction(email, transaction);
    } catch (error) {
      console.error('Error adding reward:', error);
      return false;
    }
  }
}

// Export as named and default export
export { WalletService };
export default WalletService;