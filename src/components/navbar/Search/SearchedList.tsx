"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
export default function SearchedList() {
  const t = useTranslations("searchBar");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen} >
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 md:hidden" align="end" sideOffset={5}>
        <form className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <Input
            type="search"
            placeholder={t("placeHolder")}
            className="w-full pl-10 pr-4"
          />
          <Button type="submit" className="sr-only">
            Search
          </Button>
          {/* <div className="absolute z-10 w-full mt-1 bg-background border rounded-md shadow-lg max-h-60 overflow-auto">
                    <div  className="p-2 hover:bg-accent">
                    </div>
                </div> */}
        </form>
      </PopoverContent>
    </Popover>
  );
}
