import { Avatar, Text, VStack } from "native-base";
import React from "react";
import { Botao } from "./Botao";

interface Props {
  name: string;
  img: string;
  especialidade: string;
  data?: string;
  foiAtendido?: boolean;
  foiAfendado?: boolean;
}

const CardConsulta = ({
  name,
  img,
  especialidade,
  data,
  foiAfendado,
  foiAtendido,
}: Props) => {
  return (
    <VStack
      w="100%"
      bg={foiAtendido ? "blue.100" : "white"}
      p={5}
      borderRadius={"lg"}
      shadow={2}
      mb={5}
    >
      <VStack flexDirection={"row"}>
        <Avatar
          size={"lg"}
          source={{
            uri: img,
          }}
        />
        <VStack pl={4}>
          <Text fontSize={"md"} bold>
            {name}
          </Text>
          <Text>{especialidade}</Text>
          <Text>{data}</Text>
        </VStack>
      </VStack>
      <Botao mt={4}>{foiAfendado ? "Cancelar" : "Agendar consulta"}</Botao>
    </VStack>
  );
};

export default CardConsulta;
