import {
  Center,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";

interface ICard {
  isError: boolean;
  value: string;
  onChange: any;
}
const Card = ({ isError, value, onChange }: ICard) => {
  return (
    <>
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <FormControl isInvalid={isError}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Email"
          value={value}
          onChange={onChange}
        />
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
      <HStack>
        <PinInput type="alphanumeric" mask>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
    </>
  );
};

export default Card;
