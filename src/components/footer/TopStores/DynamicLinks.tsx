import { useTranslations } from "next-intl";
import LinkLayout from "../common/LinksLayout";
import { useFeaturedStores } from "@/app/cors/Services/Stores";
import { IStore } from "@/app/cors/interfaces/istore";

export default async function DynamicLinks() {
  const t = useTranslations("LanguageSwitcher");
  const stores: IStore[] = await useFeaturedStores(t("currentLanguage"));
  return (
    <>
      {stores.slice(0,5).map((store) => {
        return (
          <LinkLayout
            key={store.id}
            title={store.name}
            href={`/discount-codes/${store.id}`}
          />
        );
      })}
    </>
  );
}
