import { environment } from "../environment/environment";
import { IStore } from "../interfaces/istore";

const fetchStoresData = async (url: string): Promise<IStore[]> => {
  try {
    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data as IStore[];
  } catch (error) {
    console.error("Fetching stores data failed:", error);
    throw error;
  }
};

const useFeaturedStores = async (lang: string) => {
  try {
    const storesData = await fetchStoresData(`${environment.baseUrl}/store-featured/${lang}`);
    return storesData;
  } catch (error) {
    console.error("Error in retrieving stores data:", error);
    return [];
  }
};
export { useFeaturedStores };
