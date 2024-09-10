import { Link } from "@/i18n/routing";

export default function LinkLayout({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <li className="mx-4">
      <Link href={href} className="font-bold block text-md text-white">
        {title}
      </Link>
    </li>
  );
}
``