import { environment } from "../environment/environment";
import { ICategory } from "../interfaces/icategory";

const fetchCategoriesData = async (endPoint: string): Promise<ICategory[]> => {
  try {
    const response = await fetch(endPoint, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data as ICategory[];
  } catch (error) {
    console.error("Fetching Categories data failed:", error);
    throw error;
  }
};

const useGetCategories = async (lang: string) => {
  try {
    const CategoriesData = await fetchCategoriesData(
      `${environment.baseUrl}/category-user/${lang}`
    );
    return CategoriesData;
  } catch (error) {
    console.error("Error in retrieving Categories data:", error);
    return [];
  }
};
export { useGetCategories };
