import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'

const Navbar = () => {
  return (
    // HStack aligns items horizontally
    <HStack>
        <Image src={logo} boxSize={'60px'}/>
        <Text>Navbar</Text>
    </HStack>
  )
}

export default Navbar