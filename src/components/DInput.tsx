import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

interface IDInput {
  isError: boolean;
  name: string;
  value: string;
  placeholder: string;
  type: string;
  onChange: any;
}
const DInput = ({
  isError,
  name,
  value,
  placeholder,
  type,
  onChange,
}: IDInput) => {
  return (
    <>
      <FormControl isInvalid={isError} minHeight={'100px'}>
        <FormLabel>{name}</FormLabel>
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {isError && <FormErrorMessage>{name} is required.</FormErrorMessage>}
      </FormControl>
    </>
  );
};

export default DInput;
