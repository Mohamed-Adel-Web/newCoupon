import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

export default async function SearchBar() {

const t=useTranslations("searchBar")


  return (
    <>
    <div className="hidden md:block flex-1 max-w-md mx-4 bg-white text-black rounded">
            <form  className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <Input
                type="search"
                placeholder={t("placeHolder")}
                className="w-full pl-10 pr-4"
              />
              <Button type="submit" className="sr-only">Search</Button>
                {/* <div className="absolute z-10 w-full mt-1 bg-background border rounded-md shadow-lg max-h-60 overflow-auto">
                    <div  className="p-2 hover:bg-accent">
                    </div>
                </div> */}
            </form>
          </div>
    </>
  );
}
