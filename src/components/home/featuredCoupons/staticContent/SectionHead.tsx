import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
export default function SectionHead({
  titleKey,
  linkKey,
  linkHref,
}: {
  titleKey: string;
  linkKey: string;
  linkHref: string;
}) {
  const t = useTranslations("sectionHead");
  return (
    <div className="flex items-center gap-3 lg:text-2xl  text-md my-5">
      <h1>{t(titleKey)}</h1>
      <Link className="text-[#F3B35E] font-bold" href={`${linkHref}`}>
        {t(linkKey)}
      </Link>
    </div>  
  );
}
