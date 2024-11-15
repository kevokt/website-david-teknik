// import React from "react";
// import {
//   Button,
//   Box,
//   Container,
//   Flex,
//   HStack,
//   Text,
//   MenuIcon,
// } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import { CloseIcon } from "@chakra-ui/icons";

// const MenuToggle = ({ toggle, isOpen }) => {
//   return (
//     <Box display={{ base: "block", md: "none" }} onClick={toggle}>
//       {isOpen ? <CloseIcon /> : <MenuIcon />}
//     </Box>
//   );
// };

// const Navbar = () => {
//   return (
//     <Container maxW={"1140px"} px={4}>
//       <Flex
//         h={16}
//         alignItems={"center"}
//         justifyContent={"space-between"}
//         flexDir={{
//           base: "column",
//           sm: "row",
//         }}
//       >
//         <Text
//           fontSize={{ base: "22", sm: "28" }}
//           fontWeight={"bold"}
//           textTransform={"uppercase"}
//           textAlign={"center"}
//           bgGradient={"linear(to-r, cyan.400, blue.500)"}
//           bgClip={"text"}
//         >
//           <Link to={"/"}>CV. David Teknik Blower</Link>
//         </Text>

//         <HStack spacing={2} alignItems={"center"}>
//           <Link to={"/"}>
//             <Button>Home</Button>
//           </Link>

//           <Link to={"/product"}>
//             <Button>Product</Button>
//           </Link>

//           <Link to={"/clients"}>
//             <Button>Clients</Button>
//           </Link>

//           <Link to={"/contact"}>
//             <Button>Contact</Button>
//           </Link>
//         </HStack>
//       </Flex>
//     </Container>
//   );
// };

// export default Navbar;

import { Image, Flex, Button, HStack, chakra, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import MobileDrawer from "./MobileDrawer";

const CTA = "Get Started";

export default function Header() {
  return (
    <chakra.header id="header">
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        <Text
          fontSize={{ base: "16", sm: "16" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          <Link to={"/"}>CV. David Teknik Blower</Link>
        </Text>
        <HStack as="nav" spacing="2" display={{ base: "none", md: "flex" }}>
          <Link to={"/"}>
            <Button>Home</Button>
          </Link>

          <Link to={"/product"}>
            <Button>Product</Button>
          </Link>

          <Link to={"/clients"}>
            <Button>Clients</Button>
          </Link>

          <Link to={"/contact"}>
            <Button>Contact</Button>
          </Link>
        </HStack>

        <MobileDrawer />
      </Flex>
    </chakra.header>
  );
}
