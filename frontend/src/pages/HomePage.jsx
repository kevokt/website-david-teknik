import React, { useEffect } from "react";
import { Container, Text, VStack, SimpleGrid, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  return (
    <Container maxW={"Container.x1"} py={5}>
      <VStack spacing={3}>
        <Box
          bgSize="cover"
          bgImage="url(https://images.unsplash.com/photo-1579618215542-2ed5e10b65ed?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
          w="100vw"
          h={"xl"}
          pt={10}
        >
          <Text
            fontSize={"30"}
            fontWeight={"bold"}
            color={"white"}
            textAlign={"center"}
          >
            Selamat Datang di <br /> CV. David Teknik Blower
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default HomePage;
