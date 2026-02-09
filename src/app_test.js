Deno.test("Prueba básica de funcionamiento", () => {
  const x = 1 + 1;
  if (x !== 2) {
    throw Error("¡Algo va muy mal!");
  }
});
