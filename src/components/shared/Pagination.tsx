"use client";

import { useEffect, useState, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type Props = {
  currentPage: number;
  totalPages: number;
  basePath?: string;
  scrollTargetId?: string;
};

export const Pagination = ({
  currentPage,
  totalPages,
  basePath,
  scrollTargetId,
}: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [pendingScrollTarget, setPendingScrollTarget] = useState<string | null>(
    null,
  );
  const isMobile = useMediaQuery("(max-width: 767px)", false);

  // Max pages to show on mobile vs tablet+
  const maxVisiblePages = isMobile ? 5 : 12;

  // Generate page numbers with ellipsis
  const pages = useMemo(() => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const result: (number | "...")[] = [];

    // Always show first page
    result.push(1);

    // Calculate range around current page
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    // Adjust if we're near the edges
    if (currentPage <= 2) {
      end = 4;
    } else if (currentPage >= totalPages - 2) {
      start = totalPages - 3;
    }

    // Add ellipsis after first page if needed
    if (start > 2) {
      result.push("...");
    }

    // Add pages in the middle range
    for (let i = start; i <= end; i++) {
      result.push(i);
    }

    // Add ellipsis before last page if needed
    if (end < totalPages - 1) {
      result.push("...");
    }

    // Always show last page
    result.push(totalPages);

    return result;
  }, [totalPages, currentPage, maxVisiblePages]);

  useEffect(() => {
    if (!pendingScrollTarget) {
      return;
    }

    const targetElement = document.getElementById(pendingScrollTarget);

    if (!targetElement) {
      return;
    }

    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    setPendingScrollTarget(null);
  }, [currentPage, pendingScrollTarget]);

  if (totalPages <= 1) {
    return null;
  }

  const handlePageChange = (page: number) => {
    if (page === currentPage) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());

    const targetPath = basePath ?? pathname;

    if (scrollTargetId) {
      setPendingScrollTarget(scrollTargetId);
    }

    router.push(`${targetPath}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="mx-auto mt-6 flex justify-center gap-1 sm:gap-2">
      {pages.map((page, idx) => {
        if (page === "...") {
          return (
            <span
              key={`ellipsis-${idx}`}
              className="rounded px-2 py-2 font-normal text-textDarkGreen"
            >
              ...
            </span>
          );
        }

        return (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            aria-current={page === currentPage ? "page" : undefined}
            className={`rounded px-2 py-2 ${
              page === currentPage
                ? "font-bold text-textDarkGreen"
                : "font-normal"
            }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
