import {
  useDisclosure,
  Flex,
  Box,
  Button,
  VStack,
  Icon,
  HStack,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import Drawer from "./drawer";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import React from "react";

export default function MobileDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex display={{ base: "flex", md: "none" }}>
      <Button ref={btnRef} onClick={onOpen}>
        <IoMdMenu size="26px" />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
        <VStack alignItems="center" spacing="5">
          <Link to={"/"} onClick={onClose}>
            <Text>Home</Text>
          </Link>

          <Link to={"/product"} onClick={onClose}>
            <Text>Product</Text>
          </Link>

          <Link to={"/clients"} onClick={onClose}>
            <Text>Clients</Text>
          </Link>

          <Link to={"/contact"} onClick={onClose}>
            <Text>Contact</Text>
          </Link>
        </VStack>
      </Drawer>
    </Flex>
  );
}
