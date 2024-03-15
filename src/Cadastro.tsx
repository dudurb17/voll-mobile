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
import { Titulo } from "./components/Titulo";
import { EntradaTexto } from "./components/EntradaTexto";

export default function Cadastro() {
  return (
    <VStack flex={1} alignItems={"center"} justifyContent={"center"} p={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Titulo>Cadastro</Titulo>
      <Box>
        <EntradaTexto
          label={"Email"}
          placeholder={"Insira seu endereço de e-mail"}
        />
        <EntradaTexto label={"Senha"} placeholder={"Insira sua senha"} />
      </Box>
      <Button w={"100%"} bg={"blue.800"} mt={10} borderRadius="lg">
        Entrar
      </Button>
      <Link href="" mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box w={"100%"} flexDirection={"row"} justifyContent={"center"} mt={8}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity>
          <Text color="blue.500">Faça seu cadastro</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
