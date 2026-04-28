"use client";

import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  currentPage: number;
  totalPages: number;
  basePath?: string;
};

export const Pagination = ({ currentPage, totalPages, basePath }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  if (totalPages <= 1) {
    return null;
  }

  const handlePageChange = (page: number) => {
    if (page === currentPage) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());

    router.push(`${basePath ?? ""}?${params.toString()}`);
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
