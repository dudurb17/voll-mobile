import { ScrollView, Text, VStack } from "native-base";
import React from "react";
import CardInput from "../components/CardInput";
import { Titulo } from "../components/Titulo";
import CardConsulta from "../components/CardConsulta";
import { data } from "../utils/Data";

const Explorar = () => {
  return (
    <ScrollView flex={1}>
      <VStack p={5} flex={1}>
        <CardInput />
        <Titulo color={"blue.500"}>Resultado da busca</Titulo>

        {data.map((item) => {
          return (
            <CardConsulta
              name={item.name}
              img={item.img}
              especialidade={item.especialidade}
              key={item.id}
            />
          );
        })}
      </VStack>
    </ScrollView>
  );
};

export default Explorar;
