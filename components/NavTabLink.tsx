import { Link, LinkProps, Tab, useColorModeValue as mode } from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { FC } from 'react';

export const NavTabLink: FC<LinkProps> = (props) => {
  const link = props.href ? props.href : '/';

  return (
    <Tab _selected={{ color: mode('blue.600', 'blue.200') }} _focus={{ shadow: 'none' }} justifyContent="flex-start" px={{ base: 4, md: 6 }}>
      <NextLink href={link} passHref>
        <Link
          // as="div"
          display="block"
          fontWeight="medium"
          lineHeight="1.25rem"
          color="inherit"
          _hover={{ color: mode('blue.600', 'blue.200') }}
          _activeLink={{
            color: mode('blue.600', 'blue.200'),
          }}
          {...props}
        />
      </NextLink>
    </Tab>
  );
};
