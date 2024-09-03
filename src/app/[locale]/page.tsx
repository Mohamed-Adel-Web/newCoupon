import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useFeaturedStoresData } from "./fetch/useFeatureStore";

export default async function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const data = await useFeaturedStoresData(params.locale);
  console.log(data);
  return (
    <div>
      {data.map((small) => {
        return <>{small.name}</>;
      })}
    </div>
  );
}
