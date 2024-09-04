const fetchStoresData = async (SearchStores: string): Promise<StoreType[]> => {
  try {
    const response = await fetch(SearchStores, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data as StoreType[];
  } catch (error) {
    console.error("Fetching stores data failed:", error);
    throw error;
  }
};

const useSearchStoresData = async (searchParam: string) => {
  try {
    const storesData = await fetchStoresData(`${searchStore}/${searchParam}`);
    return storesData;
  } catch (error) {
    console.error("Error in retrieving stores data:", error);
    return [];
  }
};
export default useSearchStoresData;