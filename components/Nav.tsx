import { Box, Center, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { NavTabLink } from './NavTabLink';
// import { UserProfile } from './UserProfile';

export const Nav = () => (
  <Box bg={useColorModeValue('gray.50', 'gray.700')}>
    <Navbar>
      <Navbar.Brand>
        <Center marginEnd={6}>
          <Logo h="6" iconColor="blue.600" />
        </Center>
      </Navbar.Brand>
      <Navbar.Links>
        <NavTabLink>Features</NavTabLink>
        <NavTabLink>Documentation</NavTabLink>
        <NavTabLink>Pricing</NavTabLink>
        <NavTabLink href="/login">Login</NavTabLink>
        <NavTabLink href="/logout">Logout</NavTabLink>
      </Navbar.Links>
      <Navbar.Links>{/* <UserProfile name="Christian Schröter" avatarUrl="https://ca.slack-edge.com/T024F7F15-UJVQ359SP-81fc55875723-512" email="mail@chidori-ui.com" /> */}</Navbar.Links>
    </Navbar>
  </Box>
);

export default Nav;
