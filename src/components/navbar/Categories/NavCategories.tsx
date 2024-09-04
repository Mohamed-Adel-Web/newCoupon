import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Button } from "../../ui/button";
import { Link } from "@/i18n/routing";
import StaticLinks from "./StaticLinks";
import DynamicLinks from "./DynamicLinks";

export default function NavCategories() {
  return (
    <div className="bg-custom-gradient hidden md:block ">
      <div className="container">
        <div className="flex items-center h-12 text-sm ">
          <ul className=" flex ">
            <StaticLinks />
            <DynamicLinks/>
          </ul>
        </div>
      </div>
    </div>
  );
}
