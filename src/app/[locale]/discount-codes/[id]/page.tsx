import { IStore } from "@/app/cors/interfaces/istore";
import { GetSingleStore } from "@/app/cors/Services/Stores";
import StoreCoupon from "@/components/SingleStore/StoreCoupon";
import StoreSite from "@/components/SingleStore/StoreSite";
import Title from "@/components/SingleStore/Title";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const locale = await getLocale();
  const store: IStore = await GetSingleStore(locale, params.id);
  return {
    title: store.meta?.meta_title,
    description: store.meta?.meta_description,
    keywords: store.meta?.meta_keyword,
    openGraph: {
      images: [`${store.image}`],
    },
  };
};
export default async function SingleStore({
  params,
}: {
  params: { id: string };
}) {
  const locale = await getLocale();
  const store = await GetSingleStore(locale, params.id);
  return (
    <section className="my-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8 col-span-12 space-y-4">
          <div className="box-layout">
            <Title title={store.title} name={store.name} />
          </div>

          <div className="box-layout grid grid-cols-12 gap-3 ">
            {store.coupons.map((coupon) => {
              return <StoreCoupon key={coupon.code} coupon={coupon}/>;
            })}
          </div>
          <div
            className="box-layout"
            dangerouslySetInnerHTML={{ __html: store.description }}
          ></div>
        </div>
        <div className="md:col-span-4 col-span-12 space-y-4  ">
          <div className="box-layout text-center ">
            <StoreSite
              link={store.link}
              image={store.image}
              title={store.title}
              discount={store.discount}
            />
          </div>
          <div
            className="box-layout"
            dangerouslySetInnerHTML={{ __html: store.about }}
          ></div>
        </div>
      </div>
    </section>
  );
}
