import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Diogo Martins</Text>
        <Text color="gray.300" fontSize="small">
        diogomartins200214@gmail.com
        </Text>
      </Box>
      
      <Avatar size="md" name="Diogo Martins" src="https://github.com/diogom14.png" />
    </Flex>
    )
  }