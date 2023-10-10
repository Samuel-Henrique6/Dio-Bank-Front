import {
  changeLocalStorage,
  createLocalStorage,
  getLocalStorage,
} from "./storage";

const dioBank = {
  login: false,
};

describe("storage", () => {
  const mockSetItem = jest.spyOn(Storage.prototype, "setItem");

  it("Deve retornar o objeto do localStorage com a chave diobank", () => {
    const getItem = jest.spyOn(Storage.prototype, "getItem");
    getLocalStorage();
    expect(getItem).toHaveBeenCalledWith("diobank");
  });

  it("Deve criar o objeto no localStorage", () => {
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });

  it("Deve alterar o valor do objeto no localStorage", () => {
    changeLocalStorage(dioBank);
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });
});
