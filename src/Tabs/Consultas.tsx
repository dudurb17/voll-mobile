import { Divider, ScrollView, Text, VStack } from "native-base";
import React from "react";
import CardConsulta from "../components/CardConsulta";
import { Titulo } from "../components/Titulo";
import { Botao } from "../components/Botao";

const Consultas = () => {
  return (
    <ScrollView p={5}>
      <Titulo color={"blue.500"}>Minhas consultas</Titulo>
      <Botao mt={5} mb={5}>
        Agendar nova consulta
      </Botao>
      <Divider />
      <Titulo color={"blue.500"} fontSize={"lg"} alignSelf={"flex-start"}>
        Próximas consultas:
      </Titulo>

      <CardConsulta
        name="Eduardo"
        especialidade="Cardiologista"
        img="https://avatars.githubusercontent.com/u/114515828?v=4"
        data="20/05/2005"
        foiAfendado
      />
      <Divider mt={5} />

      <Titulo color={"blue.500"} fontSize={"lg"} alignSelf={"flex-start"}>
        Consultas passadas:
      </Titulo>

      <CardConsulta
        name="Eduardo"
        especialidade="Cardiologista"
        img="https://avatars.githubusercontent.com/u/114515828?v=4"
        data="20/05/2005"
        foiAtendido
      />
      <CardConsulta
        name="Eduardo"
        especialidade="Cardiologista"
        img="https://avatars.githubusercontent.com/u/114515828?v=4"
        data="20/05/2005"
        foiAtendido
      />
      <CardConsulta
        name="Eduardo"
        especialidade="Cardiologista"
        img="https://avatars.githubusercontent.com/u/114515828?v=4"
        data="20/05/2005"
        foiAtendido
      />
    </ScrollView>
  );
};

export default Consultas;
