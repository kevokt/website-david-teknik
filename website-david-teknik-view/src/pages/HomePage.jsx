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
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import ProductCard from "../components/ProductCard";
import { GiComputerFan } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa";

const HomePage = () => {
  const paragraphFontSize = { base: "1rem", md: "1.25rem" };
  return (
    <Container maxW={"Container.x1"} py={5} mt={0}>
      <VStack spacing={3}>
        <Box
          bgSize="cover"
          bgImage="url(https://images.unsplash.com/photo-1579618215542-2ed5e10b65ed?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
          w="100vw"
          h={"90vh"}
          maxH={"800px"}
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

        <Box
          w={{ base: "80%", lg: "1000px" }}
          my={"50px"}
          border={"1px solid red"}
        >
          <Center>
            <Text as={"h2"} fontSize={"1.75rem"} fontWeight={"600"}>
              About Us
            </Text>
          </Center>

          <Text fontSize={paragraphFontSize}>
            CV. David Teknik Blower merupakan salah satu usaha yang bergerak
            dalam bidang produksi dan distribusi kipas industri. Dengan
            pengalaman bertahun-tahun dalam desain, fabrikasi, dan instalasi
            sistem kipas industri yang sukses, kami melayani distribusi dalam
            berbagai sektor industri.
          </Text>

          <Text fontSize={paragraphFontSize} mt={"30px"}>
            Kami berkomitmen untuk memberikan solusi terbaik dalam pengendalian
            polusi udara dan sistem ventilasi industri. Dengan tim ahli yang
            berdedikasi dan teknologi terkini, kami memastikan setiap proyek
            yang kami tangani memenuhi standar kualitas tertinggi dan kepuasan
            pelanggan. CV. David Teknik Blower selalu siap untuk menghadapi
            tantangan baru dan memberikan kontribusi positif bagi industri di
            Indonesia.
          </Text>
        </Box>

        <Box
          w={{ base: "80%", lg: "1000px" }}
          my={"50px"}
          border={"1px solid red"}
        >
          <Center>
            <Text as={"h2"} fontSize={"1.75rem"} fontWeight={"600"}>
              Our Products
            </Text>
          </Center>

          <Flex
            p={50}
            w="full"
            alignItems="center"
            justifyContent="center"
            gap={4}
            flexDirection={{ base: "column", md: "row" }}
            mt={0}
            py={4}
          >
            <ProductCard
              title="Axial Fan"
              description="Dirancang untuk memaksimalkan aliran udara dalam berbagai aplikasi, seperti sistem ventilasi gedung, pabrik, dan fasilitas industri."
              imgSrc="https://plus.unsplash.com/premium_photo-1677172408819-a493426f6e10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <ProductCard
              title="Centrifugal Fan"
              imgSrc="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="Solusi ideal untuk sistem yang memerlukan tekanan tinggi dan aliran udara besar. Cocok untuk digunakan dalam sistem HVAC, pabrik kimia, dan proses industri lainnya."
            />

            <ProductCard
              title="Blower Custom"
              imgSrc="https://images.unsplash.com/photo-1464490997959-0c65eee1cc26?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="Kami juga menyediakan layanan kustomisasi untuk memenuhi kebutuhan spesifik pelanggan. Dengan tim ahli yang berpengalaman, kami siap merancang dan memproduksi blower sesuai permintaan"
            />
          </Flex>
          <Flex justifyContent="center">
            <Button
              rightIcon={<GiComputerFan />}
              colorScheme="blue"
              variant="outline"
            >
              Lihat Produk Kami Lebih Lanjut
            </Button>
          </Flex>
        </Box>

        <Box
          w={{ base: "80%", lg: "1000px" }}
          my={"50px"}
          border={"1px solid red"}
        >
          <Center>
            <Text
              as={"h2"}
              fontSize={"1.75rem"}
              fontWeight={"600"}
              align={"center"}
            >
              Our Contacts and Location
            </Text>
          </Center>

          <Center>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253763.23382407028!2d106.65333026723877!3d-6.387481226970513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e95620a297d3%3A0x1cfd4042316fb217!2sDepok%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1732946256664!5m2!1sen!2sid"
              width="400"
              height="250"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Center>
          <Center>
            <Button
              rightIcon={<FaWhatsapp />}
              colorScheme="green"
              variant="outline"
            >
              Kontak Kami Melalui WhatsApp
            </Button>
          </Center>
        </Box>
      </VStack>
    </Container>
  );
};

export default HomePage;
