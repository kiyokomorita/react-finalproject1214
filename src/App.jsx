import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  Table,
  Td,
  Th,
  Tr
} from "@chakra-ui/react";
// import "./styles.css";

export const App = () => {
  return (
    <ChakraProvider>
      <Flex
        as="nav"
        bg="pink.200"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
          Title
        </Heading>
        <Flex align="center" fontSize="sm">
          <Box pr={4}>Reload</Box>
        </Flex>
      </Flex>

      <Flex>
        <input placeholder="Filter issues" />
      </Flex>

      <Table variant="striped" colorScheme="pink">
        <Tr>
          <Th>id</Th>
          <Th>Title</Th>
          <Th>State</Th>
          <Th>Url</Th>
          <Th>Created at</Th>
          <Th>Updated at</Th>
          <Th>
            <Button>+</Button>
          </Th>
        </Tr>
        <Tr>
          <Td>3333</Td>
          <Td>xxxxx</Td>
          <Td>Open</Td>
          <Td>https://xxxxxxx</Td>
          <Td>2021-12-14</Td>
          <Td>2021-12-14</Td>
          <Td>icon</Td>
          <Td>icon</Td>
        </Tr>
        <Tr>
          <Td>3333</Td>
          <Td>xxxxx</Td>
          <Td>Open</Td>
          <Td>https://xxxxxxx</Td>
          <Td>2021-12-14</Td>
          <Td>2021-12-14</Td>
          <Td>icon</Td>
          <Td>icon</Td>
        </Tr>
      </Table>
    </ChakraProvider>
  );
};
