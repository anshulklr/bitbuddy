import { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  useToast,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import WalletService from '../services/WalletService';

// Helper function to check email validity
const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Helper function to check password strength
const isStrongPassword = (password) => {
  return password.length >= 8;
};

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();

  // Check if user is already logged in
  useEffect(() => {
    const user = WalletService.getCurrentUser();
    if (user) {
      router.push('/dashboard');
    }
  }, []);

  const handleAuth = async () => {
    if (!email || !password) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (!isValidEmail(email)) {
      toast({
        title: 'Error',
        description: 'Please enter a valid email',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (!isStrongPassword(password)) {
      toast({
        title: 'Error',
        description: 'Password must be at least 8 characters long',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);

    try {
      if (isLogin) {
        // Login logic
        const user = WalletService.getUser(email);
        
        if (!user || user.password !== password) {
          throw new Error('Invalid credentials');
        }

        // Load wallet and verify it works
        await WalletService.loadWallet(user.mnemonic);

        // Save current session
        WalletService.saveUser(user);

        toast({
          title: 'Success',
          description: 'Logged in successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });

        router.push('/dashboard');
      } else {
        // Sign up logic
        const existingUser = WalletService.getUser(email);
        if (existingUser) {
          throw new Error('Email already exists');
        }

        // Generate new wallet
        const { mnemonic, address } = await WalletService.generateWallet();

        // Save user data
        const newUser = {
          email,
          password,
          mnemonic,
          address,
          createdAt: new Date().toISOString()
        };

        WalletService.saveUser(newUser);

        toast({
          title: 'Success',
          description: 'Account created successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });

        // Show mnemonic backup warning
        toast({
          title: 'Important',
          description: 'Please save your mnemonic phrase safely: ' + mnemonic,
          status: 'warning',
          duration: null,
          isClosable: true,
        });

        router.push('/dashboard');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxW="container.sm" py={10}>
      <VStack spacing={8}>
        <Heading color="orange.400">
          {isLogin ? 'Welcome Back!' : 'Create Account'}
        </Heading>
        
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <FormHelperText>
            Password must be at least 8 characters long.
          </FormHelperText>
        </FormControl>

        <Button
          colorScheme="orange"
          width="full"
          onClick={handleAuth}
          isLoading={isLoading}
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </Button>

        <Text>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <Button
            variant="link"
            color="orange.500"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </Button>
        </Text>
      </VStack>
    </Container>
  );
}