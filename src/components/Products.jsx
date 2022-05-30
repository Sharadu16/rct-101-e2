import React, { useEffect, useState } from "react";
import axios from "axios";
import AddProduct from "./AddProduct";
import Product from "./Product";
import Pagination from "./Pagination";
import {Flex,Grid} from "@chakra-ui/react"


const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  const [data, setData] = useState([]);

  useEffect (()=> {
   
       axios("http://localhost:8080/products/?limit=3/?page=1").then((res) =>{
         setData(res.data.json());
         console.log(data);
       });
  }, []);

  return (
    <Flex direction="column">
       <AddProduct/>
      <Grid templateColumns="repeat(3,1fr)" gap="20px">
        {
          data.map((card) => (
            <Product key={card.id} card={card}/>
          ))
        }
      <Products/></Grid>
      <Pagination/>
    </Flex>
  );
};

export default Products;
