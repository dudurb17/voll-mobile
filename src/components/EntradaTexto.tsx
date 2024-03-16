import { FormControl, ITextProps, Input } from "native-base";
import { ReactNode } from "react";

interface Props extends ITextProps {
  label?: string;
  placeholder: string;
}

export function EntradaTexto({ label, placeholder, ...rest }: Props) {
  return (
    <FormControl mt={3}>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        placeholder={placeholder}
        size={"lg"}
        w="100%"
        bg={"gray.100"}
        shadow={3}
        {...rest}
      />
    </FormControl>
  );
}
