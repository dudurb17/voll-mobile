import { Text, VStack } from "native-base";
import React from "react";
import CardConsulta from "../components/CardConsulta";

const Consultas = () => {
  return (
    <VStack p={5}>
      <Text>Consultas</Text>
      <CardConsulta
        name="Eduardo"
        especialidade="Cardiologista"
        img="https://avatars.githubusercontent.com/u/114515828?v=4"
        data="20/05/2005"
        foiAfendado
        foiAtendido
      />
    </VStack>
  );
};

export default Consultas;
