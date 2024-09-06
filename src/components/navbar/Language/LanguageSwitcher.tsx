  "use client";

  import { Globe } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { Link } from "@/i18n/routing";


  export default function LanguageSwitcher() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
            <Globe className="h-4 w-4" />
            <span className="sr-only"></span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Link href="/" locale="en" className="block w-full h-full">
              ENGLISH
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/" locale="ar" className="block   w-full h-full">
              ARABIC
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
