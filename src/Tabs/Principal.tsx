import { Image, ScrollView, Text } from "native-base";
import React from "react";
import Logo from ".././assets/Logo.png";
import { Titulo } from "../components/Titulo";
import CardInput from "../components/CardInput";

const Principal = () => {
  return (
    <ScrollView p={5}>
      <Image mt={5} source={Logo} />
      <Titulo color={"blue.500"} alignSelf={"flex-start"}>
        Boas-vindas!
      </Titulo>
      <CardInput />
    </ScrollView>
  );
};

export default Principal;
