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
    const user = localStorage.getItem('bitbuddy_user');
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
        const users = JSON.parse(localStorage.getItem('bitbuddy_users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
          throw new Error('Invalid credentials');
        }

        // Set current user
        localStorage.setItem('bitbuddy_user', JSON.stringify({
          email: user.email,
          walletAddress: user.walletAddress
        }));

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
        const users = JSON.parse(localStorage.getItem('bitbuddy_users') || '[]');
        
        if (users.some(u => u.email === email)) {
          throw new Error('Email already exists');
        }

        // Generate a new wallet for the user
        const newWallet = await generateWallet();

        const newUser = {
          email,
          password,
          walletAddress: newWallet.address,
          privateKey: newWallet.privateKey,
          createdAt: new Date().toISOString(),
          balance: 0,
        };

        users.push(newUser);
        localStorage.setItem('bitbuddy_users', JSON.stringify(users));

        // Set current user
        localStorage.setItem('bitbuddy_user', JSON.stringify({
          email: newUser.email,
          walletAddress: newUser.walletAddress
        }));

        toast({
          title: 'Success',
          description: 'Account created successfully',
          status: 'success',
          duration: 3000,
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