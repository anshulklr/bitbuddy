// Wallet service to handle Bitcoin wallet operations
class WalletService {
  // Generate a new wallet
  static async generateWallet() {
    try {
      const response = await bitcoin__generate_key();
      return {
        address: response.address,
        privateKey: response.privateKey,
      };
    } catch (error) {
      console.error('Error generating wallet:', error);
      throw new Error('Failed to generate wallet');
    }
  }

  // Get wallet balance
  static getWalletBalance(address) {
    const users = JSON.parse(localStorage.getItem('bitbuddy_users') || '[]');
    const user = users.find(u => u.walletAddress === address);
    return user ? user.balance : 0;
  }

  // Update wallet balance
  static updateWalletBalance(address, newBalance) {
    const users = JSON.parse(localStorage.getItem('bitbuddy_users') || '[]');
    const userIndex = users.findIndex(u => u.walletAddress === address);
    
    if (userIndex !== -1) {
      users[userIndex].balance = newBalance;
      localStorage.setItem('bitbuddy_users', JSON.stringify(users));
      return true;
    }
    return false;
  }

  // Add rewards to wallet
  static addRewards(address, amount) {
    const currentBalance = this.getWalletBalance(address);
    return this.updateWalletBalance(address, currentBalance + amount);
  }

  // Get transaction history
  static getTransactionHistory(address) {
    const history = JSON.parse(localStorage.getItem(`transactions_${address}`) || '[]');
    return history;
  }

  // Add transaction to history
  static addTransaction(address, transaction) {
    const history = this.getTransactionHistory(address);
    history.push({
      ...transaction,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem(`transactions_${address}`, JSON.stringify(history));
  }
}

export default WalletService;