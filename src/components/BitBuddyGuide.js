import { Box, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import soundManager from '../utils/soundManager';

const float = css`
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
`;

const wave = css`
  @keyframes wave {
    0% { transform: rotate(0deg); }
    20% { transform: rotate(14deg); }
    40% { transform: rotate(-4deg); }
    60% { transform: rotate(10deg); }
    80% { transform: rotate(-4deg); }
    100% { transform: rotate(0deg); }
  }
`;

const AnimatedBitBuddy = styled(motion.div)`
  ${float}
  animation: float 3s ease-in-out infinite;
  &:hover {
    ${wave}
    animation: wave 1s ease-in-out;
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

const MotionBox = motion(Box);

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
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onHoverStart={handleHover}
          onClick={handleClick}
        >
          <MotionBox
            as="img"
            src={emotions[emotion]}
            alt="BitBuddy"
            {...mascotSizes[size]}
            onError={(e) => {
              e.target.src = "/download.png";
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatedBitBuddy>
        {withMessage && (
          <SpeechBubble 
            ml={4}
            as={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Text fontSize={size === "small" ? "sm" : "md"}>{message}</Text>
          </SpeechBubble>
        )}
      </Box>
    </VStack>
  );
}