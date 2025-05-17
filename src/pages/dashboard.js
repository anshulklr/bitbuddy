import {
  Box,
  Container,
  Flex,
  VStack,
  Heading,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  useColorModeValue,
} from '@chakra-ui/react';
import BitBuddyLogo from '../components/BitBuddyLogo';
import LearningModule from '../components/LearningModule';
import Goals from '../components/Goals';

export default function Dashboard() {
  const bgColor = useColorModeValue('orange.50', 'gray.900');
  
  return (
    <Box minH="100vh" bg={bgColor}>
      {/* Header */}
      <Box bg={useColorModeValue('white', 'gray.800')} py={4} shadow="sm">
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Flex align="center" gap={4}>
              <BitBuddyLogo width="50px" height="50px" />
              <Heading size="lg" color="orange.400">BitBuddy</Heading>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={8}>
        <Tabs colorScheme="orange" variant="enclosed">
          <TabList>
            <Tab>Learn & Earn</Tab>
            <Tab>Your Goals</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <LearningModule />
            </TabPanel>
            <TabPanel>
              <Goals />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
}