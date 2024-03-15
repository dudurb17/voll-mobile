import { VStack, Image, Box, Checkbox, ScrollView, Text } from "native-base";
import Logo from "./assets/Logo.png";
import { Titulo } from "./components/Titulo";
import { EntradaTexto } from "./components/EntradaTexto";
import { Botao } from "./components/Botao";
import { useState } from "react";
import { secoes } from "./utils/CadastroEntradaTexto";

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);

  function avancarSecao() {
    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1);
    }
  }
  function voltarSecao() {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1);
    }
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf={"center"} />
      <Titulo>{secoes[numSecao].titulo}</Titulo>
      <Box>
        {secoes[numSecao].entradaTexto.map((item) => {
          return (
            <EntradaTexto
              label={item.label}
              placeholder={item.placeholder}
              key={item.id}
            />
          );
        })}
      </Box>
      <Box>
        <Text color={"blue.800"} bold fontSize={"md"} mt={2} mb={2}>
          Selecione o plano
        </Text>
        {secoes[numSecao].checkbox.map((item) => {
          return (
            <Checkbox key={item.id} value={item.value}>
              {item.value}
            </Checkbox>
          );
        })}
      </Box>
      {numSecao > 0 && (
        <Botao onPress={() => voltarSecao()} bgColor={"gray.400"}>
          voltar
        </Botao>
      )}
      <Botao onPress={() => avancarSecao()} mt={4}>
        Avançar
      </Botao>
    </ScrollView>
  );
}
