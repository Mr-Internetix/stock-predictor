import NextLink from 'next/link'
import {useEffect} from 'react'
import { Box , Button, Container , Divider , Heading , Text} from '@chakra-ui/react'
import notfound from '../public/images/not-found.json'
import lottie from "lottie-web/build/player/lottie_light";

const Notfound = () =>{
  useEffect(()=>{
lottie.loadAnimation({
container:document.querySelector('#lottie-container'),
animationData:notfound,
renderer:"svg",
loop:true,
autoplay:true
})

  },[]);

  return(
    <Container mt={18}>
      <div id="lottie-container">

      </div>

      <Heading as="h1" align="center"> Not Found ! </Heading>
      <Text align="center">
        The page you&apos;re looking for was not found 
      </Text>
      <Divider my={6}/>
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme='green' > Back To Home</Button>
        </NextLink>
      </Box>
    </Container>
    
  )
}


export default Notfound
