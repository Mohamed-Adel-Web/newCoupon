import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher");
  return (
    <div>
      {" "}
      <Link href="/" locale={t("switchedLanguage")} className="uppercase text-xl">
        {t("switchedLanguage")}
      </Link>
    </div>
  );
}
