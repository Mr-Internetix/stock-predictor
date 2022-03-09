import Head from 'next/head'
import {fragment}  from 'react'
import {Box , Container} from '@chakra-ui/react'
import Footer from '../footer'
import Navbar from '../navbar'

const Main = ( {children} ) =>{
  return(
    <Box as='main' pb={8}>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Stock predictor "/>
      <meta name="author" content="mr-internetix" />
      <meta name="author" content="Ajit Yadav" />
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mr_internetix" />
      <meta name="twitter:creator" content="@mr_internetix" />
      <meta name="twitter:image" content="/card.png" />
      <meta property="og:site_name" content="Stock predictor Homepage" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/card.png" />
      <title>Stock Predictor - Homepage </title>
    </Head>
    <Navbar />
    <Container maxw="container.md" p={14}>
    {children}
    <Footer/>
    </Container>
    </Box>
  )

}


export default Main 

