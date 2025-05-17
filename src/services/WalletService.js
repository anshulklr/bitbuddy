let SparkWallet;

// Dynamic import of Spark SDK to avoid SSR issues
if (typeof window !== 'undefined') {
  import('@buildonspark/spark-sdk').then(module => {
    SparkWallet = module.SparkWallet;
  });
}

class WalletService {
  // Generate a new wallet
  static async generateWallet() {
    try {
      if (!SparkWallet) {
        throw new Error('Spark SDK not initialized');
      }

      // Initialize new wallet
      const { wallet, mnemonic } = await SparkWallet.initialize({
        options: {
          network: "MAINNET"
        }
      });

      // Get the spark address
      const address = await wallet.getSparkAddress();

      return {
        mnemonic,
        address
      };
    } catch (error) {
      console.error('Error generating Spark wallet:', error);
      throw new Error('Failed to generate Spark wallet: ' + error.message);
    }
  }

  // Load existing wallet
  static async loadWallet(mnemonic) {
    try {
      if (!SparkWallet) {
        throw new Error('Spark SDK not initialized');
      }

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
      return result.balance;
    } catch (error) {
      console.error('Error getting balance:', error);
      return 0;
    }
  }

  // Save user data to local storage
  static saveUser(userData) {
    try {
      // Save user data
      const users = JSON.parse(localStorage.getItem('bitbuddy_users') || '[]');
      const userIndex = users.findIndex(u => u.email === userData.email);

      if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...userData };
      } else {
        users.push(userData);
      }

      localStorage.setItem('bitbuddy_users', JSON.stringify(users));

      // Save current user session (without mnemonic)
      const sessionData = {
        email: userData.email,
        address: userData.address
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
    try {
      const userData = localStorage.getItem('bitbuddy_user');
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  }

  // Add transaction to history
  static addTransaction(email, transaction) {
    try {
      const user = this.getUser(email);
      if (!user) return false;

      const transactions = JSON.parse(localStorage.getItem(`transactions_${email}`) || '[]');
      transactions.push({
        ...transaction,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem(`transactions_${email}`, JSON.stringify(transactions));
      return true;
    } catch (error) {
      console.error('Error adding transaction:', error);
      return false;
    }
  }

  // Get transaction history
  static getTransactionHistory(email) {
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
        amount: amount,
        timestamp: new Date().toISOString()
      };

      // Add to transaction history
      this.addTransaction(email, transaction);
      
      return true;
    } catch (error) {
      console.error('Error adding reward:', error);
      return false;
    }
  }
}

export default WalletService;