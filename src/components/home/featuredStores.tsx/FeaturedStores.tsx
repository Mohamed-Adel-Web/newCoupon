import { Suspense } from "react";
import SkeletonLoader from "@/components/cards/skeleton/SkeletonLoader";
import CardSkeleton from "@/components/cards/skeleton/CardSkeleton";
import SectionHead from "../featuredCoupons/staticContent/SectionHead";
import StoresList from "./StoresList";
export default async function FeaturedStoresSection({
  lang,
}: {
  lang: string;
}) {
  return (
    <>
      <SectionHead
        titleKey="featuredStoresOffers"
        linkKey="seeAllStores"
        linkHref="/discount-codes"
      />
      <Suspense
        fallback={
          <SkeletonLoader>
            <CardSkeleton />
          </SkeletonLoader>
        }
      >
        <StoresList lang={lang} />
      </Suspense>
    </>
  );
}
