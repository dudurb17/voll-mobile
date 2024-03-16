import {
  Box,
  Divider,
  Image,
  ScrollView,
  Text,
  VStack,
  View,
} from "native-base";
import React from "react";
import Logo from ".././assets/Logo.png";
import { Titulo } from "../components/Titulo";
import CardInput from "../components/CardInput";
import { depoimentos } from "../utils/Depoimentos";

const Principal = () => {
  return (
    <ScrollView flex={1}>
      <VStack p={5} flex={1}>
        <Image mt={5} source={Logo} />
        <Titulo color={"blue.500"} alignSelf={"flex-start"}>
          Boas-vindas!
        </Titulo>
        <CardInput />
        <Titulo color={"blue.800"} mb={5}>
          Depoimentos
        </Titulo>
        {depoimentos.map((item) => {
          return (
            <Box key={item.id}>
              <Text textAlign={"justify"}>{item.text}</Text>
              <Titulo fontSize={16} mt={2}>
                {item.local}
              </Titulo>
              <Divider />
            </Box>
          );
        })}
      </VStack>
    </ScrollView>
  );
};

export default Principal;
