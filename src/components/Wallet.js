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
  Alert,
  AlertIcon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import WalletService from '../services/WalletService';

export default function Wallet() {
  const [walletInfo, setWalletInfo] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();
  const { onCopy: copyAddress } = useClipboard(walletInfo?.address || '');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadWalletInfo();
  }, []);

  const loadWalletInfo = async () => {
    try {
      const currentUser = WalletService.getCurrentUser();
      if (!currentUser) return;

      const userData = WalletService.getUser(currentUser.email);
      setUser(userData);

      // Load wallet balance
      const balance = await WalletService.getWalletBalance(userData.mnemonic);
      
      setWalletInfo({
        address: userData.address,
        balance: balance
      });
      
      // Load transaction history
      const history = WalletService.getTransactionHistory(userData.email);
      setTransactions(history);
    } catch (error) {
      console.error('Error loading wallet:', error);
      toast({
        title: 'Error',
        description: 'Failed to load wallet information',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
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

  const showMnemonic = () => {
    onOpen();
  };

  if (isLoading) {
    return (
      <Box p={6}>
        <Text>Loading wallet information...</Text>
      </Box>
    );
  }

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
                  <Text fontWeight="bold" mb={2}>Spark Address</Text>
                  <HStack>
                    <Text fontSize="sm" fontFamily="monospace">
                      {walletInfo.address}
                    </Text>
                    <Button size="sm" onClick={handleCopyAddress}>
                      Copy
                    </Button>
                  </HStack>
                </Box>

                <Button size="sm" colorScheme="orange" onClick={showMnemonic}>
                  Show Recovery Phrase
                </Button>
              </VStack>
            </Box>

            <Alert status="info">
              <AlertIcon />
              Earn sats by completing lessons and save them for your goals!
            </Alert>

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

      {/* Mnemonic Display Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Recovery Phrase</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Alert status="warning" mb={4}>
              <AlertIcon />
              Never share this phrase with anyone!
            </Alert>
            <Text fontFamily="monospace" p={4} bg="gray.100" borderRadius="md">
              {user?.mnemonic}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}