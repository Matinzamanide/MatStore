import axios from "axios";

const client = axios.create({
  baseURL: "https://upcdn.io/W142ish/raw/uploads/2024/11/22/4kBM9mQuFu-db.json",
});

export const getProducts = async () => {
  const { data } = await client("");
  return data.products;
};

export const getProduct = async (id: number | string) => {
  const { data } = await client("");
  return data.products[parseInt(id as string) - 1];
};
