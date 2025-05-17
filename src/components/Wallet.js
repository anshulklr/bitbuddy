import { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  useToast,
  Heading,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useClipboard,
} from '@chakra-ui/react';
import WalletService from '../services/WalletService';

export default function Wallet() {
  const [walletInfo, setWalletInfo] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const toast = useToast();
  const { onCopy: copyAddress } = useClipboard(walletInfo?.address || '');

  useEffect(() => {
    loadWalletInfo();
  }, []);

  const loadWalletInfo = () => {
    const user = JSON.parse(localStorage.getItem('bitbuddy_user'));
    if (user) {
      const balance = WalletService.getWalletBalance(user.walletAddress);
      setWalletInfo({
        address: user.walletAddress,
        balance: balance
      });
      
      const history = WalletService.getTransactionHistory(user.walletAddress);
      setTransactions(history);
    }
  };

  const handleCopyAddress = () => {
    copyAddress();
    toast({
      title: 'Address Copied',
      status: 'success',
      duration: 2000,
    });
  };

  return (
    <Box p={6}>
      <VStack spacing={6} align="stretch">
        <Heading size="lg" color="orange.400">
          Your Bitcoin Wallet
        </Heading>

        {walletInfo && (
          <>
            <Box borderWidth={1} borderRadius="lg" p={6}>
              <VStack spacing={4} align="stretch">
                <Stat>
                  <StatLabel>Balance</StatLabel>
                  <StatNumber>{walletInfo.balance} sats</StatNumber>
                  <StatHelpText>
                    ≈ ${(walletInfo.balance * 0.0004).toFixed(2)} USD
                  </StatHelpText>
                </Stat>

                <Box>
                  <Text fontWeight="bold" mb={2}>Wallet Address</Text>
                  <HStack>
                    <Text fontSize="sm" fontFamily="monospace">
                      {walletInfo.address}
                    </Text>
                    <Button size="sm" onClick={handleCopyAddress}>
                      Copy
                    </Button>
                  </HStack>
                </Box>
              </VStack>
            </Box>

            <Box>
              <Heading size="md" mb={4}>Transaction History</Heading>
              {transactions.length > 0 ? (
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Date</Th>
                      <Th>Type</Th>
                      <Th isNumeric>Amount (sats)</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {transactions.map((tx, index) => (
                      <Tr key={index}>
                        <Td>{new Date(tx.timestamp).toLocaleDateString()}</Td>
                        <Td>
                          <Badge colorScheme={tx.type === 'reward' ? 'green' : 'blue'}>
                            {tx.type}
                          </Badge>
                        </Td>
                        <Td isNumeric>{tx.amount}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              ) : (
                <Text color="gray.500">No transactions yet</Text>
              )}
            </Box>
          </>
        )}
      </VStack>
    </Box>
  );
}