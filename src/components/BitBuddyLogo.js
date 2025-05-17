import { Box } from '@chakra-ui/react';
import { useState } from 'react';

export default function BitBuddyLogo({ width = "200px", height = "200px" }) {
  const [useFallback, setUseFallback] = useState(false);

  return (
    <Box position="relative" width={width} height={height}>
      {!useFallback ? (
        <object
          data="https://www.herecomesbitcoin.org/assets/HereComesBitcoinAssets/Anime.svg"
          type="image/svg+xml"
          width="100%"
          height="100%"
          onError={() => setUseFallback(true)}
          style={{ objectFit: 'contain' }}
        >
          <img
            src="/download.png"
            alt="BitBuddy Mascot"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </object>
      ) : (
        <img
          src="/download.png"
          alt="BitBuddy Mascot"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      )}
    </Box>
  );
}