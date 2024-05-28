"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { github } from "../_utils/icons";
import ThemeDropdown from "./themeDropdown/themeDropdown";
import SearchDialog from "./searchDialog/searchDialog";

function Navbar() {
  const router = useRouter();
  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="left"></div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchDialog />
        <div className="btn-group flex items-center gap-2">
          <ThemeDropdown />
          <Button
            className="source-code flex items-center gap-2"
            onClick={() => router.push("https//github.com")}
          >
            {github}
            Source Code
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
