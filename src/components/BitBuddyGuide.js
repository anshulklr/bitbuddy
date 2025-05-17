import { Box, Text, VStack, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import soundManager from '../utils/soundManager';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const wave = keyframes`
  0% { transform: rotate(0deg); }
  20% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  60% { transform: rotate(10deg); }
  80% { transform: rotate(-4deg); }
  100% { transform: rotate(0deg); }
`;

const AnimatedBitBuddy = styled(motion.div)`
  animation: ${float} 3s ease-in-out infinite;
  &:hover {
    animation: ${wave} 1s ease-in-out;
  }
`;

const SpeechBubble = styled(Box)`
  position: relative;
  background: #FFF;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-left: 2rem;
  
  &:before {
    content: '';
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
    border-style: solid;
    border-width: 10px 10px 10px 0;
    border-color: transparent #FFF transparent transparent;
  }
`;

export default function BitBuddyGuide({ 
  message = "Hi! I'm BitBuddy, your guide to financial freedom! 👋",
  emotion = "happy",
  size = "medium",
  withMessage = true
}) {
  const mascotSizes = {
    small: { width: "50px", height: "50px" },
    medium: { width: "100px", height: "100px" },
    large: { width: "150px", height: "150px" }
  };

  const emotions = {
    happy: "https://www.herecomesbitcoin.org/assets/HereComesBitcoinAssets/Anime.svg",
    excited: "https://www.herecomesbitcoin.org/assets/HereComesBitcoinAssets/Anime.svg",
    thinking: "https://www.herecomesbitcoin.org/assets/HereComesBitcoinAssets/Anime.svg",
    // We can add more emotion variations when available
  };

  const variants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.2 }
    },
    bounce: {
      y: ["0%", "-20%", "0%"],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const handleHover = () => {
    soundManager.play('hover', 0.1);
  };

  const handleClick = () => {
    soundManager.play('click', 0.2);
  };

  return (
    <VStack spacing={4} align={withMessage ? "start" : "center"}>
      <Box display="flex" alignItems="center">
        <AnimatedBitBuddy
          as={motion.div}
          whileHover="hover"
          whileTap="tap"
          variants={variants}
          onHoverStart={handleHover}
          onClick={handleClick}
        >
          <Box 
            as="img"
            src={emotions[emotion]}
            alt="BitBuddy"
            {...mascotSizes[size]}
            onError={(e) => {
              e.target.src = "/download.png"; // Fallback to local image
            }}
          />
        </AnimatedBitBuddy>
        {withMessage && (
          <SpeechBubble ml={4}>
            <Text fontSize={size === "small" ? "sm" : "md"}>{message}</Text>
          </SpeechBubble>
        )}
      </Box>
    </VStack>
  );
}