import { useTranslations } from "next-intl";
import LinkLayout from "./LinkLayout";
import { useGetCategories } from "@/app/cors/Services/Categories";
import { ICategory } from "@/app/cors/interfaces/icategory";
import { formatHref } from "@/lib/utils";

export default async function DynamicLinks() {
  const t = useTranslations("LanguageSwitcher");
  const categories: ICategory[] = await useGetCategories(t("currentLanguage"));
  return (
    <>
      {categories.map((category) => {
        return (
          <LinkLayout
            key={category.id}
            title={category.name}
            href={`/${formatHref(category.name)}/${category.id}`}
          />
        );
      })}
    </>
  );
}
