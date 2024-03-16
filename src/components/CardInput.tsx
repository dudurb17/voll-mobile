import { VStack } from "native-base";
import React from "react";
import { EntradaTexto } from "./EntradaTexto";
import { Botao } from "./Botao";

const CardInput = () => {
  return (
    <VStack shadow={"2"} bg={"white"} borderRadius={"lg"} m={1}>
      <EntradaTexto
        placeholder="Digite a especialidade"
        bg={"gray.100"}
        w={"90%"}
        alignSelf={"center"}
      />

      <EntradaTexto
        placeholder="Digite sua localização"
        bg={"gray.100"}
        w={"90%"}
        alignSelf={"center"}
      />
      <Botao mt={5} mb={5} w={"90%"} alignSelf={"center"}>
        Buscar
      </Botao>
    </VStack>
  );
};

export default CardInput;
