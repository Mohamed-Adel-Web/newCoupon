import { useTranslations } from "next-intl";
import useGetSwiper from "../cors/Services/Slider";
import { ISlider } from "../cors/interfaces/islider";
import MainSlider from "@/components/home/mainSlider/mainSlider";
import FeaturedCouponsSection from "@/components/home/featuredCoupons/FeaturedCoupons";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";
import FeaturedStoresSection from "@/components/home/featuredStores.tsx/FeaturedStores";
import { getTranslations } from "next-intl/server";
const CouponInstruction = lazy(
  () => import("@/components/home/couponsInstruction/CouponInstruction")
);
import { lazy, Suspense } from "react";
import Loading from "./loading";

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
export default async function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const swiperData: ISlider[] = await useGetSwiper(params.locale);
  return (
    <>
      <section className="my-3 text-center">
        <MainSlider images={swiperData} />
      </section>
      <section className="my-12 text-start">
        <FeaturedCouponsSection />
      </section>
      <section className="my-12 text-start">
        <FeaturedStoresSection />
      </section>
      <section className="my-12 text-start">
        <Suspense fallback={<Loading />}>
          <CouponInstruction />
        </Suspense>
      </section>
      <Toaster />
    </>
  );
}
