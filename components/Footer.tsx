import { Box, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';
// import { Copyright } from './Copyright';
import { Logo } from './Logo';
// import { SocialMediaLinks } from './SocialMediaLinks';

const Footer = () => (
  <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Text fontSize="sm" fontWeight="bold" color="gray.500">
          © {new Date().getFullYear()}
        </Text>
        {/* <Logo /> */}
        {/* <SocialMediaLinks /> */}
      </Stack>
      {/* <Copyright alignSelf={{ base: 'center', sm: 'start' }} /> */}
    </Stack>
  </Box>
);

export default Footer;
