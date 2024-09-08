import LanguageSwitcher from "./Language/LanguageSwitcher";
import SearchBar from "./Search/SearchBar";
import SearchedList from "./Search/SearchedList";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
const NavMainMenu = dynamic(() => import("./MainMenu/NavMainMenu"));
import NavCategories from "./Categories/NavCategories";
import dynamic from "next/dynamic";
export default function NavbarLayout() {
  const t = useTranslations("navImage");
  return (
    <header>
      <nav className="bg-[#212121] shadow-md text-white">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href={"/"}>
                  <Image
                    src={t("logo")}
                    width={151}
                    height={51}
                    alt="Logo"
                    className="aspect-square	"
                  />
                </Link>
              </div>
            </div>
            <SearchBar />
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <div className="md:hidden">
                <SearchedList />
              </div>
              <div className="md:hidden">
                  <NavMainMenu />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <NavCategories />
    </header>
  );
}
