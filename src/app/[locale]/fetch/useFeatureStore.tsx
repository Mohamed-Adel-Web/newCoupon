const fetchStoresData = async (featuredStores: string): Promise<any[]> => {
  try {
    const response = await fetch(featuredStores, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data as any[];
  } catch (error) {
    console.error("Fetching stores data failed:", error);
    throw error;
  }
};

const useFeaturedStoresData = async (locale: string) => {
  try {
    const storesData = await fetchStoresData(
      `http://192.168.1.19/api/store-featured/${locale}`
    );
    return storesData;
  } catch (error) {
    console.error("Error in retrieving stores data:", error);
    return [];
  }
};
export { useFeaturedStoresData };
