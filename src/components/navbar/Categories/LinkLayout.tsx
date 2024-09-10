import { Link } from "@/i18n/routing";

export default function LinkLayout({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <li className="mx-2" >
      <Link
        href={href}
        className="font-bold block text-md text-black  hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {title}
      </Link>
    </li>
  );
}
