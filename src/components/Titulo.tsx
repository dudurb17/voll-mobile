import { ITextProps, Text } from "native-base";
import { ReactNode } from "react";
interface Props extends ITextProps {
  children: ReactNode;
}

export function Titulo({ children, ...rest }: Props) {
  return (
    <Text
      fontSize="2xl"
      color={"gray.500"}
      textAlign={"center"}
      mt={5}
      bold
      {...rest}
    >
      {children}
    </Text>
  );
}
