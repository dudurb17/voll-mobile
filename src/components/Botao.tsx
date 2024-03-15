import { Button, ITextProps } from "native-base";
import { Children, ReactNode } from "react";

interface Props extends ITextProps {
  children: ReactNode;
}

export function Botao({ children, ...rest }: Props) {
  return (
    <Button w={"100%"} bg={"blue.800"} mt={10} borderRadius="lg" {...rest}>
      {children}
    </Button>
  );
}
