import {
  VStack,
  Image,
  Text,
  Box,
  FormControl,
  Input,
  Button,
  Link,
} from "native-base";
import Logo from "./assets/Logo.png";
import { TouchableOpacity } from "react-native";

export default function Login() {
  return (
    <VStack flex={1} alignItems={"center"} justifyContent={"center"} p={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Text fontSize="2xl" color={"gray.500"} textAlign={"center"} mt={5} bold>
        Faça login em sua conta
      </Text>
      <Box>
        <FormControl mt={3}>
          <FormControl.Label>E-mail</FormControl.Label>
          <Input
            placeholder="Insira seu endereço de email"
            size={"lg"}
            w="100%"
            bg={"gray.100"}
            shadow={3}
          />
        </FormControl>
        <FormControl mt={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <Input
            placeholder="Insira sua senha"
            size={"lg"}
            w="100%"
            bg={"gray.100"}
            shadow={3}
          />
        </FormControl>
      </Box>
      <Button w={"100%"} bg={"blue.800"} mt={10} borderRadius="lg">
        Entrar
      </Button>
      <Link href="">Esqueceu sua senha?</Link>

      <Box w={"100%"} flexDirection={"row"} justifyContent={"center"} mt={10}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity>
          <Text color="blue.500">Faça seu cadastro</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
