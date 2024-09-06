import { environment } from "../environment/environment";
import { ICoupon } from "../interfaces/icoupon";

const fetchCouponsData = async (url: string): Promise<ICoupon[]> => {
  try {
    const response = await fetch(url, {
      method: "GET",
      next: {
        revalidate: 21600,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data as ICoupon[];
  } catch (error) {
    console.error("Fetching coupons data failed:", error);
    throw error;
  }
};

const useFeaturedCoupons = async (lang: string) => {
  try {
    const couponsData = await fetchCouponsData(
      `${environment.baseUrl}/coupon-featured/${lang}`
    );
    return couponsData;
  } catch (error) {
    console.error("Error in retrieving coupons data:", error);
    return [];
  }
};
export { useFeaturedCoupons };
