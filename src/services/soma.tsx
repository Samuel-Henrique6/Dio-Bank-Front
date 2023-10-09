export const soma = (num: number): number => {
  return num + 1;
};

export const multiplica = (num: number, mult: number): number | string => {
  return mult === 2 || mult === 3 ? num * mult : "Multiplicador não aceito!";
};
