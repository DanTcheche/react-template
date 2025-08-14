import { PropertyInterface } from "@/interfaces/propertyInterface";
import { api } from "../axios";

export const getHouseValuationsForAddress = async (address: string) => {
  const { data } = await api.get<PropertyInterface[]>(`v1/react-template`, {
    params: {
      address: address,
    },
  });
  return data;
};
