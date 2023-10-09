/**
 * @jest-environment jsdom
 */

import { boasVindas } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it("Deve exibir um alert com boas vindas", () => {
    boasVindas();
    expect(mockAlert).toHaveBeenCalledWith("Bem vindo!");
  });

});
