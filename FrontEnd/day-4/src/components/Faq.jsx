import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Stack,

  useColorModeValue,
} from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

// Define your custom theme
const theme = extendTheme({
  colors: {
    // Customize your colors if needed
  },
});

const FAQsPage = () => {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Frequently Asked Questions</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Here are some common questions and answers. If you can't find what
            you're looking for, feel free to{' '}
            <Link color={'blue.400'} href="/contact">
              contact us
            </Link>
            .
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          {/* Your FAQ content goes here */}
          <Stack spacing={4}>
            <Box>
              <Text fontWeight={'bold'}>Question 1?</Text>
              <Text>
                Answer to question 1 lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </Text>
            </Box>
            <Box>
              <Text fontWeight={'bold'}>Question 2?</Text>
              <Text>
                Answer to question 2 lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </Text>
            </Box>
            {/* Add more questions and answers as needed */}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

const Fpage= () => {
  return (
    <div>
    <Topbar/>
    <Sidebar/>
    <ChakraProvider theme={theme}>
      <FAQsPage />
    </ChakraProvider>
    </div>
  );
};

export default Fpage;
