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

      return {
        mnemonic,
        address,
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
      return result.balance;
    } catch (error) {
      console.error('Error getting balance:', error);
      return 0;
    }
  }

  // Rest of the code remains the same...
}