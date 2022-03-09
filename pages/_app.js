import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
function MyApp({ Component, pageProps }) {
 
  return(  
    <ChakraProvider>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </ChakraProvider>

  )}

export default MyApp
