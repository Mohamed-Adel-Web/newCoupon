import SectionHead from "./staticContent/SectionHead";
import CouponsList from "./CouponsList";
import { Suspense } from "react";
import SectionFooter from "./staticContent/SeactionFooter";
import SkeletonLoader from "@/components/cards/skeleton/SkeletonLoader";
import CardSkeleton from "@/components/cards/skeleton/CardSkeleton";
export default async function FeaturedCouponsSection({
  lang,
}: {
  lang: string;
}) {
  return (
    <>
      <SectionHead
        titleKey="onlineDiscountCodes"
        linkKey="seeAllCoupons"
        linkHref="/hot-discount-coupons-deals"
      />
      <Suspense
        fallback={
          <SkeletonLoader>
            <CardSkeleton />
          </SkeletonLoader>
        }
      >
        <CouponsList lang={lang} />
      </Suspense>

      <SectionFooter />
    </>
  );
}
