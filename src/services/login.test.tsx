/**
 * @jest-environment jsdom
 */

import { login } from "./login";

// const mockSetIsLoggedIn = jest.fn();
// const mockNavigate = jest.fn();

// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useContext: () => ({
//     setIsLoggedIn: mockSetIsLoggedIn,
//   }),
// }));

// jest.mock("react-router-dom", () => ({
//   ...(jest.requireActual("react-router-dom") as any),
//   useNavigate: () => mockNavigate,
// }));

describe("login", () => {
  const mockEmail = "samuel@gmail.com";
  const mockPassword = "123456";

  it("Não deve exibir a mensagem de boas vindas sem o email", async () => {
    const response = await login(mockEmail, mockPassword);
    expect(response).toBeTruthy();
  });

  it("Deve exibir um erro caso o email ou password sejam invalido", async () => {
    const response = await login("email@gmail.com", "12345");
    expect(response).toBeFalsy();
  });
});
