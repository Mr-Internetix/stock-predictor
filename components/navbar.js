import NextLink from 'next/link'
import { Container, Stack, Link, Heading, Flex, Menu, MenuButton, MenuItem, Box, MenuList, IconButton } from '@chakra-ui/react'
// importing icons 
import Logo from './logo'
import { IoLogoGithub } from 'react-icons/io5'
import { HamburgerIcon } from '@chakra-ui/icons'
import Head from 'next/head'


const LinkItem= ({ href , path, _target , children, ...props  }) =>{
  const active = path === href
  const inactiveColor =  null
  
  return(
    <NextLink href={href} passHref>
      <Link p={2} bg={active ? 'grassTeal':undefined}
      color={active ? '#303032' : inactiveColor}
      _target={_target}    
      {...props}>
        {children}
      </Link>
    </NextLink>
  )
}

  
const Navbar = props => {

  const { path } = props

  return (
    <Box position="fixed" w="100%" as="nav" bg="black" backdropBlur={10} zIndex={1} {...props}>
      <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">

        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/post" path={path}>
            Get Stats 
          </LinkItem>
        </Stack>


      </Container>

    </Box>

  )
}





export default Navbar
