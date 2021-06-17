export const NAME_APP = "La toto store";
export const DESCRIPTION =
  "En la toto store vas a encontrar mejores ofertas que solo deportes";
export const suma = (num1, num2) => {
  return num1 + num2;
};

export async function getData(categorias) {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${categorias}`
  );
  const data = await response.json();
  return data.results;
}
