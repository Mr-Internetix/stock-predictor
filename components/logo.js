import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'
import { Text }from '@chakra-ui/react'


const LogoBox = styled.span`
font-weight:bold;
font-size:18px;
display:inline-flex;
align-items:center;
height:30px;
line-height:20px;
padding:20px;

img{
    transition:200ms ease;

}

&:hover img{
    transform:rotate(20deg);
}
`


const Logo = () => {
    const ProfileImg = '/images/logo.png'

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={ProfileImg} width={30} height={30} alt='logo' />
                    <Text ml={3}>
                        Stocks Predictor
                    </Text>
                </LogoBox>
            </a>
        </Link>

        )
    }


export default Logo
