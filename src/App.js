import React from "react";
import Product from "./components/Product";
import { ChakraProvider } from '@chakra-ui/react'
const App = () => {
  return <ChakraProvider>
    <Product/>
  </ChakraProvider>;
};

export default App;

  