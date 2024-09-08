import FeaturedCouponsSection from "@/components/home/featuredCoupons/FeaturedCoupons";
import { Metadata } from "next";
import FeaturedStoresSection from "@/components/home/featuredStores.tsx/FeaturedStores";
import { getTranslations } from "next-intl/server";
import { lazy, Suspense } from "react";

const CouponInstruction = lazy(
  () => import("@/components/home/couponsInstruction/CouponInstruction")
);
import SwiperSection from "@/components/home/mainSlider/SwiperSection";
import SwiperSkeleton from "@/components/home/mainSlider/SwiperSkeleton";

export const generateMetadata = async ({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> => {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "home" });
  const baseUrl = "https://shops-coupons.com";
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    keywords: t("meta.keywords"),
    openGraph: {
      images: [`${baseUrl}${t("meta.openGraph")}`],
    },
  };
};
export default async function HomePage() {
  return (
    <>
      <section className="my-3 text-center">
        <Suspense fallback={<SwiperSkeleton />}>
          <SwiperSection />
        </Suspense>
      </section>
      <section className="my-12 text-start">
        <FeaturedCouponsSection />
      </section>
      <section className="my-12 text-start">
        <FeaturedStoresSection />
      </section>
      <section className="my-12 text-start">
        <Suspense>
          <CouponInstruction />
        </Suspense>
      </section>
    </>
  );
}
