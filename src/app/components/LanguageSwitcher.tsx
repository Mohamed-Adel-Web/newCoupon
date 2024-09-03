import { Link } from "@/i18n/routing";

const LanguageSwitcher = ({ locale }: { locale: string }) => (
  <Link href="/" locale={locale === "en" ? "ar" : "en"}>
    {locale === "en" ? "AR" : "EN"}
  </Link>
);
export default LanguageSwitcher;
