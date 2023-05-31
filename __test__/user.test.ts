import { User, Platform } from "../src/user";

describe("User", () => {
  let user: User;
  let plataforma: Platform;

  beforeEach(() => {
    user = new User("123", "John Doe", "johndoe@example.com");
    plataforma = new Platform("Plataforma 1", "https://example.com");
  });

  test("Registrar al usuario como observer de la plataforma", () => {
    user.registerOnPlataform(plataforma);

    // Verificar que el usuario se haya registrado como observador de la plataforma
    expect(plataforma.observers).toContain(user);
  });

});
