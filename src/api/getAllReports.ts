import { useQuery } from "react-query";
import { Report } from "../types/Report";
import { authInstance } from ".";

export const getAllReports = async () => {
  try {
    const response = await authInstance.get<{ data: Report[] }>("report");

    if (response.data.data) {
      return response.data.data;
    }
  } catch (e) {
    console.error(e);
  }
};

export function useGetAllReports() {
  return useQuery(["getAllReports"], () => getAllReports());
}
