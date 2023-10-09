import { Button } from "@chakra-ui/react";

interface IButton {
  onClick: () => {} | void;
  color: string;
  size: string;
  w: string;
  mt: string;
  value: string;
}

const ButtonChakra = ({ onClick, color, size, w, mt, value }: IButton) => {
  return (
    <Button onClick={onClick} colorScheme={color} size={size} w={w} mt={mt}>
      {value}
    </Button>
  );
};

export default ButtonChakra;
