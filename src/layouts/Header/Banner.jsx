import React from "react";
import { Box, Text, Icon } from "@chakra-ui/react";
// import { InfoIcon } from "@chakra-ui/icons";
import { IoIosInformationCircleOutline } from "react-icons/io";


const Banner = () => {
  return (
    <Box
      id="banner"
      bg="black"
      color="white"
      textDecoration="underline"
      p={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      position="sticky"
      top={0}
      zIndex={900} 
    >
      <Text fontSize="md" mr={2}>
        FREE SHIPPING for orders over $300. Order today
      </Text>
      <IoIosInformationCircleOutline
      size="20px" />
    </Box>
  );
};

export default Banner;
