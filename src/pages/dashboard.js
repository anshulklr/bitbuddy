import { useEffect, useState } from 'react';
import {
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  Button,
  useToast,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import ModuleList from '../components/ModuleList';
import Wallet from '../components/Wallet';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('bitbuddy_user');
    if (!userData) {
      router.push('/auth');
    } else {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('bitbuddy_user');
    router.push('/auth');
    toast({
      title: 'Logged out successfully',
      status: 'success',
      duration: 2000,
    });
  };

  if (!user) return null;

  return (
    <Box minH="100vh" bg="gray.50">
      <Box bg="white" shadow="sm" py={4}>
        <Container maxW="container.xl">
          <HStack justify="space-between">
            <Heading size="lg" color="orange.400">BitBuddy</Heading>
            <Button onClick={handleLogout} variant="ghost">
              Logout
            </Button>
          </HStack>
        </Container>
      </Box>

      <Container maxW="container.xl" py={8}>
        <Tabs colorScheme="orange">
          <TabList>
            <Tab>Learn & Earn</Tab>
            <Tab>Wallet</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <ModuleList />
            </TabPanel>
            <TabPanel>
              <Wallet />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
}