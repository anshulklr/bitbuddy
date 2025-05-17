import { generateWallet } from '../utils/bitcoin';

class WalletService {
  // Generate a new wallet
  static async generateWallet() {
    try {
      // Generate mnemonic (12 random words for demo)
      const words = [
        'abandon', 'ability', 'able', 'about', 'above', 'absent',
        'absorb', 'abstract', 'absurd', 'abuse', 'access', 'accident'
      ];
      const mnemonic = words.sort(() => Math.random() - 0.5).join(' ');

      // Generate address using Bitcoin utility
      const { address, privateKey } = generateWallet();

      return {
        mnemonic,
        address,
        privateKey
      };
    } catch (error) {
      console.error('Error generating wallet:', error);
      throw new Error('Failed to generate wallet');
    }
  }

  // Load existing wallet
  static async loadWallet(mnemonic) {
    try {
      // In real implementation, this would initialize Spark wallet
      // For now, just verify mnemonic exists
      if (!mnemonic) throw new Error('Invalid mnemonic');
      return true;
    } catch (error) {
      console.error('Error loading wallet:', error);
      throw new Error('Failed to load wallet');
    }
  }

  // Get wallet balance
  static async getWalletBalance(mnemonic) {
    try {
      // Mock balance calculation based on transactions
      const user = this.getCurrentUser();
      if (!user) return 0;

      const transactions = this.getTransactionHistory(user.email);
      const balance = transactions.reduce((sum, tx) => sum + tx.amount, 0);
      return balance;
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

      // Save current user session
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
      const transaction = {
        type: 'reward',
        amount: amount,
        timestamp: new Date().toISOString()
      };
      return this.addTransaction(email, transaction);
    } catch (error) {
      console.error('Error adding reward:', error);
      return false;
    }
  }

  // Mock functions for future Spark SDK implementation
  static async getSparkAddress(mnemonic) {
    // This would normally generate a real Spark address
    // For now, return the stored address
    const user = this.getCurrentUser();
    return user ? user.address : null;
  }
}

export default WalletService;