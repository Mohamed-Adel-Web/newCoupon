import { ICategory } from "@/app/cors/interfaces/icategory";
import { useGetCategories } from "@/app/cors/Services/Categories";
import LinkLayout from "./LinkLayout";
import { useTranslations } from "next-intl";
import MoreCategories from "./MoreCategories";
import { formatHref } from "@/lib/utils";
export default async function DynamicLinks() {
  const t = useTranslations("LanguageSwitcher");
  const categoriesData: ICategory[] = await useGetCategories(
    t("currentLanguage")
  );
  const categories: ICategory[] = categoriesData.slice(0, 8);
  const moreCategories: ICategory[] = categoriesData.slice(8);
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
      {moreCategories.length > 0 && (
        <MoreCategories moreCategories={moreCategories} />
      )}
    </>
  );
}
