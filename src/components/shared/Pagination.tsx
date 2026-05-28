"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
    <div className="mx-auto mt-6 flex justify-center gap-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
      ))}
    </div>
  );
};
