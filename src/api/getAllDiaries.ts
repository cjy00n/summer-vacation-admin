import { useQuery } from "react-query";
import { authInstance } from ".";
import PageMeta from "../types/PageMeta";
import Diary from "../types/Diary";

export const getAllDiaries = async (page: number) => {
  try {
    const response = await authInstance.get<{ data: Diary[]; meta: PageMeta }>(
      "diary?field=MoreThanOrEqual&waringCount=0&page=" + page
    );

    if (response.data) {
      console.log(response.data, page);
      return { data: response.data.data, pageMeta: response.data.meta };
    }
  } catch (e) {
    console.error(e);
  }
};

export function useGetAllDiaries(page: number) {
  return useQuery(["getAllDiaries" + page], () => getAllDiaries(page));
}
