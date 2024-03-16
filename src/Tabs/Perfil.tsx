import { Text, VStack, ScrollView, Avatar, Divider } from "native-base";
import React from "react";
import { Titulo } from "../components/Titulo";

const Perfil = () => {
  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems={"center"} p={5}>
        <Titulo color={"blue.500"}>Meu Perfil</Titulo>
        <Avatar
          size={"xl"}
          source={{
            uri: "https://avatars.githubusercontent.com/u/114515828?v=4",
          }}
          mt={5}
        />
        <Titulo color={"blue.500"}>Informações pessoais</Titulo>
        <Titulo fontSize="lg" mb={1}>
          Eduardo Bedin
        </Titulo>
        <Text>24/01/2005</Text>
        <Text>Santa Catarina</Text>
        <Divider />
        <Titulo color={"blue.500"} mb={1}>
          Histórico médico
        </Titulo>
        <Text>Bronquite</Text>
        <Text>Sinusite</Text>
      </VStack>
    </ScrollView>
  );
};

export default Perfil;
