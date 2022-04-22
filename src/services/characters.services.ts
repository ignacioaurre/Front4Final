import DataResult from "../types/data.types";

export const getCharactersAPI = async (name: string): Promise<DataResult> => {
  // let params = "?";
  const response = await fetch(name);
  const data = response.json();
  return data;
};
