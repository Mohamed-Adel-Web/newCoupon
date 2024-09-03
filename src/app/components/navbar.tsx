import LanguageSwitcher from "./LanguageSwitcher";

export default function NavBar() {
  const locale = "ar";
  return (
    <nav className="bg-[#212121]">
      <LanguageSwitcher locale={locale} />
    </nav>
  );
}
