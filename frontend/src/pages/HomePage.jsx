import React, { useEffect } from "react";
import {
  Container,
  Text,
  VStack,
  SimpleGrid,
  Box,
  Flex,
  Button,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const HomePage = () => {
  const fontSize = { base: "1rem", md: "1.25rem" };
  return (
    <Container maxW={"Container.x1"} py={5}>
      <VStack spacing={3}>
        <Box
          bgSize="cover"
          bgImage="url(https://images.unsplash.com/photo-1579618215542-2ed5e10b65ed?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
          w="100vw"
          h={"87vh"}
          maxH={"600px"}
        >
          <Flex
            flexDirection={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
            height={"100%"}
            padding={"80px"}
          >
            <Text
              fontSize={"30"}
              fontWeight={"bold"}
              color={"white"}
              textAlign={"center"}
              marginTop={"10px"}
            >
              Selamat Datang di <br /> CV. David Teknik Blower
            </Text>

            <Flex flexDirection={"column"} spacing="2">
              <Button width="300px" mb={5}>
                Pelajari Lebih Lanjut
              </Button>
              <Button>Lihat Produk Kami</Button>
            </Flex>
          </Flex>
        </Box>

        <Box w={{ base: "80%", lg: "1000px" }} mt={"50px"}>
          <Text fontSize={fontSize}>
            CV. David Teknik Blower merupakan salah satu usaha yang bergerak
            dalam bidang produksi dan distribusi kipas industri. Dengan
            pengalaman bertahun-tahun dalam desain, fabrikasi, dan instalasi
            sistem kipas industri yang sukses, kami melayani distribusi dalam
            berbagai sektor industri.
          </Text>

          <Text fontSize={fontSize} mt={"30px"}>
            Kami berkomitmen untuk memberikan solusi terbaik dalam pengendalian
            polusi udara dan sistem ventilasi industri. Dengan tim ahli yang
            berdedikasi dan teknologi terkini, kami memastikan setiap proyek
            yang kami tangani memenuhi standar kualitas tertinggi dan kepuasan
            pelanggan. CV. David Teknik Blower selalu siap untuk menghadapi
            tantangan baru dan memberikan kontribusi positif bagi industri di
            Indonesia.
          </Text>

          <Text fontSize={fontSize} mt={"30px"}>
            Produk Kami adalah:
          </Text>
          <OrderedList fontSize={fontSize}>
            <ListItem>Axial Fan</ListItem>
            <Text>
              Dirancang untuk memaksimalkan aliran udara dalam berbagai
              aplikasi, seperti sistem ventilasi gedung, pabrik, dan fasilitas
              industri.
            </Text>
            <ListItem>Centrifugal Fan</ListItem>
            <Text>
              Solusi ideal untuk sistem yang memerlukan tekanan tinggi dan
              aliran udara besar. Cocok untuk digunakan dalam sistem HVAC,
              pabrik kimia, dan proses industri lainnya.
            </Text>
            <ListItem>Blower Custom</ListItem>
            <Text>
              Kami juga menyediakan layanan kustomisasi untuk memenuhi kebutuhan
              spesifik pelanggan. Dengan tim ahli yang berpengalaman, kami siap
              merancang dan memproduksi blower sesuai permintaan
            </Text>
          </OrderedList>
        </Box>
      </VStack>
    </Container>
  );
};

export default HomePage;
