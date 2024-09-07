"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
export function PaginationComponent({
  currentPage,
  lastPage,
}: {
  currentPage: number;
  lastPage: number;
}) {
  const t=useTranslations("pagination")
  const searchParam = useSearchParams();
  const [currentPageState, setCurrentPage] = useState(currentPage);
  useEffect(() => {
    const pageFromUrl = Number(searchParam.get("page")) || 1;
    if (pageFromUrl >= 1 && pageFromUrl <= lastPage) {
      setCurrentPage(pageFromUrl);
    }
  }, [searchParam, lastPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= lastPage) {
      setCurrentPage(page);
    }
  };

  return (
    <Pagination className="flex justify-center items-center space-x-2 mt-4 bg-white shadow-lg p-4 rounded-md">
      <PaginationContent className="flex gap-2">
        {/* Previous Button */}
        {currentPageState > 1 && (
          <PaginationItem>
            <Link
              href={`?page=${currentPageState - 1}`}
              scroll={true}
              onClick={() => handlePageChange(currentPageState - 1)}
              className={`px-3 py-1 rounded-md border bg-white hover:bg-gray-100 text-gray-700`}
            >
              {t("pervious")}
            </Link>
          </PaginationItem>
        )}

        {/* Pagination Links */}
        {Array.from({ length: lastPage }, (_, index) => {
          const pageNumber = index + 1;
          return (
            <PaginationItem key={pageNumber}>
              <Link
                href={`?page=${pageNumber}`}
                scroll={true}
                onClick={() => handlePageChange(pageNumber)}
                className={`px-3 py-1 rounded-md border ${
                  currentPageState === pageNumber
                    ? "bg-blue-500 text-white"
                    : "bg-white hover:bg-gray-100 text-gray-700"
                }`}
              >
                {pageNumber}
              </Link>
            </PaginationItem>
          );
        })}

        {/* Next Button */}
        {currentPageState < lastPage && (
          <PaginationItem>
            <Link
              href={`?page=${currentPageState + 1}`}
              scroll={true}
              onClick={() => handlePageChange(currentPageState + 1)}
              className={`px-3 py-1 rounded-md border bg-white hover:bg-gray-100 text-gray-700`}
            >
              {t("next")}
            </Link>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
